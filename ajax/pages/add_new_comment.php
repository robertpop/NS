<?php

	if (!isset($_POST['data']) || empty($_POST['data'])){
		Ajax::outputError('Bad request');
	}
	
	parse_str($_POST['data'], $data);
	
	if (empty($data['name'])){
		$data['name'] = 'anonymous';
	}
	
	if (empty($data['email'])){
		$data['email'] = 'anonymous';
	}
	elseif (!valid_email($data['email'])){
		Ajax::outputError('Please enter a valid email address.');
	}
	
	if (empty($data['comment'])){
		Ajax::outputError('Please enter your comment.');
	}
	
	if (isset($_SESSION['time_between_albums'])){
		if (($_SESSION['time_between_albums'] + QuizComment::TIME_BETWEEN_COMMENTS) > time()){
			Ajax::outputError('You are posting comments too quickly. Slow down.');
		}
	}
	
	$quiz = new Quiz($data['quiz_id']);
	
	if (empty($quiz->id)){
		Ajax::outputError('Internal error');
	}
	
	$comment = new QuizComment;
	$comment->quiz_id = $data['quiz_id'];
	$comment->name = $data['name'];
	$comment->email = $data['email'];
	$comment->website = $data['website'];
	$comment->comment = $data['comment'];
	$comment->ip = $_SERVER['REMOTE_ADDR'];
	$comment->date = $comment->now();
	if (User::isLogged()){
		if (User::getLogged()->id == $quiz->user_id){
			$comment->owner = 1;
		}
	}
	$comment->save();
	
	$_SESSION['time_between_albums'] = time();
	
	$out = new stdClass();
	$out->id = $comment->id;
	$out->date = $comment->getDateFormated();
	$out->name = $comment->getDisplayName(false);
	$out->comment = $comment->getDisplayComment();
	
	Ajax::output($out);
	
	