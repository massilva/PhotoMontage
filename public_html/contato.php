<?php
       
    if(isSet($_POST['name'],$_POST['email'],$_POST['message']))
    {
        
       $name = trim(strip_tags($_POST['name']));
       $email = trim(strip_tags($_POST['email']));
       $message= htmlentities($_POST['message']);

       $subject = "Contato MAHDE Develops";
       $to = 'mahdeedevelops@gmail.com';

       $body = <<<HTML
       $name, enviou a mensagem:
               
       $message
HTML;

       $headers = "From: $email\r\n";
       $headers .= "Content-type: text/html\r\n";

       // Enviando Email
       mail($to, $subject, $body, $headers);
       
        // Redirecionando
        header('Location: http://www.develops6.com/502.html');
   
    }
    
    // Redirecionando
    header('Location: http://www.develops6.com/404.html');
    
?>
