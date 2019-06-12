<?php

namespace Symbiote\Components;

use Exception;
use SSViewer;
use SSViewer_Scope;
use HTMLText;
use Text;
use Injector;
use SSTemplateParser;
use SSTemplateParseException;
use ArrayList;
use ArrayData;
use Debug;
use SS_List;
use DataObject;
use StringField;
use ArrayListExportable;

class ComponentService
{
    /**
     * @param array            $data
     * @param SSTemplateParser $parser
     * @return string The PHP code to insert into the cached SS template file
     */
    public function generateTemplateCode(array $data, $parser)
    {
        // output data
        $php = "\$_props = array();\n";

        // iterate properties
        $componentName = $data['ComponentName']['text'];
        $properties = isset($data['arguments']) ? $data['arguments'] : array();
        foreach ($properties as $i => $prop) {
            // Extract property / values from parser information
            $propAndValue = explode('=>', $prop);
            $propName = trim($propAndValue[0]);
            $propName = trim($propName, '\'');
            $propName = trim($propName, '"');
            $propValue = $propAndValue[1];
            
            // template errors
            if (strpos($propValue, '<% if') !== false) {
                throw new SSTemplateParseException(
                    'Missing < % end_if % > inside property "' . $propName . '" on component "' . $componentName . '"',
                    $parser
                );
            } else if (strpos($propValue, '<% loop') !== false) {
                throw new SSTemplateParseException(
                    'Cannot use < % loop % > inside property "' . $propName . '" on component "' . $componentName . '"',
                    $parser
                );
            }

            // process property
            switch ($propName) {
                case '_json':
                    {
                        $php .= $this->handlePropertyJSON($propValue, $parser);
                        break;
                    }
                default:
                    {
                        // restricted name error
                        if ($propName[0] === '_') {
                            throw new SSTemplateParseException('Invalid special property type: "' . $propName . '", properties that start with a _ are reserved for special functionality. Available special property types are: "_json".', $parser);
                            break;
                        }
                        $php .= $this->handleProperyNormal($propValue, $propName);
                        break;
                    }
            }
        }

        // handle child html
        $php .= self::handleChildHTML($data, $properties, $parser);
        
        // final render call for output php
        $php .= "\$val .= Injector::inst()->get('Symbiote\\Components\\ComponentService')->renderComponent('$componentName', \$_props, \$scope);\nunset(\$_props);\n";

        return $php;
    }

    private static function handleProperyNormal($propValue, $propName)
    {
        // buffer vals for conversion to php
        $propValues = [];

        // Modify provided PHP code
        $valueParts = explode('[_CPB]', $propValue);
        foreach ($valueParts as $valuePart) {
            $valuePart = trim($valuePart);
            $values = explode('[_CFP]', $valuePart);
            foreach ($values as $value) {
                if ($value === "''") {
                    // NOTE(Jake): 2018-04-29
                    //
                    // Remove blank string concats from template. This is to avoid an object from
                    // being cast to a string, like getAttributesHTML().
                    //
                    // We want to avoid this so that in SS4, there attributes aren't double quoted as
                    // HTML is escaped by default.
                    //
                    continue;
                }
                $value = trim($value);
                $propValues[] = $value;
            }
        }

        return self::Prop2PHP($propName, $propValues);
    }

    private static function handlePropertyJSON($propValue, $parser)
    {
        // get json data
        $jsonString = $propValue;
        $jsonString = trim($jsonString);
        $jsonString = trim($jsonString, '\'');
        $jsonString = trim($jsonString, '"');
        $jsonString = str_replace(array("\\\\\\'", '\\\\"'), array("'", '\\"'), $jsonString);
        $jsonData = @json_decode($jsonString, true);

        // handle json error
        if (json_last_error() !== JSON_ERROR_NONE) {
            switch (json_last_error()) {
                case JSON_ERROR_SYNTAX:
                    {
                        throw new SSTemplateParseException('JSON Syntax error, did you quote all the property names and remove trailing commas? I suggest running the following through a JSON validator online.' . "\n" . $jsonString, $parser);
                        break;
                    }
            }
            throw new SSTemplateParseException('JSON ' . json_last_error_msg() . "\n" . $jsonString, $parser);
        }

        // process data into buffer
        $buffer = '';
        foreach ($jsonData as $name => $value) {
            // handle nested data
            if (is_array($value)) {
                $value = self::exportNestedDataForTemplates($value);
            }
            // handle strings
            else if (is_string($value)) {
                $value = '"' . $value . '"';
            }
            $buffer .= self::Prop2PHP($name, $value);
        }

        return $buffer;
    }

