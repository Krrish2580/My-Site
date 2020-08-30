<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $email_from = 'krrishgaihre@gmail.com';
    $email_subject = "New message Received"
    $email_body = "User Name: $name. \n".
                    "User Email: $visitor_email. \n".
                    "Subject: $subject. \n ".
                    "User message: $message.\n";

    $to = "sree.krishna2580@gmail.com";

    $headers = "From: $email_from \r\n";

    $headers .= "Reply_To: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: index.html");
?>