<?php
Ajax::requireLoggedIn();
$publish = false;
$hash = isset($_POST['hash']) ? $_POST['hash'] : $_GET['hash'];

$reloadConfig = isset($req['reloadConfig']) && $req['reloadConfig'] == 'true';

$publish = isset($req['publish']) && $req['publish'] == 'true';

if (isset($e['param'], $_POST['data'])) {
    $param = isset($_POST['param']) ? $_POST['param'] : $_GET['param'];
    $data = isset($_POST['data']) ? $_POST['data'] : $_GET['data'];
} elseif (isset($_POST['notifyData'])) {
    $texts = isset($_POST['notifyData']) ? $_POST['notifyData'] : $_GET['notifyData'];
} elseif (isset($_POST['theme'])) {
    $copyToCustom = false;
    $custom = false;
    $theme = isset($_POST['theme']) ? $_POST['theme'] : $_GET['theme'];
	if (isset($_POST['custom']) && $_POST['custom'] == 'true') {
        $copyToCustom = true;
        $custom = true;
    }
} elseif (isset($_POST['displayRules']) && (isset($_POST['displayRulesFlag']) && $_POST['displayRulesFlag'] == 'true')) {
	$displayRulesFlag = isset($_POST['displayRulesFlag']) ? $_POST['displayRulesFlag'] : $_GET['displayRulesFlag'];
    $rules = isset($_POST['displayRules']) ? $_POST['displayRules'] : $_GET['displayRules'];
} elseif (isset($_POST['displayRulesFlag']) && $_POST['displayRulesFlag'] != 'true') {
	$displayRulesFlag = 'false';
} elseif (isset($_POST['deleteRule']) && isset($_POST['displayRules'])) {
	$deleteRule = isset($_POST['deleteRule']) ? $_POST['deleteRule'] : $_GET['deleteRule'];
	$rules = isset($_POST['displayRules']) ? $_POST['displayRules'] : $_GET['displayRules'];
}

/*} elseif (isset($_POST['displayRulesFlag']) && $_POST['displayRulesFlag'] == 'true') {
	if (isset($_POST['displayRuleCondition']) && $_POST['displayRuleCondition'] != '' && isset($_POST['displayRuleTarget']) && $_POST['displayRuleTarget'] != '') {
		$displayRulesFlag = isset($_POST['displayRulesFlag']) ? $_POST['displayRulesFlag'] : $_GET['displayRulesFlag'];
		$displayRuleId = isset($_POST['displayRuleId']) ? $_POST['displayRuleId'] : $_GET['displayRuleId'];
		$displayRuleCondition = isset($_POST['displayRuleCondition']) ? $_POST['displayRuleCondition'] : $_GET['displayRuleCondition'];
		$displayRuleTarget = isset($_POST['displayRuleTarget']) ? $_POST['displayRuleTarget'] : $_GET['displayRuleTarget'];
		$displayRuleType = isset($_POST['displayRuleType']) ? $_POST['displayRuleType'] : $_GET['displayRuleType'];
	}
} elseif (isset($_POST['displayRulesFlag']) && $_POST['displayRulesFlag'] != 'true') {
		$displayRulesFlag = 'false';
} elseif (isset($_POST['deleteRule'])) {
	$deleteRule = isset($_POST['deleteRule']) ? $_POST['deleteRule'] : $_GET['deleteRule'];
	$displayRuleId = isset($_POST['displayRuleId']) ? $_POST['displayRuleId'] : $_GET['displayRuleId'];
}*/

$notify = Notify::getByHash($hash);

if (empty($notify->id) || !$notify->hasAccess()) {
    Ajax::outputError('You don\'t have access to this notification!');
}

if (!$json = $notify->getJSONContent()) {
    Ajax::output('Could not generate default json params!');
}

$params = json_decode($json, true);
$custom_items = array(
    'backgroundType',
    'backgroundGradient',
    'itemRounded',
    'barStyle',
    'messageColor',
    'linkColor',
    'itemFontFamily',
    'itemFontSize',
    'itemFontStyle',
    'textShadow',
    'itemShadow',
    'barSymbol',
    'itemBorder',
    'backgroundColor',
    'backgroundTone'
);

