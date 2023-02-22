<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = "UTF-8";
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

$mail->setFrom('sample@test.com', 'Киборг убийца');
$mail->addAddress($_POST['email']);
$mail->Subject = "Вы подписаны на рассылку LEAD advisors!";

$body = '<h1> На это письмо не нужно отвечать! </h1>';

$mail->Body = $body;

if (!$mail->send()){
    $message = 'Ошибка!';
} else {
    $message = 'Отправлено успешно!';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);