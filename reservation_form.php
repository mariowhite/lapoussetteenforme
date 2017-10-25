<?php

date_default_timezone_set("America/New_York");

//Prefedined Variables  
// Filled details will be sent to this Email ID
//$to = "mariowhite2007@gmail.com";
$to = "info@lapoussetteenforme.ca";

// Email Subject
$subject = "Reservation Details from your website.";


// This IF condition is for improving security  and Prevent Direct Access to the Mail Script.
if ($_POST) {

// Collect POST data from form
    $dt = stripslashes($_POST['dt']);
    $name = stripslashes($_POST['name']);
    $email = stripslashes($_POST['email']);
    $phone = stripslashes($_POST['phone']);
    $message = stripslashes($_POST['message']);

// Collecting all content in HTML Table
    $content = '<table width="100%">
<tr><td  align "center"><b>Reservation Details</b></td></tr>
<tr><td>Date & Time:</td><td> ' . $dt . '</td></tr>
<tr><td>Name:</td><td> ' . $name . '</td></tr>
<tr><td>Email:</td><td> ' . $email . ' </td></tr>
<tr><td>Subject:</td><td> ' . $phone . '</td></tr>
<tr><td>Message:</td> <td> ' . $message . '</td></tr>
<tr><td>Sent On:</td> <td> ' . date('d/m/Y H:i:s'). ';</td></tr>
</table> ';


// Define email variables
    $headers = "From:" .$name." <". $email ."> ". "\r\n";
    $headers .= "Reply-to:" . $email . "\r\n";
    $headers .= 'Content-type: text/html; charset=UTF-8';

    if (!empty($email) && !empty($content)) {

// Sending Email 
        if (mail($to, $subject, $content, $headers)) {
            print "Merci, nous reviendrons vers vous sous peu.<br>";
            return true;
        } else {
            print "Une erreur est survenue lors de l'envoi de votre e-mail, s'il vous plaît essayer à nouveau plus tard.";
            return false;
        }
    } else {
        print "Une erreur est survenue lors de l'envoi de votre e-mail, s'il vous plaît essayer à nouveau plus tard.";
        return false;
    }
}