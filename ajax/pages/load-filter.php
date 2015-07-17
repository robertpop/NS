<?php

	$filterId = isset($_GET['filter']) ? intval($_GET['filter']) : null;

	$filter = new Filter($filterId);
	
	if (empty($filter->id)){
		Ajax::outputError('Invalid report');
	}
	
	Ajax::output($filter->getData());