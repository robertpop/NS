<?php

	$filterId = isset($_GET['filter']) ? intval($_GET['filter']) : null;

	$filter = new Filter($filterId);
	
	if (empty($filter->id)){
		Ajax::outputError('Invalid report');
	}
	
	$quiz = new Quiz($filter->quiz_id);
	
	if (!$quiz->hasAccess()){
		Ajax::outputError('Invalid report');
	}
	
	$filter->delete();
	
	Ajax::output($filterId);