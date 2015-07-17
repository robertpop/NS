<?php
if(!isset($_SESSION)) {
     session_start();
}
if  (!isset($_SESSION['admin_filters_quizz']['filters']['filter_chart_period']))
	$_SESSION['admin_filters_quizz']['filters']['filter_chart_period']='monthly';
if  (!isset($_SESSION['admin_filters_quizz']['filters']['filter_chart_y_axis']))
	$_SESSION['admin_filters_quizz']['filters']['filter_chart_y_axis']='valoric';

$cc = 0 ; 
	if ($config->isPost()){
		unset($_GET['p']);
		$_SESSION['admin_filters_quizz']['filters'] = $_POST;

		if (isset($_POST['types']))	
			foreach ($_POST['types'] as $type){
			  switch (intval($type)){
				case 1:
					$_SESSION['admin_filters_quizz']['filters']['type_editable']=1;
					$cc++;		
					break;
				case 2:
					$_SESSION['admin_filters_quizz']['filters']['type_published_free']=1;
					$cc++;		
					break;
				case 3:
					$_SESSION['admin_filters_quizz']['filters']['type_no_watermark']=1;
					$cc++;		
					break;
			}
		}
	
//		jump('?page=quizzes');
	}
if (!isset($_SESSION['admin_filters_quizz']['filters']['type_editable']) AND
	!isset($_SESSION['admin_filters_quizz']['filters']['type_published_free']) AND
	!isset($_SESSION['admin_filters_quizz']['filters']['type_no_watermark']) )
{
		$_SESSION['admin_filters_quizz']['filters']['type_editable']=1;
		$_SESSION['admin_filters_quizz']['filters']['type_published_free']=1;
		$_SESSION['admin_filters_quizz']['filters']['type_no_watermark']=1;
}
	
	$orderAlbums = isset($_SESSION['admin_filters_quizz']['order']) ? $_SESSION['admin_filters_quizz']['order'] : null;
	
	if (isset($_GET['order'])){
		
		$_SESSION['admin_filters_quizz']['order']->orderBy = $_GET['order'];
		if (!isset($_SESSION['admin_filters_quizz']['order']->orderType)){
			$_SESSION['admin_filters_quizz']['order']->orderType = 'DESC';
		}
		
		if ($_SESSION['admin_filters_quizz']['order']->orderType == 'DESC'){
			$_SESSION['admin_filters_quizz']['order']->orderType = 'ASC';
		} else {
			$_SESSION['admin_filters_quizz']['order']->orderType = 'DESC';
		}
//		jump('?page=quizzes');
	}
	
	$filters = isset($_SESSION['admin_filters_quizz']['filters']) ? $_SESSION['admin_filters_quizz']['filters'] : array();
	
	$append = " WHERE 1 ";
	
	if (isset($filters['quiztypes'])){
		$qtypesApp = '';
		foreach ($filters['quiztypes'] as $qtype){
			$qtypeEscaped = realEscapeString($qtype);
			$qtypesApp .= '`type` = \'' . $qtypeEscaped . '\' OR';
		}
		if (!empty($qtypesApp)){
			$qtypesApp = rtrim($qtypesApp, 'OR');
			$append .= "AND (" . $qtypesApp . ') ';
		}
	}
	//	deg($filters);
	if (isset($filters['types'])){
		$typesApp = '';
		foreach ($filters['types'] as $type){
			switch (intval($type)){
				case 1:
					$typesApp .= '`status` = \'' . Notify::STATUS_EDITABLE . '\' OR';
					$filters['type_editable']=1;
					break;
					
				case 2:
					$typesApp .= ' (`status` = \'' . Notify::STATUS_PUBLISHED . '\' AND !(flags & ' . Notify::FLAG_PREMIUM . ')) OR';
					$filters['type_published_free']=1;
					break;
					
				case 3:
					$typesApp .= ' (`status` = \'' . Notify::STATUS_PUBLISHED . '\' AND flags & ' . Notify::FLAG_PREMIUM . ') OR';
					$filters['type_no_watermark']=1;
					break;
			}
		}
		if (!empty($typesApp)){
			$typesApp = rtrim($typesApp, 'OR');
			$append .= "AND (" . $typesApp . ') ';
		}
	}
	

	if (isset($filters['name']) && !empty($filters['name'])){
		$filters['name'] = trim($filters['name']);
		$name = realEscapeString($filters['name']);
		$append .= " AND `name` LIKE '%{$name}%' ";
	}
	
	if (isset($filters['hash']) && $filters['hash'] != ''){
		$hash = realEscapeString($filters['hash']);
		$append .= " AND `hash` LIKE '%{$hash}%' ";
	}
	
	if (isset($filters['template_hash']) && $filters['template_hash'] != ''){
		$arr=$filters['template_hash'];
		$tpls_list="";	
 		$templateHash = $filters['template_hash'] ;
		
		foreach ($templateHash as $temp) {
			if ($tpls_list !=""){
				$tpls_list .=", ";
			} 
			$tpls_list .= " '{$temp}' ";
			
		}
		$append .= " AND `template_id` IN  (".$tpls_list.")";
		$_SESSION['admin_filters_quizz']['filters']['templates_list']=$tpls_list;
	}
	
