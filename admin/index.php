<?php

	#init:
	include "../init.php";

	#smarty:
	$smarty = Application::getSmarty('/admin/templates/', '/admin/templates_c/');

	$page = empty($_GET['page']) ? 'home' : $_GET['page'];
	$action = empty($_GET['action']) ? 'index' : $_GET['action'];

	session_start();

	$smarty->assign('SESSION_ID', session_id());

	if(Admin::isLogged()) {
		Admin::checkPageAccess($page);
		$smarty->assign('ADMIN', Admin::getLogged());
	} else {
		$page = 'login';
	}

	$controller = $config->absolute_path.'/admin/pages/' . $page . '.php';
	$template = $config->absolute_path.'/admin/templates/' . $page . '.tpl';

	if(file_exists($controller)) {

		require_once $controller;

		$content_var = $smarty->get_template_vars('CONTENT');
		if(empty($content_var)) {
			$content_var = $page . '.tpl';
		}

	} else if(file_exists($template)) {
		$content_var = $page . '.tpl';
	} else {
		header("HTTP/1.1 404 Not Found");

		$smarty->assign('ERROR', 'The page you are trying to access does not exists.');
		$smarty->assign('ERROR_TITLE', 'Page not found');

		$content_var = 'components/error.tpl';
	}

	$smarty->assign('CONTENT', $content_var);

	#index:
	$index = $smarty->get_template_vars('INDEX');
	if(empty($index)) {
		if(empty($_GET['index'])) {
			$index = 'components/index.tpl';
		} else {
			$index = 'components/' . $_GET['index'] . '.tpl';
		}
	}

	#solve CSS cache problem:
	$smarty->assign('CSS_TIMESTAMP', filemtime($config->absolute_path . '/admin/css/index.css'));

	$smarty->assign('config', $config);
	$smarty->assign('page', $page);
	$smarty->assign('messages', Messages::getMessages());

	$smarty->display($index);
