<?php
include '../../init.php';
	set_time_limit(0);
//$breadCrumb->add('Banners');
$userId = false;
session_start();

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
	
	$w1 = 1;
	$h1 = 0;
	$d1 = date('d', strtotime($filters['start_date']));
	$m1 = date('m', strtotime($filters['start_date']));
	$y1 = date('Y', strtotime($filters['start_date']));
	
	$w2 = 53;
	$h2 = 23;
	$d2 = date('d', strtotime($filters['end_date']));
	$m2 = date('m', strtotime($filters['end_date']));
	$y2 = date('Y', strtotime($filters['end_date']));
	
	$divs = 11; // numarul default de diviziuni pentru myChart.setLabelX
	$cut_display = 0; //daca taie diferit din data/ora afisata axa x (va face diferit pt "hour" in tpl)
	
	switch ($filters['filter_chart_period']) {
		case 'yearly':
			$dateAux = &$y1;
			$dateFormat = 'Y';
			$dateFormatSQL = '%Y';
			$m1=1;$d1=1;$m2=1;$d2=1;
			break;
		case 'monthly':
			$dateAux = &$m1;
			$dateFormat = 'Y-m';
			$dateFormatSQL = '%Y-%m';
			$d1=1;$d2=1;
			break;
		case 'weekly':
			$dateAux = &$d1;
			$dateFormat = 'Y \w\:W';
			$dateFormatSQL = '%Y w:%u';
			break;
		case 'daily':
		default:
			$dateAux = &$d1;
			$dateFormat = 'Y-m-d';
			$dateFormatSQL = '%Y-%m-%d';
			break;
		case 'hourly':
		default:
			$dateAux = &$h1;
			$dateFormat = 'Y-m-d \(\h\o\u\r\: H\)';
			$dateFormatSQL = '%Y-%m-%d (hour: %H)';
			$cut_display = 1;
			$divs = 48;
			break;
		case 'group by hours of day':
		default:
			$dateAux = &$h1;
			$dateFormat = '\h\: H';
			$dateFormatSQL = 'h: %H';
			$divs = 24;
			break;
		case 'group by days of week':
		default:
			$dateAux = &$h1;
			$dateFormat = 'l';
			$dateFormatSQL = '%W';
			$divs = 7;
			break;
		case 'group by hours of week':
		default:
			$dateAux = &$h1;
//			$dateFormat = 'l H';
			$dateFormat = 'D H';
			$dateFormatSQL = '%a %H';
			$divs = 14;
			break;
	}
		
	$cc=0;
	if ($filters['filter_chart_period'] == 'group by hours of day') {
		 $hh = array();
 		 for ($cc=0 ; $cc<=9 ; $cc++)
				$hh[$cc]= "h: 0" . strval($cc);
 		 for ($cc=10 ; $cc<=23 ; $cc++)
				$hh[$cc]= "h: " . strval($cc);
		 for ($cc=0 ; $cc<=23 ; $cc++)
		 		$res_all[$hh[$cc]]['ord_date'] = $hh[$cc];
	}
	else 
	if ($filters['filter_chart_period'] == 'group by days of week') {
			$res_all['Monday']['ord_date'] = 'Monday';
			$res_all['Tuesday']['ord_date'] = 'Tuesday';
			$res_all['Wednesday']['ord_date'] = 'Wednesday';
			$res_all['Thursday']['ord_date'] = 'Thursday';
			$res_all['Friday']['ord_date'] = 'Friday';
			$res_all['Saturday']['ord_date'] = 'Saturday';
			$res_all['Sunday']['ord_date'] = 'Sunday';
			$cc==7;
	}
	else 
	if ($filters['filter_chart_period'] == 'group by hours of week') {

		 $hh = array();
 		 for ($cc=0 ; $cc<=9 ; $cc++)
				$hh[$cc]= "0" . strval($cc);
 		 for ($cc=10 ; $cc<=23 ; $cc++)
				$hh[$cc]= strval($cc);
				
	 
 		 for ($cc=0 ; $cc<=23 ; $cc++)
		 {
			$res_all['Mon '.$hh[$cc]]['ord_date'] = 'Mon '.$hh[$cc];
		 }
 		 for ($cc=0 ; $cc<=23 ; $cc++)
		 {
			$res_all['Tue '.$hh[$cc]]['ord_date'] = 'Tue '.$hh[$cc];
		 }
 		 for ($cc=0 ; $cc<=23 ; $cc++)
		 {
			$res_all['Wed '.$hh[$cc]]['ord_date'] = 'Wed '.$hh[$cc];
		 }
 		 for ($cc=0 ; $cc<=23 ; $cc++)
		 {
			$res_all['Thu '.$hh[$cc]]['ord_date'] = 'Thu '.$hh[$cc];
		 }
 		 for ($cc=0 ; $cc<=23 ; $cc++)
		 {
			$res_all['Fri '.$hh[$cc]]['ord_date'] = 'Fri '.$hh[$cc];
		 }
 		 for ($cc=0 ; $cc<=23 ; $cc++)
		 {
			$res_all['Sat '.$hh[$cc]]['ord_date'] = 'Sat '.$hh[$cc];
		 }
 		 for ($cc=0 ; $cc<=23 ; $cc++)
		 {
			$res_all['Sun '.$hh[$cc]]['ord_date'] = 'Sun '.$hh[$cc];
		 }
	}
	else 
	{
		while (mktime($h1, 0, 0, $m1, $d1, $y1) <= mktime($h2, 0, 0, $m2, $d2, $y2)) {
			$t = date($dateFormat, mktime($h1, 0, 0 , $m1, $d1, $y1));
			$res_all[$t]['ord_date'] = $t;
			$cc++;
			if ($filters['filter_chart_period']=='weekly'){ 
				$dateAux+=7 ; // for weeks  skips 7 days
			}	
			else{ 
				$dateAux++; 
			}	
		}
	}
	 
			 
	// check & add one more week (the last one) if by algorithm is skipping the last one
		if ($filters['filter_chart_period']=='weekly') {
			$tc1 = date('W', mktime( 0, 0, 0 , $m1, $d1, $y1));
			$tc2 = date('W', mktime( 0, 0, 0 , $m2, $d2, $y2));
			
			if ($tc1 == $tc2){
//				echo $tc1.' + '.$tc2. ' c = '. $cc;
				$cc++;
				$t2 = date($dateFormat, mktime($h2, 0, 0 , $m2, $d2, $y2));
				$res_all[$t2]['ord_date'] = $t2;
			}
		}	
		if ($cc==1) $res_all['slack']['ord_date'] = 'slack';
		
