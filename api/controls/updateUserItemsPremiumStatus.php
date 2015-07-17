<?php

if (empty($req['user_id'])){
	$api->outputError(30);
	exit;
}

$serverNameForConfig = $_SERVER['SERVER_NAME'];

if (substr($serverNameForConfig, 0, 4) == 'www.'){
	$serverNameForConfig = substr($serverNameForConfig, 4);
}

$cmd = "php -f /home/{$config->domainRoot}/public_html/crons/subscription_unlock.php {$serverNameForConfig} {$req['user_id']} > /dev/null &";
exec($cmd);

$api->outputNotice(20, array('service_status' => 'started'));
