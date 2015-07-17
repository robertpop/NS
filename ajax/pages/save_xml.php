<?php

	Ajax::requireLoggedIn();
	$request = isset($_POST) ? $_POST : $_GET;

	$quizId = isset($request['quiz']) ? $request['quiz'] : null;

	$quiz = new Quiz($quizId);
	
	if (empty($quiz->id) || !$quiz->hasAccess()){
		Ajax::outputError('You don\'t have access to this quiz');
	}
	
	if (!isset($request['data']) || empty($request['data'])){
		Ajax::outputError('Invalid data');
	}

	ignore_user_abort(true);
	set_time_limit(120);
	
	parse_str($request['data'], $data);
	
	#$quiz->customize($data);
	
	$template = new Templates($quiz->template_id);
	$xmlTemplate = gzdecode(file_get_contents($template->getXmlLink()));
	
	if (empty($xmlTemplate)){
		Ajax::outputError('Internal error: Cannot load template xml');
	}
	
	$customize = new Customize($quiz);
	$xmlTemplate = $customize->parsePost($xmlTemplate, $data);
	if ($quiz->actualizeParams($xmlTemplate)) {
		Ajax::output($quiz);
	} else {
		Ajax::outputError('Internal server error: Cannot save your quiz');
	}
