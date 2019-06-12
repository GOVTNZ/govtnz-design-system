<?php

/**
 * Defines a FormField that uses the ds-select JS plugin for making
 * dropdown fields nice.
 *
 */
class DSDropdownField extends DropdownField {



	/**
	 * Builds the form field, sets default attributes, and includes JS
	 *
	 * @param array $attributes The attributes to include on the formfield
	 * @return SSViewer
	 */
	public function FieldHolder($attributes = array ()) {
		if(!Config::inst()->get('DSForm', 'ds_select_included')) {
			$current_locale = (class_exists('Translatable')) ? Translatable::get_current_locale() : i18n::get_locale();
			Requirements::javascript(DS_FORMS_DIR."/javascript/ds-select/js/ds-select.min.js");
			Requirements::javascript(DS_FORMS_DIR."/javascript/ds-select/js/i18n/defaults-{$current_locale}.js");
			Requirements::css(DS_FORMS_DIR."/javascript/ds-select/css/ds-select.min.css");
		}
		$this->addExtraClass('selectpicker');
		return parent::FieldHolder($attributes);
	}
}