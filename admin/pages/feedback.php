<?php

	$pageName = isset($_GET['action']) ? safeFileName($_GET['action']) : 'list';

	if (!empty($pageName) && file_exists($config->absolute_path . '/admin/pages/feedback/' . $pageName . '.php')) {
		$smarty->assign('CONTENT', 'feedback/' . $pageName . '.tpl');
		require($config->absolute_path . '/admin/pages/feedback/' . $pageName . '.php');
	} else {
		jump('?page=feedback');
	}