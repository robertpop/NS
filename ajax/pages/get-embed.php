<?php

	$id = isset($_GET['item']) ? $_GET['item'] : null;
        $snackws = isset($_GET['snackws']) ? $_GET['snackws'] : null;
        
	//$premium = isset($_GET['premium']) && ($_GET['premium'] != 'false') ? true : false;
	$notify = new Notify($id);
	
	if (empty($notify->id)){
		Ajax::outputError('Invalid notification');
	}

        Ajax::output($notify->getEmbedBarJs($snackws));
