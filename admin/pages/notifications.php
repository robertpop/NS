<?php

	$pageName = isset($_GET['action']) ? safeFileName($_GET['action']) : 'list';

	if (!empty($pageName) && file_exists($config->absolute_path . '/admin/pages/notifications/' . $pageName . '.php')) {
		$smarty->assign('CONTENT', 'notifications/' . $pageName . '.tpl');
		require($config->absolute_path . '/admin/pages/notifications/' . $pageName . '.php');
	} else {
		jump('?page=albums');
	}