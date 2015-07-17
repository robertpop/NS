<?php

	$pageName = isset($_GET['action']) ? safeFileName($_GET['action']) : 'list';
	
	if (!empty($pageName) && file_exists($config->absolute_path . '/admin/pages/examples/' . $pageName . '.php')) {
		$smarty->assign('CONTENT', 'examples/' . $pageName . '.tpl');
		require($config->absolute_path . '/admin/pages/examples/' . $pageName . '.php');
	} else {
		jump('?page=examples');
	}