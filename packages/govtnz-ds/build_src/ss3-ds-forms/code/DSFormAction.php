<?php

/**
 * Creates a {@link FormAction} object that is compatible
 * with the  DS CSS framework.
 *
 * @author Uncle Cheese <unclecheese@leftandmain.com>
 * @package ds_forms
 */
class DSFormAction extends DataExtension {


	/** 
	 * Sets the style of button. Options include:
	 * 	- "success"
	 *  - "danger"
	 *  - "info"
	 *  - "primary"
	 *  - "warning"
	 *  - "inverse"
	 *
	 * @param string $style
	 * @return DSFormAction
	 */
	public function setStyle($style) {
		$this->owner->ButtonStyle = trim(strtolower($style));
		return $this->owner;
	}



	/** 
	 * Sets the size of the button. Options include:
	 * 	- "large"
	 *  - "small"
	 *  - "mini"
	 *
	 * @param string $size
	 * @return DSFormAction
	 */
	public function setSize($size) {
		$this->owner->ButtonSize = trim(strtolower($size));
		return $this->owner;
	}


}