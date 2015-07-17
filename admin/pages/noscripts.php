<?php

	$pageName = isset($_GET['action']) ? safeFileName($_GET['action']) : 'list';
	
	if (!empty($pageName) && file_exists($config->absolute_path . '/admin/pages/noscripts/' . $pageName . '.php')) {
		$smarty->assign('CONTENT', 'noscripts/' . $pageName . '.tpl');
		require($config->absolute_path . '/admin/pages/noscripts/' . $pageName . '.php');
	} else {
		jump('?page=noscripts');
	}