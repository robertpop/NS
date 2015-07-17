<?php

	$notify = new Notify($_GET['id']);
	if (empty($notify->id)){
		Ajax::outputError('Invalid notification');
	}
	
	$notify->delete();