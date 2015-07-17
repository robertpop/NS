<?php

if (empty($_POST['hash'])) {
	$api->outputError(30);
}

$collectionStatus = empty($_POST['collection_status']) ? Quiz::BLOCKED_STATUS_TEMP : $_POST['collection_status'];

$hash = $_POST['hash'];


$collection = new Quiz();
$collection = $collection->getByHash($hash);

// Get jobs
if ($collection->id > 0) {
	// Building xml
	$xml = new XmlBuilder;
	$xml->Push('response');
	{
		$xml->Element('code',	200);
		$xml->Element('status',	ServMessages::getMessage(20));
		$xml->Push('collection');
		{
			$xml->Element('collection_id', $collection->id);
			$xml->Element('user_id', $collection->user_id);
			$xml->Element('hash', $collection->hash);
		}
		$xml->Pop('collection');
	}
	$xml->Pop('response');
	// Output xml
	$api->outputXML($xml->GetXML());

}

$api->outputError(80);

