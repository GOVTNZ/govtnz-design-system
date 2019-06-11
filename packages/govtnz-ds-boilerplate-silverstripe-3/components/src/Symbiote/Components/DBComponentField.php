<?php

namespace Symbiote\Components;

use Text;
use DBField;
use Exception;
use SS_List;
use ViewableData;

class DBComponentField extends Text
{
   /**
     * Workaround a "bug" in SilverStripe 3.X where
     * attributes aren't cast as HTMLText and don't
     * escape.
     *
     * @var array
     */
    private static $text_property_casting = array(
        'getAttributesHTML' => true,
    );

    /**
     * Store the objects passed into a component property.
     *
     * @var ViewableData[]
     */
    protected $fields = array();

    public function __construct($name, array $fields)
    {
        parent::__construct($name);
        $this->fields = $fields;

        // Set value from fields
        $value = '';
        $textPropertyCasting = $this->config()->text_property_casting;
        foreach ($this->fields as $i => $field) {
            if (!is_object($field)) {
                $value .= $field;
                continue;
            }
            if (!$field->hasMethod('forTemplate')) {
                if ($field instanceof SS_List) {
                    throw new Exception("Cannot use SS_List type with other field parts. (Make sure there are no spaces around the quotes) for component property \"$name\".");
                }
                throw new Exception("Missing forTemplate() on field part #$i for component property \"$name\".");
            }
            if (get_class($field) === 'Text') {
                if ($textPropertyCasting &&
                    isset($textPropertyCasting[$field->getName()])) {
                    $value .= $field->getValue();
                    continue;
                }
            }
            $value .= $field->forTemplate();
        }
        $this->value = $value;
    }

    /**
     * Stop default behaviour, which is escaping to XML.
     *
     * @return string|SS_List
     */
    public function forTemplate()
    {
        return $this->getValue();
    }

    /**
     * (non-PHPdoc)
     *
     * @see DBField::requireField()
     */
    public function requireField()
    {
        throw new Exception('Do not use this as a database field.');
    }

    /**
     * @param DBField $field
     * @return string|null
     */
    /*private function propertyCasting($field)
    {
        if (get_class($field) === 'Text') {
            if ($textPropertyCasting &&
                isset($textPropertyCasting[$field->getName()])) {
                return $field->getValue();
                continue;
            }
        }
        return null;
    }*/
}
