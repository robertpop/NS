<?php

	Ajax::requireLoggedIn();
	
	$id = isset($_GET['id']) ? $_GET['id'] : null;
	$quiz = new Quiz($id);
	
	if (empty($quiz->id) || !$quiz->hasAccess()){
		Ajax::outputError('You don\'t have access to this quiz');
	}
	
	$newQuiz = $quiz->duplicate();
	$newQuiz->dateFormated = date("F j, Y", strtotime($newQuiz->date_created));
	$newQuiz->name_short = $newQuiz->getShortName(45);
	Ajax::output($newQuiz);