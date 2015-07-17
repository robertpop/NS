<?php

if (empty($_POST['hash'])) {
	$api->outputError(30);
}

$res = new Quiz();
$res->unblockCollection($_POST['hash']);

