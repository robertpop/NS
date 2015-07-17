<?php

error_reporting(E_ALL);

require_once 'init.php';

// Requested page
$tree = explode('/', trim($_SERVER['REQUEST_URI'], '/'));
if (count($tree) != 2) {
	$api->outputError(40);
}

if (!file_exists("controls/{$tree[1]}.php")) {
	$api->outputError(40);
}

require("controls/{$tree[1]}.php");
