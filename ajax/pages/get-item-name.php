<?php

	Ajax::requireLoggedIn();

        $hash = isset($_POST['hash']) ? $_POST['hash'] : $_GET['hash'];
	$notify = Notify::getByHash($hash);
	if (empty($notify->id) || !$notify->hasAccess()){
		Ajax::outputError('You don\'t have access to this notification!');
	}

        Ajax::output($notify->name);