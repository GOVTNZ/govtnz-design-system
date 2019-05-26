<?php

require_once './vendor/autoload.php';

$templateDir = dirname(__DIR__) . '/govtnz-ds/build/twig-embed';

$loader = new \Twig\Loader\FilesystemLoader($templateDir);
$twig = new \Twig\Environment($loader);
$H1 = $twig->load('H1.html.twig');
echo $H1->render(['children' => 'Heading text']);