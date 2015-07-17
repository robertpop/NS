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
		if(!isset($_POST['c_title']) || $_POST['c_title']==''){
			Messages::addError('Title required!');
			$error_nr++;
		}
		if(!isset($_POST['c_url']) || $_POST['c_url']==''){
			Messages::addError('URL required!');
			$error_nr++;
		}
		if(!isset($_POST['height']) || $_POST['height']==''){
			Messages::addError('Height required!');
			$error_nr++;
		}
		if(!isset($_POST['c_sdesc']) || $_POST['c_sdesc']==''){
			Messages::addError('Short description required!');
			$error_nr++;
		}		
		if(!isset($_POST['c_desc']) || $_POST['c_desc']==''){
			Messages::addError('Description required!');
			$error_nr++;
		}
		
		if(!isset($_GET['id'])){
		 	if (empty($_FILES['background']['name'])) {
				Messages::addError('Background image missing.');
				$error_nr++;
			}
		}

		if($error_nr>0){
			$_SESSION['post'] = $_POST;
			jump("index.php?page=examples&action=add_edit".$append);			
		}
		$_POST['c_url'] = preg_replace('/[^a-zA-Z0-9.]+/', '-', $_POST['c_url']);
		if(isset($_GET['id']) && $_GET['id']!=''){
			//edit
			$c = new ExampleCategories($_GET['id']);
			Messages::addNotice('Category edited!');
		} else {
			//add
			$c = new ExampleCategories();
			Messages::addNotice('Category added!');
		}		
		
		$c->title = $_POST['c_title'];
		$c->url = $_POST['c_url'];
		$c->seo_title = $_POST['c_seo_title'];
		$c->height = $_POST['height'];
		$c->seo_description = $_POST['c_seo_description'];
		$c->seo_keywords = $_POST['c_seo_keywords'];
		$c->short_description = $_POST['c_sdesc'];
		$c->description = $_POST['c_desc'];
		$c->more_description = $_POST['c_mdesc'];
		$c->save('display_order');

		if (!empty($_FILES['background']['name'])) {
			$finfo = getimagesize($_FILES['background']['tmp_name']);
			if (!isset($finfo['mime'])){
				
				Messages::addError('Background image file: Invalid file type');
				
			} else {
				
				$result = S3::putObjectFile(
					$_FILES['background']['tmp_name'],
					$config->amazon->S3Bucket,
					$config->amazon->folders['site']['examples']['backgrounds'] . '/' . $c->id,
					S3::ACL_PUBLIC_READ,
					array(),
					$finfo['mime']
				);
		
				if (!$result) {
					Messages::addError('Amazon image upload failed');
					jump('?page=examples');
				}
				
			}
		}
		
		jump('?page=examples');
		
	}

	if (isset($_GET['todo']) && $_GET['todo']=='edit'){
		$c = new ExampleCategories(isset($_GET['id']) ? $_GET['id'] :  null);
		$smarty->assign('c', $c);
		$smarty->assign('edit',1);
		$smarty->assign('backgroundImage', $c->getBackgroundLink());
	}
	