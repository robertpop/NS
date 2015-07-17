<?php
	
	$action = isset($_GET['action']) ? $_GET['action'] : null;
	$id = isset($_GET['id']) ? $_GET['id'] : null;
	
	$adm = new Admin($id);

	switch ($action){
		default:
			
			$smarty->assign('administrators', $adm->getAll());
			$smarty->assign('CONTENT', 'administrators/list.tpl');
			
			break;
			
		case 'add':
		case 'edit':
			
			if ($config->isPOST()){
				$adm->email = $_POST['email'];
				if (!empty($_POST['password']) && $_POST['password'] == $_POST['password2']){
					$adm->password = md5($_POST['password']);
				} else {
					Messages::addError('Password not changed');
				}
				$adm->access = isset($_POST['access']) ? array_sum($_POST['access']) : 0;
				if (empty($adm->id) && empty($adm->password)){
					Messages::addError('Password can\'t be empty');
					jump('?page=administrators&action=add');
				} else {
					$adm->save();
					if ($adm->id == Admin::getLogged()->id){
						Admin::setLoggedUser($adm);
					}
					Messages::addNotice('Saved');
					jump('?page=administrators&action=edit&id=' . $adm->id);
				}
			}
			
			$smarty->assign('accessData', Admin::getAccessData());
			$smarty->assign('adm', $adm);
			$smarty->assign('CONTENT', 'administrators/add_edit.tpl');
			
			break;
			
		case 'remove':
			
			$adm->delete();
			Messages::addNotice('Deleted');
			jump('?page=administrators');
			break;
		
	}
	
	$smarty->assign('action', $action);