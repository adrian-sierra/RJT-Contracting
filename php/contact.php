<?php
    $emailTemplate = "./contact-email.php";

    //$method = $_SERVER['REQUEST_METHOD'];
    $lang = '';    
    $flag = 0;
    
    if(isset($_POST["contact-form-english"])){
        $lang = "english";
        $flag = 1;
    }else if(isset($_POST["contact-form-spanish"])){
        $lang = "spanish";
        $flag = 1;
    }
    
    if($flag){
        $firstName = $_POST["first-name"];
        $middleName = $_POST["middle-name"];
        $lastName = $_POST["last-name"];
        $phoneNumber = $_POST["phone-number"];
        $email = $_POST["email"];
        $message = $_POST["message"];

        $to = "asierra010@gmail.com";
        $subject = "Contact Form Submission";

        $fillInArray = array(
            "{NAME}" => $firstName." ".$middleName." ".$lastName,
            "{PERSONAL_PHONE}" => $phoneNumber,
            "{PERSONAL_EMAIL}" => $email,
            "{MESSAGE}" => $message
        );

        if(file_exists($emailTemplate)){
            $emailMessage = file_get_contents($emailTemplate);
        }
        foreach(array_keys($fillInArray) as $key){
            if(strlen($key) > 2){
                $emailMessage = str_replace($key, $fillInArray[$key], $emailMessage);
            }
        }

        $headers = "From: RJT Website <rjtcoing@gator3227.hostgator.com>\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
        
        if($lang == "english"){
            if(mail($to, $subject, $emailMessage, $headers)){
                header('Location: https://www.rjtcontracting.com/success.html');
            } else {
                header('Location: https://www.rjtcontracting.com/error.html');
            }
        } else {
            if(mail($to, $subject, $emailMessage, $headers)){
                header('Location: https://www.rjtcontracting.com/success-spa.html');
            } else {
                header('Location: https://www.rjtcontracting.com/error-spa.html');
            }
        }
    }
    
?>