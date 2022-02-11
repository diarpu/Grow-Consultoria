<?php

// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'Exception.php';
require 'PHPMailer.php';
require 'SMTP.php';

$asunto = $_POST['subject'];
$nombre = $_POST['name'];
$tel = $_POST['phone'];
$ciudad = $_POST['city'];
$mensaje = $_POST['message'];

$mail = new PHPMailer();

//Server settings
$mail->SMTPDebug = 0; 
$mail->isSMTP();
$mail->Host = 'mail.gruva.net';
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'consultoriadenegocios@gruva.net';                 // SMTP username
$mail->Password = 'Gruva@123456';                           // SMTP password
$mail->SMTPSecure = 'tls';
$mail->Port = 25;
// $mail->Port = 587;                                   // TCP port to connect to
$mail->CharSet = 'UTF8';

$mail->setFrom('consultoriadenegocios@gruva.net', 'Grow');  // Host
$mail->addAddress('danilhamsik@gmail.com');
$mail->addReplyTo($email);

    //Content
$mail->isHTML(true);
$mail->Subject = $asunto;

$mailContent = "Nombre: ". $nombre ."<br><br>"."Número: ". $tel."<br><br>"."Ciudad: ". $ciudad."<br><br>"."Mensaje: ". $mensaje;

$mail->Body    = $mailContent ;

$mail->send()

?>