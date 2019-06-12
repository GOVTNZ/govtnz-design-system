<?php


class DSButtonGroupField extends FormField
{

	protected $optionsList;

	public function __construct($name, $title = null, $options = array (), $value = null)
	{
		parent::__construct($name, $title, $value);
		$this->optionsList = $options;

		return $this;
	}


	public function setOptions($opts)
	{
		$this->optionsList = $opts;

		return $this;
	}



	public function getOptions()
	{
		$options = ArrayList::create();
		foreach($this->optionsList as $val => $label) {
			$options->push(ArrayData::create(array(
				'Label' => $label,
				'Value' => $val,
				'Selected' => $this->Value() == $val
			)));
		}
		
		return $options;		
	}



	public function Field($attributes = array ())
	{
		Requirements::javascript(DS_FORMS_DIR."/javascript/ds_forms.js");
		return $this->renderWith('DSButtonGroupField');
	}



}