///////////// here I end


//  -------------------  start query 

		$query = " SELECT DATE_FORMAT(`notifications`.`date_created`, '{$dateFormatSQL}') AS `ord_date` ";

/////////////////////////

		
		
	$typesApp = ''; $oru='';
	if (  isset ($filters['type_editable']) && ( $filters['type_editable'] == 1))
	{	
		$query .= ", sum(`notifications`.`status`='EDITABLE' ) as `type_editable` ";
		$typesApp .= $oru. '`notifications`.`status` = \'' . Notify::STATUS_EDITABLE . '\'   ';
		$oru=' OR ';
	}				
		
	if (isset ($filters['type_no_watermark']) &&  $filters['type_no_watermark'] == 1)
	{	
		$query .= ", sum(`notifications`.`status`='PUBLISHED' AND `notifications`.`flags` & " . Notify::FLAG_PREMIUM . " ) as `type_no_watermark` ";
		$typesApp .= $oru. ' (`notifications`.`status` = \'' . Notify::STATUS_PUBLISHED . '\' AND NOT `notifications`.`flags` & ' . Notify::FLAG_PREMIUM . ')   ';
		$oru=' OR ';
	}				
		
		if ( isset ($filters['type_published_free']) && $filters['type_published_free'] == 1)
	{	
		$query .= ", sum(`notifications`.`status`='PUBLISHED' AND NOT (`notifications`.`flags` & " . Notify::FLAG_PREMIUM . ")) as `type_published_free` ";
		$typesApp .= $oru. ' (`notifications`.`status` = \'' . Notify::STATUS_PUBLISHED . '\' AND  (`notifications`.`flags` & ' . Notify::FLAG_PREMIUM . '))   ';
		$oru=' OR ';
	}				
		/*
		if ( isset ($filters['type_advanced_reporting']) && $filters['type_advanced_reporting'] == 1)
	{	
		$query .= ", sum(`notifications`.`status`='PUBLISHED' AND  `notifications`.`flags` & 16  ) as `type_advanced_reporting` ";
		$typesApp .= $oru. ' `notifications`.`flags` & ' . Notify::FLAG_ADVANCED_REPORTING . '   ';
		$oru=' OR ';
	}				
		*/

		$query .= " FROM `notifications` ";
