<?php

require_once './vendor/autoload.php';

$templateDir = dirname(__DIR__) . '/govtnz-ds/build/twig-embed';

$loader = new \Twig\Loader\FilesystemLoader($templateDir);
$twig = new \Twig\Environment($loader);

print_r(
  $twig->render('H1.html.twig', ['children' => 'Heading text', 'styleSize' => 'large'])
);