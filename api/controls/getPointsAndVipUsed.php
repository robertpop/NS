<?php

if (empty($_POST['date_format_sql']) || empty($_POST['date_from']) || empty($_POST['date_to'])) {
	$api->outputError(30);
}
global $config;
$resPoints 	= array();
$resWidgets = array();
$dateFormatSQL = $_POST['date_format_sql'];

#points
$query = "SELECT COUNT(`id`) as `points`, `premium_type`, `type`, DATE_FORMAT(`date_premium`, '{$dateFormatSQL}') as `ord_date` FROM `quizzes`
		WHERE  DATE_FORMAT(`date_premium`, '%Y-%m-%d') >= '{$_POST['date_from']}' 
		AND DATE_FORMAT(`date_premium`, '%Y-%m-%d') <= '{$_POST['date_to']}' AND `flags` & " . Quiz::FLAG_PREMIUM . "  
		GROUP BY `ord_date`, `premium_type`, `type` ";

$db = new DbMySql($query);
while ($db->nextRecord()){
	$fieldValue = $db->f('points');
	$fieldValue = ($db->f('type') == 'survey') ? $fieldValue * $config->premium['survey']['points'] : $fieldValue * $config->premium['others']['points'];
	if ($db->f('premium_type') == 'points') {
		$resPoints[$db->f('ord_date')]['used_points'] = isset($resPoints[$db->f('ord_date')]['used_points']) ? $resPoints[$db->f('ord_date')]['used_points'] + $fieldValue : $fieldValue;
		$resPoints[$db->f('ord_date')]['total_used_points'] = isset($resPoints[$db->f('ord_date')]['total_used_points']) ? $resPoints[$db->f('ord_date')]['total_used_points'] + $fieldValue : $fieldValue;
	} else if ($db->f('premium_type') == 'subscription') {
		$resPoints[$db->f('ord_date')]['vip_used_points'] = isset($resPoints[$db->f('ord_date')]['vip_used_points']) ? $resPoints[$db->f('ord_date')]['vip_used_points'] + $fieldValue : $fieldValue;
		$resPoints[$db->f('ord_date')]['total_used_points'] = isset($resPoints[$db->f('ord_date')]['total_used_points']) ? $resPoints[$db->f('ord_date')]['total_used_points'] + $fieldValue : $fieldValue;
	}
}


#collections
#free
$query = "SELECT COUNT(`id`) AS `free_widgets`, DATE_FORMAT(`date_created`, '{$dateFormatSQL}') as `ord_date` FROM `quizzes`
		WHERE  DATE_FORMAT(`date_created`, '%Y-%m-%d') >= '{$_POST['date_from']}' 
		AND DATE_FORMAT(`date_created`, '%Y-%m-%d') <= '{$_POST['date_to']}' AND NOT(`flags` & " . Quiz::FLAG_PREMIUM . ")
		GROUP BY `ord_date` ";
$db = new DbMySql($query);
while ($db->nextRecord()){
	$fieldValue = $db->f('free_widgets');
	$resWidgets[$db->f('ord_date')]['free_widgets'] = isset($resWidgets[$db->f('ord_date')]['free_widgets']) ? $resWidgets[$db->f('ord_date')]['free_widgets'] + $fieldValue : $fieldValue;
	$resWidgets[$db->f('ord_date')]['total_widgets'] = isset($resWidgets[$db->f('ord_date')]['total_widgets']) ? $resWidgets[$db->f('ord_date')]['free_widgets'] + $fieldValue : $fieldValue;
}

#points
$query = "SELECT COUNT(`id`) AS `points_widgets`, DATE_FORMAT(`date_premium`, '{$dateFormatSQL}') as `ord_date` FROM `quizzes`
		WHERE  DATE_FORMAT(`date_premium`, '%Y-%m-%d') >= '{$_POST['date_from']}' 
		AND DATE_FORMAT(`date_premium`, '%Y-%m-%d') <= '{$_POST['date_to']}' AND `flags` & " . Quiz::FLAG_PREMIUM . "  AND  `premium_type` = 'points'  
		GROUP BY `ord_date` ";
$db = new DbMySql($query);
while ($db->nextRecord()){
	$fieldValue = $db->f('points_widgets');
	$resWidgets[$db->f('ord_date')]['points_widgets'] = isset($resWidgets[$db->f('ord_date')]['points_widgets']) ? $resWidgets[$db->f('ord_date')]['points_widgets'] + $fieldValue : $fieldValue;
	$resWidgets[$db->f('ord_date')]['total_widgets'] = isset($resWidgets[$db->f('ord_date')]['total_widgets']) ? $resWidgets[$db->f('ord_date')]['total_widgets'] + $fieldValue : $fieldValue;
}

#vip
$query = "SELECT COUNT(`id`) AS `vip_widgets`, DATE_FORMAT(`date_premium`, '{$dateFormatSQL}') as `ord_date` FROM `quizzes`
		WHERE  DATE_FORMAT(`date_premium`, '%Y-%m-%d') >= '{$_POST['date_from']}' 
		AND DATE_FORMAT(`date_premium`, '%Y-%m-%d') <= '{$_POST['date_to']}' AND  `flags` & " . Quiz::FLAG_PREMIUM . "  AND  `premium_type` = 'subscription'  
		GROUP BY `ord_date` ";
$db = new DbMySql($query);
while ($db->nextRecord()){
	$fieldValue = $db->f('vip_widgets');
	$resWidgets[$db->f('ord_date')]['vip_widgets'] = isset($resWidgets[$db->f('ord_date')]['vip_widgets']) ? $resWidgets[$db->f('ord_date')]['vip_widgets'] + $fieldValue : $fieldValue;
	$resWidgets[$db->f('ord_date')]['total_widgets'] = isset($resWidgets[$db->f('ord_date')]['total_widgets']) ? $resWidgets[$db->f('ord_date')]['total_widgets'] + $fieldValue : $fieldValue;
}



$xml = new XmlBuilder;
$xml->Push('response');
{
	$xml->Element('code',	200);
	$xml->Element('status',	ServMessages::getMessage(20));
		foreach($resPoints as $date=>$result){
			$xml->Push('results_points');
				$xml->Element('date', $date);
				$xml->Element('used_points', isset($result['used_points']) ? $result['used_points'] : 0);
				$xml->Element('vip_used_points', isset($result['vip_used_points']) ? $result['vip_used_points'] : 0);
				$xml->Element('total_used_points', isset($result['total_used_points']) ? $result['total_used_points'] : 0);		
			$xml->Pop('results_points');
		}
	
		foreach($resWidgets as $date=>$result){
			$xml->Push('results_widgets');
				$xml->Element('date', $date);
				$xml->Element('vip_widgets', isset($result['vip_widgets']) ? $result['vip_widgets'] : 0);
				$xml->Element('points_widgets', isset($result['points_widgets']) ? $result['points_widgets'] : 0);
				$xml->Element('free_widgets', isset($result['free_widgets']) ? $result['free_widgets'] : 0);
				$xml->Element('total_widgets', isset($result['total_widgets']) ? $result['total_widgets'] : 0);
			$xml->Pop('results_widgets');
		}
}
$xml->Pop('response');
// Output xml
$api->outputXML($xml->GetXML());


