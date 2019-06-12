# Simple Styleguide Module

## Overview

The module adds a new controller endpoint which can be viewed at the `/_styleguide` route, if logged in with 
admin permissions, or viewing from a dev environment. Also provides a kitchen sink template that can be used 
or overriden by your site theme to display frontend and typography components.

The `SimpleStyleguideController` class also includes a basic form (`SimpleStyleguideController::TestForm()`), and HTMLText output (`SimpleStyleguideController::getContent()`), for testing framework output.

## Installation

Run on the command line:

	$ composer require benmanu/silverstripe-simple-styleguide dev-master

or include `"benmanu/silverstripe-simple-styleguide": "dev-master"` in your project `composer.json` and run:

	$ composer update

## Usage

The styleguide template can be overriden by including a `SimpleStyleguideController.ss` file in your themes 
`template/Layout/` directory.

The `SimpleStyleguideController` class can be overriden using SilverStripes [extensions](https://docs.silverstripe.org/en/3.1/developer_guides/extending/extensions/) to either add new output functions, or modify the provided functions, by using the `updateStyleguideData` extension hook.