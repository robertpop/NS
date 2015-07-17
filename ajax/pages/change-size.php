<?php

	Ajax::requireLoggedIn();
	
	$id = isset($_GET['id']) ? $_GET['id'] : null;
	$width = isset($_GET['width']) ? $_GET['width'] : 0;
	$height = isset($_GET['height']) ? $_GET['height'] : 0;
	
	$quiz = new Quiz($id);
	
	if (empty($quiz->id) || !$quiz->hasAccess()){
		Ajax::outputError('You don\'t have access to this quiz');
	}
	
	$quiz->width = $width;
	$quiz->height = $height;
	$quiz->save();