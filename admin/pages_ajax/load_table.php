<?php
include '../../init.php';
	set_time_limit(0);
//$breadCrumb->add('Banners');
$userId = false;
if(!isset($_SESSION)) {
     session_start();
}


if (isset($_GET['column']))
	{
		if(isset($_SESSION['admin_filters_quizz']['filters']['column']) && $_SESSION['admin_filters_quizz']['filters']['column']==$_GET['column'] )
			$_SESSION['admin_filters_quizz']['filters']['column_order']=$_SESSION['admin_filters_quizz']['filters']['column_order']*(-1);
		else 	
			$_SESSION['admin_filters_quizz']['filters']['column_order']=1;
		$_SESSION['admin_filters_quizz']['filters']['column']=$_GET['column'];
	}
else {
	if (!isset($_SESSION['admin_filters_quizz']['filters']['column']))
		$_SESSION['admin_filters_quizz']['filters']['column']='templateName';
	if (!isset($_SESSION['admin_filters_quizz']['filters']['column_order']))
		$_SESSION['admin_filters_quizz']['filters']['column_order']=1;
	}	
$filters = $_SESSION['admin_filters_quizz']['filters'];


if (empty($_SESSION['admin_filters_quizz']['filters']['start_date'])) {

	$q="SELECT min(DATE_FORMAT(`notifications`.`date_created`, '%Y-%m-%d')) as mindate from notifications;";
	$db = new DbMySql($q);
	$db->nextRecord();
	$record = $db->getRecord();
	$min_date = $record['mindate'];
	$_SESSION['admin_filters_quizz']['filters']['start_date'] = $min_date;
	$filters['start_date'] = $min_date;
}

if (empty($_SESSION['admin_filters_quizz']['filters']['end_date'])) {
	$_SESSION['admin_filters_quizz']['filters']['end_date'] = date("Y-m-d");
	$filters['end_date'] = date("Y-m-d");
}

$smarty = Application::getSmarty('/admin/templates/', '/admin/templates_c/');
$smarty->assign($filters);

	$res = array();
	$res_all = array();
	$max = array();

//  -------------------  start query 

		$query = " SELECT    `templates`.`name` , `templates`.`id`  , `notifications`.`type`";
	    $initial = 2;
	    
		$templates = new Templates();
		$tpls = $templates->getAll();
		    

			if (!empty($filters['type_editable'])) {
				if ($initial>0) $query .=", "; else $initial++;
				$query .= " sum( `notifications`.`status` = 'EDITABLE') as `type_editable` ";
			}
			if (!empty($filters['type_published_free'])) {
				if ($initial>0) $query .=", "; else $initial++;
				$query .= " sum( `notifications`.`status`='PUBLISHED' AND NOT (`notifications`.`flags` & " . Notify::FLAG_PREMIUM . ")) as `type_published_free` ";
			}
			if (!empty($filters['type_no_watermark'])) {
				if ($initial>0) $query .=", "; else $initial++;
				$query .= " sum( `notifications`.`status`='PUBLISHED' AND `notifications`.`flags` & " . Notify::FLAG_PREMIUM . ") as `type_published_no_watermark` ";
			}
			/*if (!empty($filters['type_advanced_reporting'])) {
				if ($initial>0) $query .=", "; else $initial++;
				$query .= " sum( `notifications`.`status`='PUBLISHED' AND  `notifications`.`flags` & " . Notify::FLAG_ADVANCED_REPORTING . " ) as `type_advanced_reporting` ";
			}*/
		
		$query .= " FROM notifications, templates
					WHERE 1 ";
		$query .=  " AND  `notifications`.`template_id` = `templates`.`id` "; 
		$query .= (!empty($filters['start_date'])
					? " AND DATE_FORMAT(`notifications`.`date_created`,'%Y-%m-%d') >= '{$filters['start_date']}'" : '')
			.	(!empty($filters['end_date'])
					? " AND DATE_FORMAT(`notifications`.`date_created`,'%Y-%m-%d') <= '{$filters['end_date']}'" : '')
			.	(!empty($filters['hash'])
					? " AND `notifications`.`hash` LIKE '%{$filters['hash']}%'" : '')
			.	(!empty($filters['templates_list'])
					? " AND `notifications`.`template_id` IN ({$filters['templates_list']}) " : '')
			.	(!empty($filters['name'])
					? " AND `notifications`.`name` LIKE '%{$filters['name']}%'" : '');
