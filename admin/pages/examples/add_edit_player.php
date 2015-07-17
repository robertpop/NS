<?php

	if ($config->isPOST()) {
		if (isset($_POST['b_id']) && $_POST['b_id']!=''){
			//edit
			$b = new ExamplePlayers($_POST['b_id']);
			if ( ($_FILES['b_thumbnail']['name']!='') || ($_POST['b_hash'] != $b->hash)){
				if($_FILES['b_thumbnail']['name']!=''){
					$finfo = getimagesize($_FILES['b_thumbnail']['tmp_name']);
					$result = S3::putObjectFile(
						$_FILES['b_thumbnail']['tmp_name'],
						$config->amazon->S3Bucket,
						$config->amazon->folders['site']['examples']['thumbs'] . '/' . $_POST['b_id'],
						S3::ACL_PUBLIC_READ,
						array(),
						$finfo['mime']
					);
					Messages::addNotice('The thumbnail changed succesfully!');
				}

				if ($_POST['b_hash']!=$b->hash){
					$b->hash = $_POST['b_hash'];
					$b->update();
				}

				Messages::addNotice('The changes were saved!');
				jump('index.php?page=examples&action=manage_players&c_id='.$_GET['c_id']);
			} else {
				Messages::addError('No changes!');
				jump('index.php?page=examples&action=manage_players&c_id='.$_GET['c_id']);
			}
		} else {
			//add
			if ($_FILES['b_thumbnail']['name']==''){
				Messages::addError('You have to fill all fields!');
				$smarty->assign('post', $_POST);	
			} else {
				$eb = new ExamplePlayers();
				$eb->cat_id = $_GET['c_id'];
                //deg($_GET,$_POST);
                $eb->hash =  $_POST['b_hash'];
				$eb->save();
	
				$finfo = getimagesize($_FILES['b_thumbnail']['tmp_name']);
				$result = S3::putObjectFile(
					$_FILES['b_thumbnail']['tmp_name'],
					$config->amazon->S3Bucket,
					$config->amazon->folders['site']['examples']['thumbs'] . '/' . $eb->id,
					S3::ACL_PUBLIC_READ,
					array(),
					$finfo['mime']
				);
		
				Messages::addNotice('The notification was added succesfully!');
				jump('index.php?page=examples&action=manage_players&c_id='.$_GET['c_id']);
			}
		}
	}
	
	if (isset($_GET['todo']) && $_GET['todo']=='edit'){
		$b = new ExamplePlayers($_GET['b_id']);
		$smarty->assign('b', $b);
		$smarty->assign('edit',1);
	}
	$smarty->assign('c_id', $_GET['c_id']);