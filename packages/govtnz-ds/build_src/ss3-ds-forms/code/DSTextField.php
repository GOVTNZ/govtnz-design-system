<?php

/**
 * Creates a {@link TextField} or a subclass thereof that is compatible with the
 *  DS CSS framework.
 *
 * @author Uncle Cheese <unclecheese@leftandmain.com>
 * @package ds_forms
 */
class DSTextField extends DSFormField {


	/**
	 * Adds text immediately to the left, abut the form field
	 *
	 * @param string $text The text to add
	 * @return DSTextField
	 */
	public function prependText($text) {
		$this->owner->PrependedText = $text;
		$this->owner->addExtraClass('form-control');
		return $this->owner;
	}



	/**
	 * Adds text immediately to the right, abut the form field
	 *
	 * @param string $text The text to add
	 * @return DSTextField
	 */
	public function appendText($text) {
		$this->owner->AppendedText = $text;
		$this->owner->addExtraClass('form-control');
		return $this->owner;
	}



	/**
	 * Sets the width of the text field to a pre-configured size. Options include:
	 *	- mini
	 *  - small
	 *  - medium
	 *  - large
	 *  - xlarge
	 *  - xxlarge
	 *
	 * @param string $text The text to add
	 * @return DSTextField
	 */
	public function setSize($size) {
		$s = trim(strtolower($size));
		return $this->owner->addExtraClass("input-{$s}");
	}



	/**
	 * Sets the width of the text field to span grid columns
	 *
	 * @param string $span
	 * @return DSTextField
	 */
	public function setSpan($span) {
		$s = trim(strtolower($span));
		return $this->owner->addExtraClass("span{$s}");
	}


}