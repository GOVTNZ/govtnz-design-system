<?php

class ChosenListboxField extends ListboxField {
	/**
	 * @var int The number of items that need to appear in the dropdown
	 *			in order to trigger a search bar
	 */
	public static $default_search_threshold = 12;



	/**
	 * Sets the search threshold for this dropdown
	 *
	 * @param int $num The number of items
	 * @return ChosenListboxField
	 */
	public function setSearchThreshold($num) {
		return $this->setAttribute('data-search-threshold', $num);		
	}
    
    
    /**
     * Sets the Placeholder if the Field is empty
     * 
     * @param string $str
     * @return ChosenListboxField
     */
    public function setPlaceholder($str) {
        return $this->setAttribute('data-placeholder', $str);
    }



	/**
	 * Builds the form field, sets default attributes, and includes JS
	 *
	 * @param array $attributes The attributes to include on the formfield
	 * @return SSViewer
	 */
	public function FieldHolder($attributes = array ()) {
		Requirements::javascript(FRAMEWORK_DIR."/admin/thirdparty/chosen/chosen/chosen.jquery.js");
		Requirements::css(FRAMEWORK_DIR."/admin/thirdparty/chosen/chosen/chosen.css");
		$this->addExtraClass('chosen');
		if(!$this->getAttribute('data-search-threshold')) {
			$this->setSearchThreshold(self::$default_search_threshold);
		}
		return parent::FieldHolder($attributes);
	}
    
}