if (isset($param)) {
    if (is_array($data)) {
        $params['configs']['params'][$param] = $data;
    } else {
        $params['configs']['params'][$param] = stripslashes($data);
        if (in_array($param, $custom_items)) {
            $params['configs']['params']['theme'] = 'custom';
            $params['configs']['params']['customValues'][$param] = stripslashes($data);
        }
    }
} elseif (isset($theme)) {
    foreach ($theme as $k => $v) {
        $params['configs']['params'][$k] = stripslashes($v);
    }

    if(isset($theme['itemFontSize']) && isset($theme['itemFontSize'])){
        $params['configs']['params']['default']['itemFontSize'] = '';
    }

    //daca se schimba tema
    if(!$custom){
        unset($params['configs']['params']['default']);
        $params['configs']['params']['default']['linkColor'] = $params['configs']['params']['linkColor'];
        $params['configs']['params']['default']['itemFontSize'] = $params['configs']['params']['itemFontSize'];
    } else {
        $params['configs']['params']['theme'] = 'custom';
    }

    if ($copyToCustom && !$publish) {
        unset($params['configs']['params']['customValues']);
        $params['configs']['params']['customValues'] = $params['configs']['params'];
        // Din lista de customValues se vor scoate parametrii care nu tin de tema ci tin de template.
        if (isset($params['configs']['params']['customValues']['itemHeight'])) unset($params['configs']['params']['customValues']['itemHeight']);
        if (isset($params['configs']['params']['customValues']['itemShowDelay'])) unset($params['configs']['params']['customValues']['itemShowDelay']);
        if (isset($params['configs']['params']['customValues']['subHideDelay'])) unset($params['configs']['params']['customValues']['subHideDelay']);
        if (isset($params['configs']['params']['customValues']['itemPushing'])) unset($params['configs']['params']['customValues']['itemPushing']);
        if (isset($params['configs']['params']['customValues']['itemOntop'])) unset($params['configs']['params']['customValues']['itemOntop']);
        if (isset($params['configs']['params']['customValues']['itemUsebounce'])) unset($params['configs']['params']['customValues']['itemUsebounce']);
		if (isset($params['configs']['params']['customValues']['itemDismiss'])) unset($params['configs']['params']['customValues']['itemDismiss']);
		if (isset($params['configs']['params']['customValues']['itemBtnCollapse'])) unset($params['configs']['params']['customValues']['itemBtnCollapse']);
		if (isset($params['configs']['params']['customValues']['itemBottom'])) unset($params['configs']['params']['customValues']['itemBottom']);
        if (isset($params['configs']['params']['customValues']['itemButton'])) unset($params['configs']['params']['customValues']['itemButton']);
        if (isset($params['configs']['params']['customValues']['itemTarget'])) unset($params['configs']['params']['customValues']['itemTarget']);
        if (isset($params['configs']['params']['customValues']['itemMessageDelay'])) unset($params['configs']['params']['customValues']['itemMessageDelay']);
        if (isset($params['configs']['params']['customValues']['itemClosable'])) unset($params['configs']['params']['customValues']['itemClosable']);
        if (isset($params['configs']['params']['customValues']['itemOpenClosePosition'])) unset($params['configs']['params']['customValues']['itemOpenClosePosition']);
        if (isset($params['configs']['params']['customValues']['controlTabs'])) unset($params['configs']['params']['customValues']['controlTabs']);	
    }
	
} elseif (isset($texts)) {
    $params['configs']['notify'] = $texts;
    if ($texts['message_type'] == 'Twitter') {
        $params['configs']['params']['itemButton'] = 'false';
    } else {

    }
	
} elseif (isset($displayRulesFlag)) {
	if ($displayRulesFlag == 'true') {
		$params['configs']['displayRulesFlag'] = $displayRulesFlag;
		$params['display_rules'] = $rules;
	} else {
		$params['configs']['displayRulesFlag'] = 'false';
		unset($params['display_rules']);
	}
	
} elseif (isset($deleteRule)) {
	//delete rule line
	$params['display_rules'] = $rules;
	$params['display_rules'] = array_values($params['display_rules']);	
}
			
/*} elseif (isset($displayRulesFlag)) {
	if ($displayRulesFlag == 'true') {
		$params['configs']['displayRulesFlag'] = $displayRulesFlag;
		$params['display_rules'][$displayRuleId]['ruleCondition'] = $displayRuleCondition;
		$params['display_rules'][$displayRuleId]['ruleTarget'] = $displayRuleTarget;
		$params['display_rules'][$displayRuleId]['ruleType'] = $displayRuleType;
	} else {
		$params['configs']['displayRulesFlag'] = 'false';
		unset($params['display_rules']);
	}
*/			

/*} elseif (isset($deleteRule)) {
	//delete rule line
	unset($params['display_rules'][$displayRuleId]);
	$params['display_rules'] = array_values($params['display_rules']);	
}
*/
if (!$notify->updateJSON_Data($params, $publish)) {
    Ajax::outputError('Internal server error! Try again later.');
} else {

    if ($reloadConfig) {
        $thash = $params['configs']['template_hash'];
        $template = Templates::getByHash($thash);
        $customize = new Customize($notify);
        $xmlTemplate = $template->getXmlContent();
        if (!$reload = $notify->getJSONContent()) {
            Ajax::output('Can\'t reload json data!');
        }
    }

    $output = new stdClass();
    $output->json = $params;
	
    if ($reloadConfig) {
        $output->config_html = $customize->getHtml($xmlTemplate, $reload);
    }

    Ajax::output($output);
}
?>