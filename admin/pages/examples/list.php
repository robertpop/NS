<?php
	
	$todo = isset($_GET['todo']) ? $_GET['todo'] : null;
	
	switch ($todo){
		case 'delete':
			
			$exampleCat = new ExampleCategories($_GET['id']);
			
			if ($exampleCat->id){
				$players = ExamplePlayers::getAllFromCat($_GET['id']);
				foreach ($players as $player){
					$player->delete();
				}
				
				$exampleCat->delete();
				
				Messages::addNotice('Category successfully deleted');
			} else {
				Messages::addError('Delete Failed');
			}
			
			break;
			
		case 'up':
			
			$c = new ExampleCategories($_GET['id']);
			$c->moveUp();
			
			break;
			
		case 'down':
			
			$c = new ExampleCategories($_GET['id']);
			$c->moveDown();
			
			break;
	}
	
	$ec = new ExampleCategories();
	$smarty->assign('c_list', $ec->getAll(' ORDER BY `display_order` ASC'));