<?php

/************************************************************************************
 ************************************************************************************
 **                                                                                **
 **  If you can read this text in your browser then you don't have PHP installed.  **
 **  Please install PHP 5.6.0 or higher.                                           **
 **                                                                                **
 ************************************************************************************
 ************************************************************************************/

if (file_exists(__DIR__ . '/vendor/silverstripe/framework/src/Dev/Install/install.php')) {
    include __DIR__ . '/vendor/silverstripe/framework/src/Dev/Install/install.php';
} elseif (file_exists(__DIR__ . '/../vendor/silverstripe/framework/src/Dev/Install/install.php')) {
    include __DIR__ . '/../vendor/silverstripe/framework/src/Dev/Install/install.php';
} else {
    include 'install-frameworkmissing.html';
}