//	deg($tpls_list);
	
	if (isset($filters['end_date']) && $filters['end_date'] != '' && isset($filters['start_date']) && $filters['start_date'] != '' && $filters['start_date'] == $filters['end_date']){
		$startDate = realEscapeString($filters['start_date']);
		$append .= " AND DATE_FORMAT( `date_created` , '%Y-%m-%d' ) = '{$startDate}' ";
	}
	else
	{
		if (isset($filters['start_date']) && $filters['start_date'] != ''){
			$startDate = realEscapeString($filters['start_date']);
			$append .= " AND `date_created` >= '{$startDate} 00:00:00' ";
		}
		
		if (isset($filters['end_date']) && $filters['end_date'] != ''){
			$endDate = realEscapeString($filters['end_date']);
			$append .= " AND `date_created` <= '{$endDate} 23:59:59' ";
		}	

// ----------- for testing purposes - there are some records with date_created = NULL		
//		$append .= " OR `date_created` = NULL ";
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
	
    //$append .= " AND flags & " . Notify::FLAG_NOTIF_DATA_SAVED;
	
	$orderAlbums = isset($_SESSION['admin_filters_quizz']['order']) ? $_SESSION['admin_filters_quizz']['order'] : null; 
	
	if (isset($orderAlbums->orderBy)){
		$append .= ' ORDER BY `' . $orderAlbums->orderBy . '` ' . $orderAlbums->orderType . ' ';
	} else {
		$append .= ' ORDER BY `id` DESC ';
	}
	$recordsPerPage = isset($filters['records']) ? intval($filters['records']) : 10;
	if ($recordsPerPage < 10 || $recordsPerPage > 500){
		$recordsPerPage = 10;
	}
	$album = new Notify;
	$count = $album->getCount($append);
	$templates = new Templates();
	$paginator = new Paginator($count);
	$paginator->setRecordsPerPage($recordsPerPage);
	$append .= " LIMIT " . $paginator->getLimit();
	$filters['order'] = $orderAlbums;
	$smarty->assign('paginatorHtml', $paginator->getHtml());
	$smarty->assign('paginator', $paginator);
	$smarty->assign('notifications', Notify::getNotificationsListAdmin($append));
	$smarty->assign('filters', $filters);
	if (!isset($arr)){
		$arr[]='';
	}
	$smarty->assign('arr_template', $arr);
	$smarty->assign('templates', $templates->getAll(' order by name '));
	$smarty->assign('quizTypes', Notify::getTypes());
	$smarty->assign($_SESSION['admin_filters_quizz']['filters'],$_SESSION['admin_filters_quizz']['filters']);
	$smarty->assign('filter_chart_period', 	$_SESSION['admin_filters_quizz']['filters']['filter_chart_period']);
	$smarty->assign('filter_chart_y_axis', 	$_SESSION['admin_filters_quizz']['filters']['filter_chart_y_axis']);
        