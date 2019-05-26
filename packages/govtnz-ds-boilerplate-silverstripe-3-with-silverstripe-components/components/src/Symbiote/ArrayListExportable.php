<?php

/**
 * Used in place of ArrayList when preparing nested arrays for export for SS templates.
 *
 * var_export calls '__set_state' on classes, so it produces code like:
 *
 *      ArrayList::__set_state(array('items' => [...]))
 *
 * And because ArrayList doens't implement '__set_state', executing the code throws errors.
 * So we work around this by using an ArrayListExportable to produce:
 *
 *      ArrayListExportable::__set_state(array('items' => [...]))
 *
 * And implement '__set_state' to return a constructed ArrayList.
 */
class ArrayListExportable
{
    public function __construct($array = array())
    {
        // need to store items for var_export to recurse
        $this->items = $array;
    }

    public static function __set_state ($array)
    {
        // when executed, we naruto-style body-replace with in an ArrayList
        return new ArrayList($array['items']);
    }
}
