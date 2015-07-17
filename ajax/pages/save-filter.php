<?php

	Ajax::requireLoggedIn();
	
	$quizHash = isset($_GET['quiz']) ? $_GET['quiz'] : null;
	
	$quiz = Quiz::getByHash($quizHash);
	
	if (empty($quiz->id) || !$quiz->hasAccess()){
		Ajax::outputError('You don\'t have access to this quiz');
	}
	
	$filter = new Filter();
	
	$saveType = 'insert';
	
	if (isset($_GET['filter_id']) && !empty($_GET['filter_id'])){
		$filter->readId($_GET['filter_id']);
		if (empty($filter->id)){
			Ajax::outputError('Invalid filter');
		}
		
		if ($filter->quiz_id != $quiz->id){
			Ajax::outputError('Invalid filter');
		}
		$saveType = 'update';
	}
	
	$data = new stdClass;
	$data->question = isset($_GET['question']) ? $_GET['question'] : null;
	$data->answer = isset($_GET['answer']) ? $_GET['answer'] : null;
	
	if (!empty($_GET['name'])){
		$filter->name = $_GET['name'];
	}
	$filter->setData($data);
	$filter->quiz_id = $quiz->id;
	$filter->save();
	
	$out = new stdClass;
	$out->name = $filter->name;
	$out->id = $filter->id;
	$out->saveType = $saveType;
	
	Ajax::output($out);