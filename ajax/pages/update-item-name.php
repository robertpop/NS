<?php

	Ajax::requireLoggedIn();
	
	$notify = new Notify($_GET['item']);
	
	if (empty($notify->id) || !$notify->hasAccess()){
		Ajax::outputError('You don\'t have access to this notification');
	}
	
	$notifyName = trim($_GET['name']);
	if (empty($notifyName)){
		Ajax::outputError('Notification name can\'t be empty');
	}

        /*if ($notifyName != $notify->name) {
            if ($notify->notificationNameExists($notifyName)){
                    Ajax::outputError('Notification name already exists');
            }
        }*/

	$notify->changeName($notifyName);
        
        $out['id'] = $notify->id;
        $out['name'] = $notify->name;
/*
	$out = new stdClass();
	$out->id = $notify->id;
	$out->name = $notify->name;
*/
	Ajax::output($out);