<?php

namespace Symbiote\Components;

use Symbiote\Components\Tests\ComponentTest;
use ViewableData;
use Exception;

class ComponentData extends ViewableData
{
    /**
     * The component name.
     * NOTE: Many _'s to avoid clashing with a property called 'name'.
     *
     * @var string
     */
    protected $____name;

    public function __construct($name, array $props)
    {
        parent::__construct();

        // NOTE(Jake): 2018-08-02
        //
        // Don't allow use of invalid properties.
        // ie. You can't pass "failover" as it's used by ViewableData
        //
        // The invalid ViewableData properties are at time of writing:
        // - $class (SS 3.X only)
        // - $failover
        // - $customisedObject
        // - $extension_instances
        // - $beforeExtendCallbacks
        //

        // NOTE(Jake): 2018-08-02
        //
        // We forcibly remove the $class property so you can use it as
        // the property name when using components.
        //
        unset($this->class);

        foreach (get_object_vars($this) as $prop => $value) {
            if (isset($props[$prop])) {
                throw new ComponentReservedPropertyException($name, $prop);
            }
        }

        //
        $this->____name = $name;
        foreach ($props as $prop => $value) {
            $this->{$prop} = $value;
        }
    }

    /**
     * Disable default ViewableData __get behaviour.
     */
    public function __get($property)
    {
        return null;
    }
}
