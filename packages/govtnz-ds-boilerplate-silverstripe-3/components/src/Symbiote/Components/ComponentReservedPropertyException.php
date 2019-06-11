<?php

namespace Symbiote\Components;

class ComponentReservedPropertyException extends ComponentException
{
    /**
     * @var string
     */
    private $propertyName;

    /**
     * @var string
     */
    private $componentName;

    public function __construct($componentName, $propertyName)
    {
        $this->propertyName = $propertyName;
        $this->componentName = $componentName;
        $message = 'You cannot use the property "'.$propertyName.'" on "'.$componentName.'" as it\'s already used by ViewableData.';
        parent::__construct($message);
    }
}
