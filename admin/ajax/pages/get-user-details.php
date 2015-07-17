<?php

	$request = new SnacktoolsRequest('get_user');
	$request->addParam('id', $_GET['id']);
	$response = $request->request();
	
	$smarty = Application::getSmarty('/admin/ajax/templates/', '/admin/ajax/templates_c/');
	$smarty->assign('user', $response->data['user']);
	$out = $smarty->fetch('get-user-details.tpl');
	Ajax::output($out);