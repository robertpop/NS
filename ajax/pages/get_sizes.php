<?php

	$smarty = Application::getSmarty('ajax/templates', 'ajax/templates_c');
	
	$width = isset($_GET['width']) ? $_GET['width'] : 0;
	$height = isset($_GET['height']) ? $_GET['height'] : 0;

	$sizes = QuizSize::getAllSizes();
	$maxSize = QuizSize::getMax($sizes);
	
	$smarty->assign('sizes', $sizes);
	$smarty->assign('width', $width);
	$smarty->assign('height', $height);
	
	$smarty->assign('widgetMaxWidth', Settings::getValueByName('widget_max_width'));
	$smarty->assign('widgetMinWidth', Settings::getValueByName('widget_min_width'));
	$smarty->assign('widgetMaxHeight', Settings::getValueByName('widget_max_height'));
	$smarty->assign('widgetMinHeight', Settings::getValueByName('widget_min_height'));
	
	Ajax::output($smarty->fetch('get_sizes.tpl'));