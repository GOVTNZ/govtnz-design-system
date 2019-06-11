<?php
Security::setDefaultAdmin('admin', 'password');
global $project;
$project = 'mysite';

global $databaseConfig;
$databaseConfig = array(
	'type' => 'MySQLDatabase',
	'server' => 'localhost',
	'username' => 'ss3user',
	'password' => 'password',
	'database' => 'ss3',
	'path' => ''
);

// Set the site locale
i18n::set_locale('en_US');
