<?php

$hash = realEscapeString($_GET['hash']);
$mode = realEscapeString($_GET['mode']);

$res = Array();
$notify = new Notify;
$notify = $notify->getByHash($hash);

if ($mode == 'custom' && !empty($_GET['date1']) && !empty($_GET['date2'])) {
	$res['date1'] = date('Y-m-d', strtotime($_GET['date1']));
	$res['date2'] = date('Y-m-d', strtotime($_GET['date2']));
	if ($res['date1'] >= $res['date2']) {
		$res['date1'] = date('Y-m-d', strtotime('-30 days'));
		$res['date2'] = date('Y-m-d');
	}
	
} else if ($mode == 'alltime') {
	$res['date1'] = date('Y-m-d', strtotime($notify->date_created));
	$res['date2'] = date('Y-m-d');
	if ($res['date1'] >= $res['date2']) {
		$res['date1'] = date('Y-m-d', strtotime('-1 day'));
	}
	
} else { // last 30 days
	$res['date1'] = date('Y-m-d', strtotime('-30 days'));
	$res['date2'] = date('Y-m-d');
} 

$res['timestamp1'] = strtotime($res['date1']);
$res['timestamp2'] = strtotime($res['date2']);
$dateCreated = date('Y-m-d', strtotime($notify->date_created));
if ($dateCreated <= $res['date1']) {
	$days = ($res['timestamp2'] - $res['timestamp1'])/(60*60*24) + 1;
} else {
	$days = ($res['timestamp2'] - strtotime($dateCreated))/(60*60*24) + 1;
}

$days = ceil($days);

$res['index'] = 7;
if ($days <= 2) {
	$res['index'] = 1;
} else if ($days == 3) {
	$res['index'] = 2;
} else if ($days == 4 || $days == 7 || $days == 10) {
	$res['index'] = 3;
} else if ($days == 5 || $days == 9) {
	$res['index'] = 4;
} else if ($days == 6) {
	$res['index'] = 5;
}

$res['labels'] = array();
for ($j=1, $i=$res['timestamp1']; $i < $res['timestamp2'] && $j <= $res['index']; 
	$i += ($res['timestamp2']-$res['timestamp1'])/$res['index'], $j++)
{
	$res['labels'][$i] = date('M. j', $i);
}
$i = $res['timestamp2'];
$res['labels'][$i] = date('M. j', $i);


$statsData = SnacktoolsStatsApi::getItemStats($notify->hash, $res['date1'], $res['date2']);

$res['views'] = isset($statsData) ?  $statsData['totalViews'] : 0;
$res['avg'] = round($res['views'] / $days);

$d1 = date('d', strtotime($res['date1']));
$m1 = date('m', strtotime($res['date1']));
$y1 = date('Y', strtotime($res['date1']));
$d2 = date('d', strtotime($res['date2']));
$m2 = date('m', strtotime($res['date2']));
$y2 = date('Y', strtotime($res['date2']));

while (mktime(0, 0, 0, $m1, $d1, $y1) <= mktime(0, 0, 0, $m2, $d2, $y2)) {
	$t = mktime(0, 0, 0, $m1, $d1, $y1);
	$res['chart'][$t] = 0;
	$d1++;
}

if ($statsData && isset($statsData['stats'])){
	foreach ($statsData['stats'] as &$stat){
		$res['chart'][strtotime($stat['date'])] = $stat['views'];
	}
}

$max = max($res['chart']);
if ($max <= 1) {
	$res['indexY'] = 2;
} else if ($max <= 4) {
	$res['indexY'] = $max+1;
}
$res['maxY'] = $max; 

Ajax::output($res);
