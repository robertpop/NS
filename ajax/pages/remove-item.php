<?php

	Ajax::requireLoggedIn();

	$id = isset($_GET['item']) ? $_GET['item'] : null;
	$notify = new Notify($id);
	
	if (empty($notify->id) || !$notify->hasAccess()){
		Ajax::outputError('You don\'t have access to this notification');
	}
	
	$notify->delete();