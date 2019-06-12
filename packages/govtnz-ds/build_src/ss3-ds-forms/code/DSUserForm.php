<?php



class DSUserForm extends Extension {



	public function updateForm($form) {
		$form->Fields()->dsify();
		$form->Actions()->dsify();
		$form->setTemplate("DSForm");
	}

}