<?php
if(!isset($_SESSION)) {
     session_start(); 
}

//echo "Sexiunea:";deg($_SESSION['admin_filters_feedback']);
if  (!isset($_SESSION['admin_filters_feedback']['filters'])) {
	$_SESSION['admin_filters_feedback']['filters']['mesaj']='';
	$_SESSION['admin_filters_feedback']['filters']['user_id']='';
	$_SESSION['admin_filters_feedback']['filters']['email']='';
	$_SESSION['admin_filters_feedback']['filters']['screename']='';	
}

if ($config->isPost()){
	if (isset($_GET['p'])) unset($_GET['p']);
	$_SESSION['admin_filters_feedback']['filters'] = $_POST;
}
		
	if (isset($_GET['order'])){
		
		$_SESSION['admin_filters_feedback']['order']->orderBy = $_GET['order'];
		if (!isset($_SESSION['admin_filters_feedback']['order']->orderType)){
			$_SESSION['admin_filters_feedback']['order']->orderType = 'DESC';
		}
		
		if ($_SESSION['admin_filters_feedback']['order']->orderType == 'DESC'){
			$_SESSION['admin_filters_feedback']['order']->orderType = 'ASC';
		} else {
			$_SESSION['admin_filters_feedback']['order']->orderType = 'DESC';
		}
	} 
	
	$filters = isset($_SESSION['admin_filters_feedback']['filters']) ? $_SESSION['admin_filters_feedback']['filters'] : array();
	
	$append = " WHERE 1 ";
	
	//echo("Filtrele:");deg($filters);
	
	
	if (isset($filters['end_date']) && $filters['end_date'] != '' && isset($filters['start_date']) && $filters['start_date'] != '' && $filters['start_date'] == $filters['end_date']){
		$startDate = realEscapeString($filters['start_date']);
		$append .= " AND DATE_FORMAT( `date_created` , '%Y-%m-%d' ) = '{$startDate}' ";
	}
	else
	{
		if (isset($filters['start_date']) && $filters['start_date'] != ''){
			$startDate = realEscapeString($filters['start_date']);
			$append .= " AND `date_added` >= '{$startDate} 00:00:00' ";
		}
		
		if (isset($filters['end_date']) && $filters['end_date'] != ''){
			$endDate = realEscapeString($filters['end_date']);
			$append .= " AND `date_added` <= '{$endDate} 23:59:59' ";
		}	

// ----------- for testing purposes - there are some records with date_created = NULL		
//		$append .= " OR `date_created` = NULL ";
	}
	
	if (isset($filters['mesaj']) && !empty($filters['mesaj'])) {
		$mesaj = realEscapeString($filters['mesaj']);
		$append .= " AND `message` like '%{$mesaj}%'";
	}
	
	if (isset($filters['user_id']) && !empty($filters['user_id'])){
		$users = explode(',', $filters['user_id']);
		$uquery = '';
		foreach ($users as $uid){
			$uquery .= "'" . intval($uid) . "',";
		}
		$uquery = "(" . rtrim($uquery, ',') . ")";
		$append .= " AND `user_id` IN " . $uquery;
	} else {
		$sapp = '';
		if (isset($filters['email']) && !empty($filters['email'])){
			$email = realEscapeString($filters['email']);
			$sapp .= "AND `email` LIKE '%{$email}%' ";
		}
		
		if (isset($filters['screename']) && !empty($filters['screename'])){
			$screenName = realEscapeString($filters['screename']);
			$sapp .= "AND `screenname` LIKE '%{$screenName}%' ";
		}
		if (!empty($sapp)){
			$sapp = ' WHERE '.ltrim($sapp, 'AND');
			$request = new SnacktoolsRequest('get_users_for_admin');
			$request->addParam('query', $sapp);
			$response = $request->request();
			$responseQuery = $response->data['query'];
			$append .= " AND `user_id` IN " . $responseQuery;
		}
	}
	
	$orderAlbums = isset($_SESSION['admin_filters_feedback']['order']) ? $_SESSION['admin_filters_feedback']['order'] : null; 
	
	if (isset($orderAlbums->orderBy)){
		$append .= ' ORDER BY `' . $orderAlbums->orderBy . '` ' . $orderAlbums->orderType . ' ';
	} else {
		$append .= ' ORDER BY `id` DESC ';
	}
	
	
	$recordsPerPage = isset($filters['records']) ? intval($filters['records']) : 10;
	if ($recordsPerPage < 10 || $recordsPerPage > 500){
		$recordsPerPage = 10;
	}
	
	$feedback = new UserFeedback;
	$count = $feedback->getCount($append);

	$paginator = new Paginator($count);
	$paginator->setRecordsPerPage($recordsPerPage);
	$append .= " LIMIT " . $paginator->getLimit();
	
	$filters['order'] = $orderAlbums;

	$smarty->assign('paginatorHtml', $paginator->getHtml());
	$smarty->assign('paginator', $paginator);
	$smarty->assign('feeds', $feedback->getQuery($append));
	$smarty->assign('filters', $filters);
	if (!isset($arr)){
		$arr[]='';
	}		
	$smarty->assign($_SESSION['admin_filters_feedback']['filters'],$_SESSION['admin_filters_feedback']['filters']);
	