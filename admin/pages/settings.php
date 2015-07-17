<?php

	if ($config->isPOST()) {
		foreach ($_POST as $post => $value) {
			$set = explode('_', $post);
			if (is_array($set)) {
				$conf = new Settings($set[1]);
				$conf->value = $value;
				$conf->save();
			}
		}
		Messages::addNotice('Settings successfully saved.');
		jump('index.php?page=settings');
	}

	$conf = new Settings;
	$smarty->assign('settings', $conf->getAll());
