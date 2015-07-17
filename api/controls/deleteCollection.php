<?php

if (empty($_POST['hash'])) {
	$api->outputError(30);
}

$collectionStatus = empty($_POST['collection_status']) ? Quiz::BLOCKED_STATUS_DELETED : $_POST['collection_status'];


$collection = new Quiz();
$collection = $collection->getByHash($_POST['hash']);
$collection->delete();

$blockedCollection = BlockedCollections::getByCollectionId($collection->id);
$blockedCollection->delete();

$xml = new XmlBuilder;
$xml->Push('response');
{
	$xml->Element('code',	200);
	$xml->Element('status',	ServMessages::getMessage(20));
}
$xml->Pop('response');


$api->outputXML($xml->GetXML());


