<?php

	$hashId = isset($_REQUEST['hash_id']) ? $_REQUEST['hash_id'] : null;
	
	if (empty($hashId)){
		$api->outputError(30);
	}

	$item = new Collection();
	$item->readField('hash', $hashId);
	
	if (empty($item->id)){
		$api->outputError(41);
	}
	
	$api->outputNotice(20, array('premium' => $item->premium));