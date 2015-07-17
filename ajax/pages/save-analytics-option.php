<?php
Ajax::requireLoggedIn();

$user = User::getLogged();
$request = new SnacktoolsRequest('is_premium');
$request->addParam('user_id', $user->id);
$response = $request->request();
$isUserPremium = ($response->data['premium'] == 1) ? true : false;

if (!$isUserPremium) exit();

$hash = isset($_POST['hash']) ? $_POST['hash'] : $_GET['hash'];

if (isset($_POST['awt'])) {
	$allowWidgetTracking = isset($_POST['awt']) ? $_POST['awt'] : $_GET['awt'];
}

$notify = Notify::getByHash($hash);

if (empty($notify->id) || !$notify->hasAccess()) {
    Ajax::outputError('You don\'t have access to this notification!');
}

if (!$json = $notify->getJSONContent()) {
    Ajax::output('Could not generate default json params!');
}

$params = json_decode($json, true);
if ($allowWidgetTracking == 'false') $params['configs']['allow_widget_tracking'] = 'false';
else if (isset($params['configs']['allow_widget_tracking'])) unset($params['configs']['allow_widget_tracking']);

if (!$notify->updateJSON_Data($params, false)) {
    Ajax::outputError('Internal server error! Try again later.');
} else {
	
    $output = new stdClass();
    $output->json = $params;
    Ajax::output($output);
}
?>