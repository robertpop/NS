<?php

if (empty($_POST['hash'])) {
	$api->outputError(30);
}

$collectionStatus = empty($_POST['collection_status']) ? Quiz::BLOCKED_STATUS_TEMP : $_POST['collection_status'];

$res = new Quiz();
$res->blockCollection($_POST['hash'], $collectionStatus);

