<?php

	Ajax::requireLoggedIn();

        $hash = isset($_POST['hash']) ? trim($_POST['hash']) : trim($_GET['hash']);
        $field = isset($_POST['field']) ? trim($_POST['field']) : trim($_GET['field']);
        $value = isset($_POST['value']) ? trim($_POST['value']) : trim($_GET['value']);

	$notify = Notify::getByHash($hash);

	if (empty($notify->id) || !$notify->hasAccess()){
		Ajax::outputError('You don\'t have access to this notification');
	}

        $content = json_decode($notify->getJSONContent(), true);
        $content['configs']['params'][$field] = $value;

        $notifyJSON = $notify->updateJSON_Data($content);

        if ($notifyJSON){
		Ajax::output($notifyJSON);
	} else {
		Ajax::outputError('Internal server error. Try again later');
	}
