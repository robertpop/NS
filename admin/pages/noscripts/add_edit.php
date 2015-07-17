<?php

	if (isset($_SESSION['post'])){
		$smarty->assign('post',$_SESSION['post']);
		unset($_SESSION['post']);
	}
	
	
	if (isset($_GET['todo']) && $_GET['todo']=='edit') 
		$_SESSION['todo'] = 'edit';
	
	if ($config->isPOST()) {
		
		$append = "";
		if (isset($_GET['id']) && $_GET['id']!='')
			$append .= "&id=".$_GET['id'];
		if (isset($_SESSION['todo']) && $_SESSION['todo']=='edit'){
			$append .= "&todo=edit";
			unset($_SESSION['todo']);
		}
			
		$error_nr = 0;
		if(!isset($_POST['c_name']) || $_POST['c_name']==''){
			Messages::addError('Name required!');
			$error_nr++;
		}
		if(!isset($_POST['c_code']) || $_POST['c_code']==''){
			Messages::addError('Probability required!');
			$error_nr++;
		}
		if(!isset($_POST['c_probability']) || $_POST['c_probability']==''){
			Messages::addError('Code required!');
			$error_nr++;
		}
		if($error_nr>0){
			$_SESSION['post'] = $_POST;
			jump("index.php?page=noscripts&action=add_edit".$append);			
		}
		if(isset($_GET['id']) && $_GET['id']!=''){
			//edit
			$c = new Noscripts($_GET['id']);
			Messages::addNotice('Code edited!');
		} else {
			//add
			$c = new Noscripts();
			Messages::addNotice('Code added!');
		}
		$c->name = $_POST['c_name'];
		$c->code = $_POST['c_code'];
		$c->probability = $_POST['c_probability'];
		$c->status = $_POST['c_status'];
		$c->save();
		jump('?page=noscripts');
		
	}

	if (isset($_GET['todo']) && $_GET['todo']=='edit'){
		$c = new Noscripts(@$_GET['id']);
		$smarty->assign('c', $c);
		$smarty->assign('edit',1);
	}
	