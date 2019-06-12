# silverstripe-bootstrap-forms

Allows the creation of forms compatible with the Bootstrap CSS framework in SilverStripe 3.

## Basic Usage

Just use the "BootstrapForm" subclass instead of Form.

```php
<?php

$form = BootstrapForm::create(
  $this,
  "MyBootstrapForm",
  FieldList::create(
    TextField::create("Name")
      ->addHelpText('Enter some text above')
  ),
  FieldList::create(
    FormAction::create("doStuff","Click this!")
      ->setStyle("success")
  )
);
```

### Bonus form fields

-   SimpleHtmlEditorField
-   ChosenDropdownField
-   Textarea with maxlength

### The "Kitchen Sink" example

The following example showcases all of the options available on BootstrapForm and the BootstrapFormField extensions.

```php
<?php
public function FancyForm() {
    return BootstrapForm::create(
        $this,
        "FancyForm",
        FieldList::create(
            TextField::create("ATextField","A text field with prepended and appended text")
            	->prependText("$")
            	->appendText(".00"),
            CheckboxSetField::create("InlineCheckboxes","Inline Checkboxes")
                ->setSource(DataList::create("SiteTree"))
                ->setInline(true),
            CheckboxSetField::create("Checkboxes","Checkboxes")
                ->setSource(DataList::create("SiteTree"))
                ->addHelpText("Check some of these."),
            OptionsetField::create("InlineRadios","Inline Radios")
                ->setSource(DataList::create("SiteTree")->map('ID','Title'))
                ->setInline(true),

            OptionsetField::create("Radios","Radios")
                ->setSource(DataList::create("SiteTree")->map('ID','Title'))
                ->addHelpText("Check one of these."),

            DropdownField::create("Dropdown","Dropdown")
                ->setSource(DataList::create("SiteTree")->map('ID','Title'))
                ->addInlineHelpText("<-- look at that!"),
            TextareaField::create("Textarea","Textarea"),
            TextField::create("BigText","Massive text field")
                ->setSize("xxlarge"),

            TextField::create("SmallText","Tiny text field")
                ->setSize("mini"),

            SimpleHtmlEditorField::create("HTML", "HTML Editor")
            	->setButtons("bold,italic"),
            ChosenDropdownField::create("FancyDropdown", "Fancy dropdown")
            	->setSource(SiteTree::get()->map()),
            TextareaField::create("MaxLengthTextarea","Textarea with a maxlength")
            	->setAttribute('maxlength',150)




        ),
        FieldList::create(
            FormAction::create("yes","YES!")
                ->setStyle("success"),
            FormAction::create("no","NO!")
                ->setStyle("danger"),
            FormAction::create("maybe","Maybe...")
                ->setStyle("info"),
            FormAction::create("sure","Sure!")
                ->setStyle("primary"),
            FormAction::create("uhoh","Uh-oh")
                ->setStyle("warning")
        )
    )
        ->addWell()
        ->setLayout("horizontal");
    }

}



```
