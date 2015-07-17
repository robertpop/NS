<?php
	
	$pageName = isset($_GET['action']) ? safeFileName($_GET['action']) : 'list_questions';
	
	if (!empty($pageName) && file_exists($config->absolute_path . '/admin/pages/faq/' . $pageName . '.php')) {
		$smarty->assign('CONTENT', 'faq/' . $pageName . '.tpl');
		require($config->absolute_path . '/admin/pages/faq/' . $pageName . '.php');
	} else {
		jump('?page=faq');
	}	