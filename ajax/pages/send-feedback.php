<?php

    Ajax::requireLoggedIn();

    $message = isset($_GET['message']) ? $_GET['message'] : '';
    if (!isset($message) || empty($message)) {
        Ajax::outputError("Empty message!");
    }
	
	$hash = isset($_GET['hash']) ? $_GET['hash'] : '';
    if (!isset($hash) || empty($hash)) {
        Ajax::outputError("Empty hash!");
    }
   
    $user = User::getLogged();
	$notification = Notify::getByHash($hash);

    $feedback = new UserFeedback();
    $feedback->user_id = $user->id;
    $feedback->message = $message;
    $feedback->date_added = getDateMysql();
    $feedback->ip = $_SERVER['REMOTE_ADDR'];
	$feedback->notification_id = $notification->id;
    $feedback->save();
    
    $message = '<p>' . nl2br(str_replace('  ', ' &nbsp;', $message)) . '</p><hr/>';
    $message .= '<br/><h4>User info</h4>';
    $message .= '<span>Screen name: ' . $user->screenname . '</span>';
    $message .= '<br/><span>User email: ' . $user->email . '</span>';
    $message .= '<br/><span>Account id: ' . $user->id . '</span>';
	$message .= '<br/><span>Notification ID: ' . $notification->id . '</span>';
	$message .= '<br/><span>Notification hash: ' . $notification->hash . '</span>';
	$message .= '<br/><span>Notification name: ' . $notification->name . '</span>';
	$message .= '<br/><span>Notification parent hash: ' . $notification->parent_hash . '</span>';
    
    $mail = new PHPMailer();
    $mail->CharSet = "UTF-8";
    $mail->AddAddress($config->mail->feedbackEmail);
    $mail->IsHTML(true);
    $mail->Subject = 'NotifySnack feedback';
    $mail->Body = $message;
    
    $mail->Send();