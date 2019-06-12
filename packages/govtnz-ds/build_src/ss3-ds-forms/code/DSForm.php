<?php

/**
 * Builds a form that renders {@link FormField} objects
 * using templates that are compatible with Design System.
 * Extra methods are decorated on to the {@link DSFormField}
 * objects and their subclasses to support special features
 * of the framework.
 *
 * @author Uncle Cheese <unclecheese@leftandmain.com>
 * @package ds_form
 */
class DSForm extends Form {




	/**
	 * @var string The template that will render this form
	 */
	protected $template = "DSForm";



	/**
	 * @var string The layout of the form.
	 * @see DSForm::setLayout()
	 */
	protected $formLayout = "vertical";


    /**
     * The label grid class for the ds 3 horizontal form
     *
     * @var String
     */
    protected $gridLabelClass = "col-sm-3";


    /**
     * The input grid class for the ds 3 horizontal form
     *
     * @var String
     */
    protected $gridInputClass = "col-sm-9";

    /**
     * The Action grid class for the ds 3 horizontal form
     *
     * @var String
     */
    protected $gridActionClass = "col-sm-offset-3 col-sm-9";



	/**
	 * Sets form to disable/enable inclusion of DS CSS
	 *
	 * @deprecated In 3.1
	 * @param bool $bool
	 */
	public static function set_ds_included($bool = true) {
		Config::inst()->update("DSForm", "ds_included", $bool);
	}




	/**
	 * Sets form to disable/enable inclusion of jQuery
	 *
	 * @deprecated In 3.1
	 * @param bool $bool
	 */
	public static function set_jquery_included($bool = true) {
		Config::inst()->update("DSForm", "jquery_included", $bool);
	}


	/**
	 * Sets form to disable/enable inclusion of ds forms js
	 *
	 * @deprecated In 3.1
	 * @param bool $bool
	 */
	public static function set_ds_form_included($bool = true) {
		Config::inst()->update("DSForm", "ds_form_included", $bool);
	}


	/**
	 * Applies the DS transformation to the fields and actiosn
	 * of the form
	 *
	 * @return DSForm
	 */
	public function applyDS() {
		$this->Fields()->dsify();
		$this->Actions()->dsify();

		return $this;
	}


	/**
	 * Sets the desired layout of the form. Options include:
	 *		- "vertical" (default)
	 *		- "horizontal"
	 *		- "inline"
	 *		- "search"
	 *
	 * @todo Add template support for "inline"
	 * @param string $layout The desired layout to use
	 * @return DSForm
	 */
	public function setLayout($layout) {
		$this->formLayout = trim(strtolower($layout));
		return $this;
	}


    /**
     * Sets the desired label Grid Class of the form. Options include:
     *		- "col-sm-3" (default)
     *		- "col-sm-4"
     * 		etc..
     *
     * @param String
     * @return DSForm
     */
    public function setGridLabelClass($class) {
        $this->gridLabelClass = strtolower($class);
        return $this;
    }


    /**
     * Sets the desired Input Grid Class of the form. Options include:
     *		- "col-sm-9" (default)
     *		- "col-sm-8"
     * 		etc..
     *
     * @param String
     * @return DSForm
     */
    public function setGridInputClass($class) {
        $this->gridInputClass = strtolower($class);
        return $this;
    }


    /**
     * Sets the desired Action Grid Class of the form. Options include:
     *		- "col-sm-offset-3 col-sm-9" (default)
     *		- "col-sm-offset-2 col-sm-10"
     * 		etc..
     *
     * @param String
     * @return DSForm
     */
    public function setGridActionClass($class) {
        $this->gridActionClass = strtolower($class);
        return $this;
    }


	/**
	 * Adds a "well," or sunken background and border, to the form
	 *
	 * @return DSForm
	 */
	public function addWell() {
		return $this->addExtraClass("well");
	}



	/**
	 * Includes the dependency if necessary, applies the DS templates,
	 * and renders the form HTML output
	 *
	 * @return string
	 */
	public function forTemplate() {
        if($this->stat('ds_included')!=false) {
            Requirements::css(DS_FORMS_DIR.'/css/ds.css');
		}
		if($this->stat('jquery_included')!=false) {
			Requirements::javascript(THIRDPARTY_DIR."/jquery/jquery.js");
		}
		if(!$this->stat('ds_form_included')!=false) {
			Requirements::javascript(DS_FORMS_DIR."/javascript/ds_forms.js");
		}
		$this->addExtraClass("form-{$this->formLayout}");

		$this->applyDS();

		return parent::forTemplate();
	}




}
