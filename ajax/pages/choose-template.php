<?php

	Ajax::requireLoggedIn();

	$hash = isset($_GET['item']) ? $_GET['item'] : null;
    $tempId = isset($_GET['template']) ? $_GET['template'] : null;

	$notify = Notify::getByHash($hash);

	if (empty($notify->id) || !$notify->hasAccess()){
        Ajax::outputError('You don\'t have access to this notification');
	}

	if (!$initData = $notify->getJSONContent()) {
        Ajax::output('Couldn\'t generate default JSON data!');
	}

    $initialData = json_decode($initData, true);

    $saved = Notify::getByHash($hash);

    $saved->flags |= Notify::FLAG_TEMPLATE_CHOSE;
    $saved->template_id = $tempId;

    $saved->save();

    $template = new Templates($tempId);
    $customize = new Customize($saved);

	if (!$xmlTemplate = $template->getXmlContent()){
            Ajax::outputError('Can\'t read template xml');
	}
    
    if (!$templateData = $customize->getDefaultData($xmlTemplate)){
        Ajax::outputError('Template data couldn\'t be parsed');
    }
    
    foreach ($initialData['configs']['params'] as $k => $i){
        if ($k != 'barStyle' && $k != 'barSymbol'){
            $templateData[$k] = $initialData['configs']['params'][$k];
        }
    }
	    
    // E nevoie de lista de barStyle si barSymbol din XML-ul de configurare a template-ului, astfel incat in
    // cazul unei teme custom sa se seteze barSymbol si barStyle ales de user doar daca tema curenta suporta
    // tipul de barStyle si barSymbol ales la o tema precedenta (cand se schimba tema).
    $templateParsedData = $template->getXmlContentParsed();
    if (isset($templateParsedData) && isset($templateParsedData['configs'])) {
        $barStyleOptionsList = $templateParsedData['configs']['categories']['category']['params']['subcatButtonStyle']['params']['barStyle']['options']['option'];
        $barSymbolOptionsList = $templateParsedData['configs']['categories']['category']['params']['subcatButtonStyle']['params']['barSymbol']['options']['option'];
        
        // Lista de barStyle pentru template-ul curent.
        $barStyleList = array_map(function ($item) {
            return $item['value'];
        }, $barStyleOptionsList);
        
        // Lista de barSymbol pentru template-ul curent.
        $barSymbolList = array_map(function ($item) {
            return $item['value'];
        }, $barSymbolOptionsList);
        
        if (isset($initialData['configs']['params']['customValues']) && !is_null($initialData['configs']['params']['customValues'])) {
            $customValues = $initialData['configs']['params']['customValues'];
        }
        
        // In cazul temei custom, trebuie sa se pastreze si parametri barStyle si barSymbol, dar numai atunci cand
        // noua tema suporta tipul de barStyle si barSymbol alese, altfel raman setarile default de barStyle si barSymbol.
        if ($templateData['theme'] == 'custom' && isset($customValues) && !is_null($customValues)) {
            if (isset($customValues['barStyle']) && !is_null($customValues['barStyle'])) {
                $customBarStyle = $customValues['barStyle'];
                if (isset($customBarStyle) && !is_null($customBarStyle) && in_array($customBarStyle, $barStyleList)) {
                    $templateData['barStyle'] = $customBarStyle;
                }
            }
            if (isset($customValues['barSymbol']) && !is_null($customValues['barSymbol'])) {
                $customBarSymbol = $customValues['barSymbol'];
                if (isset($customBarSymbol) && !is_null($customBarSymbol) && in_array($customBarSymbol, $barSymbolList)) {
                    $templateData['barSymbol'] = $customBarSymbol;
                }
            }
        }
    }
    
        //Ajax::outputError($templateData);
        /*
        $newTemplateData = array();
        if ($saved->haveChoseTemplate()){
            foreach ($templateData as $k => $i){
                if (isset($initialData['configs']['params'][$k])){
                    $newTemplateData[$k] = $initialData['configs']['params'][$k];
                } else {
                    $newTemplateData[$k] = $templateData[$k];
                }
            }
        } else {
            foreach ($templateData as $k => $i){
                $newTemplateData[$k] = $templateData[$k];
            }
        }
        */

    if (!$update = $saved->update_JSON($template, $templateData)){
        Ajax::outputError('JSON file couldn\'t be updated');
    }

    //!copy original messages
    $savedJSON = $saved->getJSONContent();
    $savedData = json_decode($savedJSON, true);
    $savedData['configs']['notify'] = $initialData['configs']['notify'];
	$savedData['configs']['displayRulesFlag'] = $initialData['configs']['displayRulesFlag'];
	$savedData['display_rules'] = $initialData['display_rules'];
    //$savedData['configs']['notify']['message'] = $initialData['configs']['notify']['message'];

    if (!$saved->updateJSON_Data($savedData)) {
        Ajax::outputError('JSON file couldn\'t be updated');
    }
    //!end

    $notif = Notify::getByHash($hash);

    if (!$reload = $notif->getJSONContent()) {
        Ajax::output('Can\'t reload json data!');
    }

    if ($xmlTemplate){
            Ajax::output($customize->getHtml($xmlTemplate, $reload));
	} else {
            Ajax::outputError('Internal server error. Try again later');
	}
