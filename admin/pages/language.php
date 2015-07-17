<?php

	$langId = isset($_GET['id']) ? intval($_GET['id']) : null;
	$action = isset($_GET['action']) ? $_GET['action'] : null;

	$language = new Language($langId);
	
	switch ($action){
		case 'add_edit':
			
			if ($config->isPOST()) {
				
				$language->lang = $_POST['lang'];
				if (empty($language->id)){
					$language->lang_short = $_POST['lang_short'];
				}
				
				if ($language->alreadyExists()){
					Messages::addError('This language already exists in database');
					reloadPage();
				}
				
				if(!empty($_FILES['xml']['name']) && !Messages::areErrors()) {
					if (!$language->uploadXmlOnAmazon($_FILES['xml']['tmp_name'], $err)){
						Messages::addError($err);
					}
				} elseif (empty($language->id)){
					Messages::addError('Select xml file');
				}
				
				if (!Messages::areErrors()){
					$language->save('display_order');
					Messages::addNotice('Saved');
				}
				
				jump('?page=language&action=add_edit&id=' . $language->id);
				
			}
			
			$smarty->assign('CONTENT', 'language/add_edit.tpl');
			
			break;
			
		case 'move_up':
		case 'move_down':
			
			if ($action == 'move_up'){
				$language->moveUp();
			} else {
				$language->moveDown();
			}
			Messages::addNotice('Order changed');
			jump('?page=language');
			
			break;
			
		case 'set_default':
			
			$language->setDefault();
			Messages::addNotice('Changed');
			jump('?page=language');
			
			break;
			
		case 'change_status':
			
			if ($language->isActive()){
				$language->status = Language::STATUS_INACTIVE;
			} else {
				$language->status = Language::STATUS_ACTIVE;
			}
			$language->save();
			Messages::addNotice('Status changed');
			jump('?page=language');
			
			break;
			
		default:
			
			$languages = $language->getAll("ORDER BY display_order ASC");
			
			$smarty->assign('languages', $languages);
			
			$action = 'list';
			$smarty->assign('CONTENT', 'language/list.tpl');
			break;
	}
	
	$smarty->assign('language', $language);