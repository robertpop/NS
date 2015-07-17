<?php

	$sessionId = $_GET['sessionId'];	
	Ajax::output(SnacktoolsUserApi::login($sessionId));