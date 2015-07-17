<?php

	Ajax::requireLoggedIn();
	
	$id = isset($_GET['id']) ? $_GET['id'] : null;
	$color = isset($_GET['color']) ? $_GET['color'] : Quiz::DEFAULT_CUSTOMIZE_BGCOLOR;
	$quiz = new Quiz($id);
	
	$match = '/^[a-f0-9]{6}$/i';
	
	if(!preg_match($match, $color)){
		Ajax::outputError('Invalid color');
	}
	
	if (empty($quiz->id) || !$quiz->hasAccess()){
		Ajax::outputError('You don\'t have access to this quiz');
	}
	
	$quiz->customize_bgcolor = $color;
	$quiz->save();