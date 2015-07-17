<?php

if (isset($_GET['todo'])){
	if ($_GET['todo']=='delete'){
		$b = new Noscripts($_GET['id']);
		$b->delete();
		Messages::addNotice('Code deleted');
	} elseif($_GET['todo']=='1'){
		Noscripts::setStatus(1, $_GET['ids']);
		Messages::addNotice('Code(s) updated');
	} elseif($_GET['todo']=='0'){
		Noscripts::setStatus(0, $_GET['ids']);
		Messages::addNotice('Code(s) updated');
	} elseif($_GET['todo']=='del'){
		Noscripts::deleteAll($_GET['ids']);
		Messages::addNotice('Code(s) deleted');
	}
	jump('?page=noscripts');
}

$ec = new Noscripts;
$smarty->assign('c_list', $ec->getAll(' ORDER BY `name` ASC'));