//	deg($filters);
	if (isset($filters['user_id']) && !empty($filters['user_id'])){
		$users = explode(',', $filters['user_id']);
		$uquery = '';
		foreach ($users as $uid){
			$uquery .= "'" . intval($uid) . "',";
		}
		$uquery = "(" . rtrim($uquery, ',') . ")";
		$query .= " AND `notifications`.`user_id` IN " . $uquery;
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
		
		$sapp = ' WHERE '.ltrim($sapp, 'AND');
		$request = new SnacktoolsRequest('get_users_for_admin');
		$request->addParam('query', $sapp);
		$response = $request->request();
		$responseQuery = $response->data['query'];
		if ($responseQuery)
		$query .= " AND `user_id` IN " . $responseQuery;
	}
					
	if (isset($filters['quiztypes'])){
		$qtypesApp = '';
		foreach ($filters['quiztypes'] as $qtype){
			$qtypeEscaped = realEscapeString($qtype);
			$qtypesApp .= '`notifications`.`type` = \'' . $qtypeEscaped . '\' OR';
		}
		if (!empty($qtypesApp)){
			$qtypesApp = rtrim($qtypesApp, 'OR');
			$query .= "AND (" . $qtypesApp . ') ';
		}
	}
	 	$query.=	" AND (0 " 
				. 	(!empty($filters['type_editable'])
						? " OR (`notifications`.`status` = 'EDITABLE' ) " : '')
				. 	(!empty($filters['type_published_free'])
						? " OR (`notifications`.`status`='PUBLISHED' AND NOT (`notifications`.`flags` & " . Notify::FLAG_PREMIUM . ")) " : '')
				. 	(!empty($filters['type_no_watermark'])
						? " OR (`notifications`.`status`='PUBLISHED' AND `notifications`.`flags` & " . Notify::FLAG_PREMIUM . ")" : '')
				/*. 	(!empty($filters['type_advanced_reporting'])
						? " OR (`notifications`.`status`='PUBLISHED' AND  `notifications`.`flags` & " . Notify::FLAG_ADVANCED_REPORTING . "  )" : '')*/
			.	")";
		$query_sum = $query;	// to calculate the sum for all (ungrouped)				
		$query.=	'  GROUP BY  `templates`.`id` ORDER BY `templates`.`name` ' ;
		$db = new DbMySql($query);
		while ($db->nextRecord()){
			$record = $db->getRecord();
			 $ii=0;
			foreach ($record as $fieldName => $fieldValue){
				$ii++;
				if ($ii == 1) {
					$name = $fieldValue;
//					$name .= "  (". $fieldValue. ")";
				}	
				if ($ii == 2) {
//					$name .= $fieldValue;
					$name .= "  (". $fieldValue. ")";
					$res_all[$name]['templateName']=$name;
					
				}	
				if ($ii>2)
					$res_all[$name][$fieldName]=$fieldValue;
			}
		}
//		deg($res_all);
		$db = new DbMySql($query_sum);
		while ($db->nextRecord()){
			$record = $db->getRecord();
			 $ii=0;
			foreach ($record as $fieldName => $fieldValue){
				
				$ii++;
				if ($ii == 2)
					$name = 'TOTAL';
				if ($ii == 3)
					$res_total[$name][$fieldName]='';
				if ($ii>3)
					$res_total[$name][$fieldName]=$fieldValue;
			}
		}
		
	
		if (isset($filters['column']) && !empty($filters['column'])){
				$tmp = Array();
				foreach($res_all as &$ma){
				    $tmp[] = &$ma[$filters['column']];
				}
				if ($filters['column_order']==1){
					array_multisort($tmp, SORT_ASC,  $res_all);
				}	
				else{
					array_multisort($tmp, SORT_DESC,  $res_all);
				}	
		}
	$resValoric = $res_all;
	$smarty->assign('result', $res_all);
	$smarty->assign('column', $filters['column']);
	$smarty->assign('column_order', $filters['column_order']);	
	$smarty->assign('result_total', $res_total);
	$smarty->assign('resultValoric', $resValoric);
	
		$out = $smarty->fetch( dirname(__FILE__) . DIRECTORY_SEPARATOR . 'load_table.tpl');
		echo $out;
	
	
	