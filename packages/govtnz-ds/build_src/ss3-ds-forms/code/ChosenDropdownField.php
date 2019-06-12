<?php

/**
 * Defines a FormField that uses the Chosen JS plugin for making
 * dropdown fields nice.
 *
 * Adapted from @author Uncle Cheese <unclecheese@leftandmain.com>
 * 
 * @author Matthew Holloway <matthew@springload.co.nz>
 * @package dsforms
 */
class ChosenDropdownField extends DropdownField {

	

	/**
	 * @var int The number of items that need to appear in the dropdown
	 *			in order to trigger a search bar
	 */
	public static $default_search_threshold = 12;



	/**
	 * Sets the search threshold for this dropdown
	 *
	 * @param int $num The number of items
	 * @return ChosenDropdownField
	 */
	public function setSearchThreshold($num) {
		return $this->setAttribute('data-search-threshold', $num);		
	}



	/**
	 * Builds the form field, sets default attributes, and includes JS
	 *
	 * @param array $attributes The attributes to include on the formfield
	 * @return SSViewer
	 */
	public function FieldHolder($attributes = array ()) {

		if(!Config::inst()->get('DSForm', 'jquery_included')) {
			Requirements::javascript(THIRDPARTY_DIR."/jquery/jquery.js");
			Requirements::javascript(FRAMEWORK_DIR."/admin/thirdparty/chosen/chosen/chosen.jquery.js");
			Requirements::css(DS_FORMS_DIR."/admin/thirdparty/chosen/chosen/chosen.css");
		} else {
			Requirements::javascript(DS_FORMS_DIR."/javascript/chosen/chosen.jquery.js");
			Requirements::css(DS_FORMS_DIR."/javascript/chosen/chosen.css");
		}
		
		$this->addExtraClass('chosen');
		if(!$this->getAttribute('data-search-threshold')) {
			$this->setSearchThreshold(self::$default_search_threshold);
		}
		return parent::FieldHolder($attributes);
	}
}
