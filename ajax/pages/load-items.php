<?php

	Ajax::requireLoggedIn();
	
	if (!isset($_SESSION['items_options'])){
		$_SESSION['items_options'] = array();
	}
	
	$options = & $_SESSION['items_options'];
	
	if (isset($_GET['orderBy'])){
		$options['orderBy'] = $_GET['orderBy'];
		if (!isset($options['orderType']) || $options['orderType'] == 'DESC'){
			$options['orderType'] = 'ASC';
		} else {
			$options['orderType'] = 'DESC';
		}
	}
	
	if (isset($_GET['search_type'])){
		$options['search']['type'] = $_GET['search_type'];
	}
	
	if (isset($_GET['search_text'])){
		$options['search']['text'] = $_GET['search_text'];
	}
	
	$p = isset($_GET['p']) ? intval($_GET['p']) : 1;
	
	$out = new stdClass();
	$out->items = Notify::getNotifications(User::getLogged()->id, $options, $p);
	$out->filters = $options;
	$out->totalItems = Notify::getNotificationsCount(User::getLogged()->id, $options);
	$out->currentPage = $p;
	$out->time = getDateMysql();
	Ajax::output($out); 