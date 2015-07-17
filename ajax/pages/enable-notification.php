<?php

	ignore_user_abort(true);
	set_time_limit(90);
	
    $id = isset($_GET['id']) ? $_GET['id'] : null;
    $state = isset($_GET['state']) ? $_GET['state'] : null;
	$notify = new Notify($id);

	if (!$notify->hasAccess()){
            Ajax::outputError('You don\'t have access to this notification');
	}

	if (!$json = $notify->getJSONContent()) {
            Ajax::output('Could not generate default json params!');
	}
		//doar pe ON se mai poate pune
        $params = json_decode($json, true);
        $params['configs']['state'] = 'ON';

        if (!$notify->updateJSON_Data($params)){
            Ajax::outputError('Could not update json params.');
	}

    //doar pe ON se mai poate pune
    $notify->id = $id;
	$notify->state = $state == 'ON';
	$notify->save();
