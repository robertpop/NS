<?php

	require_once "../../init.php";
	
	session_start();

	if(!Admin::isLogged()) {
		Ajax::outputError('Welcome to admin panel.');
	}

	#get the page::
	$page = isset($_GET['page']) ? safeFileName($_GET['page']) : null;
	
	if (empty($page) && isset($_POST['page'])){
		$page = safeFileName($_POST['page']);
	}
	
	Admin::checkPageAccess($page, true);
	
	$controller = dirname(__FILE__) . DIRECTORY_SEPARATOR . 'pages' . DIRECTORY_SEPARATOR . $page . '.php';
	
	if(file_exists($controller)) {

		require_once $controller;
		Ajax::output('Success');
		
	} else {
		Ajax::outputError('Bad Request');
	}