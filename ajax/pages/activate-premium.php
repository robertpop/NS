<?php

	ignore_user_abort(true);
	set_time_limit(90);
	
	Ajax::requireLoggedIn();
	
	$id = isset($_GET['item']) ? $_GET['item'] : null;
	$notify = new Notify($id);
		
	if (!$notify->hasAccess()){
		Ajax::outputError('You don\'t have access to this notification');
	}
	
	if ($notify->isPremium()){
		//Ajax::outputMyError('This notification is premium already');
	}

        $premiumInfo = $config->premium['others'];
	
	$request = new SnacktoolsRequest('remove_points');
	$request->addParam('user_id', User::getLogged()->id);
	$request->addParam('points', $premiumInfo['points']);
	$request->addParam('description', $premiumInfo['description']);
	$request->addParam('service_id', $premiumInfo['id']);
	$request->addParam('item_type', $premiumInfo['itemType']);
	$request->addParam('item_id', $notify->id);
	
	$response = $request->request();
	
	if ($response->areErrors()){
		Ajax::outputError($response->error);
	}
	
	$notify->setFlag(Notify::FLAG_PREMIUM, true);
	$notify->premium_type = $response->data['buy_type'];
	$notify->activatePremium($response->data['buy_type']);
	$notify->actualize('no');

	$out = new stdClass();
	$out->id = $notify->id;
	$out->flags = $notify->flags;
	$out->premium_type = $notify->premium_type;
	$out->date_premium = $notify->date_premium;
	
	Ajax::output($out);