//					WHERE `notifications`.`active` = 1 ";
			$append = " WHERE 1 ";
	
	if (isset($filters['quiztypes'])){
		$qtypesApp = '';
		foreach ($filters['quiztypes'] as $qtype){
			$qtypeEscaped = realEscapeString($qtype);
			$qtypesApp .= '`notifications`.`type` = \'' . $qtypeEscaped . '\' OR ';
		}
		if (!empty($qtypesApp)){
			$qtypesApp = rtrim($qtypesApp, ' OR ');
			$append .= " AND (" . $qtypesApp . ') ';
		}
	}
	
	
	$typesApp = ''; $oru='';
	if (  isset ($filters['type_editable']) && ( $filters['type_editable'] == 1))
	{	
		$typesApp .= $oru. '`notifications`.`status` = \'' . Notify::STATUS_EDITABLE . '\'   ';
		$oru=' OR ';
	}				
		
	if (isset ($filters['type_no_watermark']) &&  $filters['type_no_watermark'] == 1)
	{	
		$typesApp .= $oru. ' (`notifications`.`status` = \'' . Notify::STATUS_PUBLISHED . '\' AND `notifications`.`flags` & ' . Notify::FLAG_PREMIUM . ')   ';
		$oru=' OR ';
	}				
		
		if ( isset ($filters['type_published_free']) && $filters['type_published_free'] == 1)
	{	
		$typesApp .= $oru. ' (`notifications`.`status` = \'' . Notify::STATUS_PUBLISHED . '\' AND NOT (`notifications`.`flags` & ' . Notify::FLAG_PREMIUM . '))   ';
		$oru=' OR ';
	}				
		/*
		if ( isset ($filters['type_advanced_reporting']) && $filters['type_advanced_reporting'] == 1)
	{	
		$typesApp .= $oru. ' `notifications`.`flags` & ' . Notify::FLAG_ADVANCED_REPORTING . '   ';
		$oru=' OR ';
	}				
		*/
	if (isset($filters['types']))
		foreach ($filters['types'] as $type){
			switch (intval($type)){
				case 1:
					$typesApp .= $oru. '`notifications`.`status` = \'' . Notify::STATUS_EDITABLE . '\'   ';
					$oru=' OR ';
					$filters['type_editable']=1;
					break;
				case 3:
					$typesApp .= $oru. ' (`notifications`.`status` = \'' . Notify::STATUS_PUBLISHED . '\' AND `notifications`.`flags` & ' . Notify::FLAG_PREMIUM . ')   ';
					$oru=' OR ';
					$filters['type_no_watermark']=1;					
					break;
				case 2:
					$typesApp .= $oru. ' (`notifications`.`status` = \'' . Notify::STATUS_PUBLISHED . '\' AND NOT (`notifications`.`flags` & ' . Notify::FLAG_PREMIUM . '))   ';
					$oru=' OR ';
					$filters['type_published_free']=1;
					break;
				/*
				case 4:
					$typesApp .= $oru. ' `notifications`.`flags` & ' . Notify::FLAG_ADVANCED_REPORTING . '   ';
					$oru=' OR ';
					$filters['type_advanced_reporting']=1;					
					break;
				*/
			}
		}
	
	
	if (!empty($typesApp)){
			$typesApp = rtrim($typesApp, 'OR');
			$append .= "AND (" . $typesApp . ') ';
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
	
	$append .= " AND flags & " . Notify::FLAG_JSON_SAVED;
	
//	$orderAlbums = isset($_SESSION['admin_filters_quizz']['order']) ? $_SESSION['admin_filters_quizz']['order'] : null; 
	

					
		$append .= " GROUP BY DATE_FORMAT(`date_created`, '{$dateFormatSQL}')
					ORDER BY DATE_FORMAT(`date_created`, '{$dateFormatSQL}') ASC ";


		$query .= $append;
		
		$db = new DbMySql($query);
		while ($db->nextRecord()){
			$record = $db->getRecord();
			foreach ($record as $fieldName => $fieldValue){
				$res_all[$db->f('ord_date')][$fieldName] = $fieldValue;
				if ($filters['filter_chart_y_axis'] == 'procentual') {
					if (!isset($max[$fieldName]) || $max[$fieldName] < $fieldValue) {
						$max[$fieldName] = $fieldValue;
					}
				}
			}
		}

	$resValoric = $res_all;
	
	if ($filters['filter_chart_y_axis'] == 'procentual') {
		foreach ($res_all as &$row) {
			foreach ($row as $v => &$r) {
			//	echo $v;
				if ($v != 'ord_date' && $max[$v] > 0) {
					$r = round($r * 100 / $max[$v]);
				}
			}
		}
	}
		
	$smarty->assign('filters', $filters);
	$smarty->assign('divs', $divs);
	$smarty->assign('cut', $cut_display);
	$smarty->assign('result', $res_all);
	$smarty->assign('resultValoric', $resValoric);
	
	$out = $smarty->fetch( dirname(__FILE__) . DIRECTORY_SEPARATOR . 'load_graph.tpl');
	echo $out;
	
	