<?php

	$c_id = isset($_GET['c_id']) ? $_GET['c_id'] : null;
	
	if (isset($_GET['todo'])){
		if ($_GET['todo']=='delete'){
			$b = new ExamplePlayers($_GET['id']);
			$b->delete();
		} elseif($_GET['todo']=='up') {
			$b = new ExamplePlayers($_GET['b_id']);
			$b->moveUp(' `cat_id`= \'' . $b->cat_id . '\'');
		} elseif($_GET['todo']=='down') {
			$b = new ExamplePlayers($_GET['b_id']);
			$b->moveDown(' `cat_id`= \'' . $b->cat_id . '\'');		
		} else {
			Messages::addNotice('Error');
		}
	}
	
	$eb = new ExamplePlayers();
	$smarty->assign('b_list', $eb->getAll("WHERE `cat_id`= '{$c_id}' ORDER BY `display_order` ASC"));
	$smarty->assign('c_id', $c_id);