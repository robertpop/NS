<?php

	$notification = new Notify($_GET['id']);
	
	$smarty = Application::getSmarty('/admin/ajax/templates/', '/admin/ajax/templates_c/');
	$smarty->assign('notification', $notification);
	$out = $smarty->fetch('get_notification_details.tpl');
	Ajax::output($out);