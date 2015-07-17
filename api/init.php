<?php

	define('APPLICATION_PATH', dirname(dirname(__FILE__)));
	define('INCLUDE_PATH', APPLICATION_PATH . DIRECTORY_SEPARATOR . 'include');
	ini_set('default_charset', 'UTF-8');
	date_default_timezone_set('America/Los_Angeles');
	
	include APPLICATION_PATH . "/include/lib/core/Config.php";
	$config = new Config;
	
	require_once APPLICATION_PATH . DIRECTORY_SEPARATOR . 'config' . DIRECTORY_SEPARATOR . 'general.php';
	
	require_once INCLUDE_PATH . DIRECTORY_SEPARATOR . 'lib' . DIRECTORY_SEPARATOR . 'functions.php';	
		
	if (!isset($_SERVER['SERVER_NAME'])){		
	    $api->outputError(60);
	}	
						
	$serverNameForConfig = $_SERVER['SERVER_NAME'];
	
	if (substr($serverNameForConfig, 0, 4) == 'www.'){
		$serverNameForConfig = substr($serverNameForConfig, 4);
	}
	
	$pathToConfigFile = APPLICATION_PATH . DIRECTORY_SEPARATOR . 'config' . DIRECTORY_SEPARATOR .
						$serverNameForConfig . DIRECTORY_SEPARATOR . 'config.php';

	if (!file_exists($pathToConfigFile)){		
	     $api->outputError(60);
	}
	
	require_once $pathToConfigFile;
	
	if(empty($config->absolute_path)) {
	    $config->absolute_path = APPLICATION_PATH;
	}
	
	include APPLICATION_PATH . "/include/lib/core/Application.php";
	spl_autoload_register(array('Application', 'loadClass'));
	
	$api = new ServAPI;
	$auth = new ServSSC;

	if (strtoupper($_SERVER['REQUEST_METHOD'] == 'POST')){
	    $req = & $_POST;
	} else {
	    $req = & $_GET;	
	}   
