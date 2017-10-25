<?php

date_default_timezone_set("America/New_York");

//Prefedined Variables  

// Filled details will be sent to this Email ID
//$to = "mariowhite2007@gmail.com";
$to = "info@lapoussetteenforme.ca";

// Email Subject
$subject = "Contactez de votre site Web.";


// This IF condition is for improving security  and Prevent Direct Access to the Mail Script.
if ($_POST) {

// Collect POST data from form
    $name = stripslashes($_POST['name']);
    $email = stripslashes($_POST['email']);
    $phone = stripslashes($_POST['phone']);
    $message = stripslashes($_POST['message']);

// Collecting all content in HTML Table
    $content = '<table width="100%">
<tr><td  align "center"><b>Détails du contact</b></td></tr>
<tr><td>Prénom/Nom:</td><td> ' . $name . '</td></tr>
<tr><td>Courriel:</td><td> ' . $email . ' </td></tr>
<tr><td>Téléphone:</td><td> ' . $phone . '</td></tr>
<tr><td>Message:</td> <td> ' . $message . '</td></tr>
<tr><td>Date:</td> <td> ' . date('d/m/Y') . ' time: ' . time() . ';</td></tr>
</table> ';


// Define email variables
    $headers = "From:" . $email . "\r\n";
    $headers .= "Reply-to:" . $email . "\r\n";
    $headers .= 'Content-type: text/html; charset=UTF-8';

    if (!empty($email) && !empty($content)) {

// Sending Email 
        if (mail($to, $subject, $content, $headers)) {
            print "Merci, nous reviendrons vers vous sous peu.<br>";
            return true;
        } else {
            print "Certaines erreurs pour envoyer l'e-mail.(code: e001)";
            return false;
        }
    } else {
        print "Certaines erreurs pour envoyer l'e-mail.(code: e002)";
        return false;
    }
}
