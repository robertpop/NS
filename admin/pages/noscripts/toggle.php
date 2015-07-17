<?php
	
	$c = new Noscripts($_GET['id']);
	$c->status = ($c->status == 1) ? 0 : 1;
	$c->save();
	
	Messages::addNotice('Code status updated!');
	
	jump('?page=noscripts');
	
	