    private static function handleChildHTML($data, $properties, $parser)
    {
        if (isset($data['Children']['php'])) {
            // handle children property collision
            if (isset($properties['children'])) {
                throw new SSTemplateParseException('Cannot use "children" as a property name and have inner HTML.', $parser);
            }

            // construct php
            $value = $data['Children']['php'];
            $php = "\$_props['children'] = '';\n" . $value;
            $php = str_replace("\$val .=", "\$_props['children'] .=", $php);
            $php .= "\$_props['children'] = DBField::create_field('HTMLText', \$_props['children']);\n";

            return $php;
        }
        return '';
    }

    private static function Prop2PHP($name, $value)
    {
        // turns a value into php code
        $val2PHP = function($value) use($name) {
            if (strpos($value, '$val .=') !== false) {
                if (strpos($value, 'XML_val(') !== false) {
                    $value = str_replace(array('XML_val(', ';'), array('obj(', '->self();'), $value);
                }
                $value = str_replace('$val .=', '$_props[\'' . $name . '\'][] =', $value);
                return $value . "\n";
            } else {
                return "\$_props['" . $name . "'][] = " . $value . ";\n";
            }
        };

        // instantiate prop
        $buffer = "\$_props['" . $name . "'] = array();\n";

        // add prop value(s)
        if (is_array($value)) {
            foreach ($value as $val) {
                $buffer .= $val2PHP($val);
            }
        } else {
            $buffer .= $val2PHP($value);
        }

        // add render call
        $buffer .= "\$_props['" . $name . "'] = Injector::inst()->get('Symbiote\\Components\\ComponentService')->createProperty('" . $name . "', \$_props['" . $name . "']);\n";

        return $buffer;
    }

    /**
     * Recursively replace nonassociative arrays with ArrayListExportable and
     * output with 'var_export' to produce template logic for the nested data.
     *
     * @param array     $array      The nested data to export
     * @param bool      $root       Ignore this
     * @return string               Executable template logic
     */
    private static function exportNestedDataForTemplates(array $array, $root = true)
    {
        // depth first
        foreach ($array as $prop => &$value) {
            if (is_array($value)) {
                $value = self::exportNestedDataForTemplates($value, false);
            }
        }
        unset($value);

        // json data expected to be keyed with ints, over the usual strings
        if (isset($array[0])) {
            // replace array with exportable array list
            $array = new ArrayListExportable($array);
        }

        return $root ? var_export($array, true) : $array;
    }

    /**
     * @return DBComponentField|SS_List|DataObject|ArrayData
     */
    public function createProperty($name, array $parts)
    {
        // NOTE(Jake): 2018-05-11
        //
        // If in a component, only 1 variable is passed, like so:
        // - <:Comp attribute="$AListVariable">
        //
        // This is so you can use DataLists in a component or the like.
        //
        // The 'instanceof' checks are only really necessary to cast patch "getAttributesHTML"
        // in SilverStripe 3.X. They can probably be removed in favour of just returning $parts[0]
        // in SilverStripe 4.X.
        //
        if (count($parts) === 1) {
            if (!($parts[0] instanceof StringField)) {
                return $parts[0];
            }
            if (($parts[0] instanceof Text)) {
                return $parts[0]->RAW();
            }
        }
        return Injector::inst()->createWithArgs('Symbiote\Components\DBComponentField', array($name, $parts));
    }

    /**
     * Render a component
     *
     * @param  string         $name
     * @param  array          $props
     * @param  SSViewer_Scope $scope
     * @return HTMLText
     */
    public function renderComponent($name, array $props, SSViewer_Scope $scope)
    {
        $result = Injector::inst()->createWithArgs('SSViewer', array($name));
        $data = new ComponentData($name, $props);
        $result = $result->process($data);
        // todo(Jake): 2018-03-31
        //
        // Perhaps make this class extend "Object" and add an extension point.
        // $this->extend('updateRenderComponent', $result, $name, $props, $scope);
        //
        return $result;
    }
}
