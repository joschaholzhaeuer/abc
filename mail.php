<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$company = $_POST['company'];
$message = $_POST['message'];

$content="Von: $name \n Telefon: $phone \n Unternehmen: $company \n Nachricht: $message";
$to = "kontakt@albrechtholzhaeuer.de";
$subject = "Kontaktaufnahme Allgaeu-Beratung-Coaching";
$header = "Von: $email \r\n";


if( isset( $name, $email, $message ) ) {

    $result = mail( $to, $subject, $content, $header );

    if (!$result) {
        echo "Da ist leider etwas schief gelaufen!";
    } else {
        header('Location: kontaktaufnahme.html');
    }
}
?>