<?php

class DSMemberLoginForm extends MemberLoginForm {


	public function __construct($controller = null, $name = null, $fields = null, $actions = null, $checkCurrentUser = true) {
		if(!$controller) $controller = Controller::curr();
		if(!$name) $name = "LoginForm";
		parent::__construct($controller, $name, $fields, $actions, $checkCurrentUser);
		$this->Fields()->dsify();
		$this->Actions()->dsify();
		$this->setTemplate("DSForm");

		$this->invokeWithExtensions('updateBoostrapMemberLoginForm', $this);
	}

}