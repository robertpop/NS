<?php

	$smarty->assign('action', $action);
	
	$id = isset($_GET['id']) ? intval($_GET['id']) : null; 
	$template = new Templates($id);
	
	switch ($action) {
		case 'list':
		default:
			
			$type = isset($_GET['type']) ? $_GET['type'] : null;
			
			$obj = new Templates;
			$append = "";
			if (!empty($type)){
				$append = "WHERE type = '" . realEscapeString($type) . "' ";
			}
			
			$smarty->assign('obj', $obj->getAll($append . " ORDER BY `display_order` "));
			$smarty->assign('CONTENT', 'templates/list.tpl');
			$smarty->assign('type', $type);
		break;
		case 'status':
			if (!isset($_GET['id'])) {
				jump('index.php?page=templates');
			}
			
			$obj = new Templates((int)$_GET['id']);
			$obj->status = ($obj->status == 0) ? 1 : 0;
			$obj->save();
			
			Messages::addNotice('Status changed');
			jump('index.php?page=templates');
		break;
		case 'default':
			if (!isset($_GET['id'])) {
				jump('index.php?page=templates');
			}
			
			$obj = new Templates((int)$_GET['id']);
			$obj->setDefault();
			
			Messages::addNotice('Template made default');
			jump('index.php?page=templates');
		break;
		
		case 'add_edit':
			
			$smarty->assign('CONTENT', 'templates/add_edit.tpl');
			
			$isNewTemplate = empty($template->id);
			
			if ($config->isPOST()){
				
				$template->name = $_POST['name'];
				$template->description = $_POST['description'];
				$template->class_package = $_POST['class_package'];
				$template->class_name = $_POST['class_name'];
				$template->type = $_POST['type'];
				$template->width = $_POST['width'];
				$template->height = $_POST['height'];
				$template->status = (isset($_POST['status'])) ? 1 : 0;
				$template->save();
				
				if ($isNewTemplate){
					$template->hash = generateUniqueHash('t', $template->id);
					$template->display_order = $template->id;
					$template->save();
				}
				
				if (!empty($_FILES['thumb']['name'])) {
					if (!$template->uploadThumbOnAmazon($_FILES['thumb']['tmp_name'], $err)){
						Messages::addError($err);
					}
				}
				
				if (!empty($_FILES['background']['name'])) {
					if (!$template->uploadBgImageOnAmazon($_FILES['background']['tmp_name'], $err)){
						Messages::addError($err);
					}
				}
				
				if(!empty($_FILES['xml']['name'])) {
					if (!$template->uploadXmlOnAmazon($_FILES['xml']['tmp_name'], $err)){
						Messages::addError($err);
					}
				}
				
				if (!empty($_FILES['swf']['name'])){
					if (!$template->uploadSwfOnAmazon($_FILES['swf']['tmp_name'], $err)){
						Messages::addError($err);
					}
				}
				Messages::addNotice('Saved');
				jump('?page=templates');
			}
			
			$smarty->assign('template', $template);
			
			break;
		
		case 'up':
			if (!isset($_GET['id'])) {
				jump('index.php?page=templates');
			}
			
			$template = new Templates((int)$_GET['id']);
			
			$template->moveUp();
			jump('index.php?page=templates');
		break;
		
		case 'down':
			if (!isset($_GET['id'])) {
				jump('index.php?page=templates');
			}
			
			$template = new Templates((int)$_GET['id']);
			
			$template->moveDown();
			jump('index.php?page=templates');
		break;
	}
	