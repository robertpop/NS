<?php

	Ajax::requireLoggedIn();

        $hash = isset($_POST['hash']) ? trim($_POST['hash']) : trim($_GET['hash']);

        $notify = Notify::getByHash($hash);

	if (empty($notify->id) || !$notify->hasAccess()){
		Ajax::outputError('You don\'t have access to this notification');
	}

	$template = new Templates($notify->template_id);
	$customize = new Customize($notify);

        // template
	if (!$xmlTemplate = $template->getXmlContent()){
                Ajax::outputError('Can\'t read template xml');
	}
        
        $jsonData = null;
        // notification item data
	if (!$json = $notify->getJSONContent()) {
             $jsonData = $json;
	}

        if ($xmlTemplate){
                if ($jsonData){
                    Ajax::output($customize->getHtml($xmlTemplate, $jsonData));
                } else {
                    Ajax::output($customize->getHtml($xmlTemplate, null));
                }
	} else {
		Ajax::outputError('Internal server error. Try again later');
	}