<?php

class SimpleStyleguideController extends Controller {

	private static $allowed_actions = array(
		'index'
	);

	public function init() {
		Requirements::customCSS(<<<CSS
		 .tree li { background-image: 'sdfsdf'; }
CSS
);
		
		Requirements::css($this->ThemeDir().'/css/editor.css');
		parent::init();
	}

	/**
	 * Runs the permissiion checks, and setup of the controller view.
	 */
	public function index() {
		if(!Director::isDev() && !Permission::check('ADMIN')) {
			return Security::permissionFailure();
		}

		// If the subsite module is installed then set the theme based on the current subsite
		if (class_exists('Subsite') && Subsite::currentSubsite()) {
			Config::inst()->update('SSViewer', 'theme', Subsite::currentSubsite()->Theme);
		}

		$page = Page::get()->first();
		$controller = ModelAsController::controller_for($page);
		$controller->init();

		return $controller
			->customise($this->getStyleGuideData())
			->renderWith(array('SimpleStyleguideController', 'Page'));
	}

	/**
	 * Provides access to any custom function on the controller for use on the template output.
	 * @return Array
	 */
	public function getStyleguideData() {
		$data = new ArrayData(array(
			'Title' => 'Styleguide',
			'TestForm' => $this->TestForm(),
			'Content' => $this->getContent()
		));

		// extensions for adding/overriding template data.
		$this->extend('updateStyleguideData', $data);

		return $data;
	}
	
	/**
	 * Return a form with fields to match rendering through controller/template output.
	 * @return Form
	 */
	public function TestForm() {
		$fields = new FieldList(
			new TextField('SimpleText', 'Simple Text Field'),
			$goodField = TextField::create('SimpleTextGood', 'Simple Text Field (good)'),
			$warningField = TextField::create('SimpleTextWarning', 'Simple Text Field (warning)'),
			$badField = TextField::create('SimpleTextBad', 'Simple Text Field (bad)'),
			new NumericField('Number', 'Number Field'),
			new EmailField('Email', "Email Field"),
			new DropdownField('Dropdown', 'Normal dropdown', array(
				'1' => 'One option',
				'2' => 'Two option'
			)),
			new CheckboxField('Checkbox', 'Checkbox'),
			new CheckboxSetField('CheckboxSet', 'Checkbox set', array(
				'1' => 'One option',
				'2' => 'Two option',
				'3' => 'Three option'
            )),
			new OptionsetField('Option', 'Option', array(
				'1' => 'One option'
            )),
			new OptionsetField('OptionSet', 'Option set', array(
				'1' => 'One option',
				'2' => 'Two option',
				'3' => 'Three option'
            )),
			TextField::create('Text', 'Text')
				->setDescription('This is a description')
		);

        $goodField->setError('This is a good message', 'good');
        $warningField->setError('This is a warning message', 'warning');
        $badField->setError('This is an error message', 'bad');

		$actions = new FieldList(
			new FormAction('doForm', 'Submit')
		);

		$required = new RequiredFields(
			'SimpleText',
			'Email',
			'Checkbox',
			'Dropdown'
		);

		Session::set("FormInfo.Form_TestForm", array(
			'errors' => array(
				array(
					'fieldName' => 'FirstName',
					'message' => 'Please fill out the required field',
					'messageType' => 'bad'
				),
				array(
					'fieldName' => 'Email',
					'message' => 'Please enter a valid email',
					'messageType' => 'validation'
				)
			)
		));

		$form = new Form($this, 'TestForm', $fields, $actions, $required);
		$form->setMessage('This is a form wide message. See the alerts component for site wide messages.', 'warning');

		return $form;
	}

	/**
	 * Emulate an HTMLEditorField output useful for testing shortcodes and output extensions etc.
	 * @return HTMLText
	 */
	public function getContent() {
		
		$content = '';

		// add file link to html content
		$file = File::get()->filter('ClassName', 'File')->first();
		if($file) {
			$content .= '<p>This is an internal <a href="[file_link,id=' . $file->ID . ']">link to a file</a> inside content</p>';
		}

		// add external link to html content
		$content .= '<p>This is an external <a href="http://google.com">link to google</a> inside content.</p>';

		return DBField::create_field('HTMLText', $content);
	}

}
