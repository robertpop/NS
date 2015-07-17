<?php

	if (Admin::isLogged()) {
		jump('index.php?page=home');
	}

	if ($config->isPost()) {
		// vine din forma
		if(Admin::login($_POST['email'], $_POST['password'])) {
			jump('index.php?page=home');
		} else {
			$smarty->assign('error_login', 'Login failed!');
		}
	}

	// incarcam pagina de login
	$smarty->assign('CONTENT', 'components/login.tpl');
