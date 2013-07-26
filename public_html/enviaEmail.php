<?php
       
       $name = trim(strip_tags($_POST['name']));
       $email = trim(strip_tags($_POST['email']));
       $message= htmlentities($_POST['message']);

       
       $subject = "Contato Mahdee develops";
       $to = 'ba.elias@gmail.com';

       $body = <<<HTML
        $message
HTML;

       $headers = "From: $email\r\n";
       $headers .= "Content-type: text/html\r\n";

       // Enviando Email
       mail($to, $subject, $body, $headers);

       // Redirecionando
       header('Location: /develops6.com/public_html/');
?>
