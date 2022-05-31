<?php
    $emailTemplate = "./index-event-email.php";

    $lang = '';
    $fullName = '';
    $phoneNumber = '';
    $subject = '';
    
    if(isset($_POST["event-one-submit"]) || isset($_POST["event-one-submit-spanish"]) ){
        $fullName = $_POST["event-1-name"];
        $phoneNumber = $_POST["event-1-phone"];
        $subject = "Event One Attendance";
    }
    else if(isset($_POST["event-two-submit"]) || isset($_POST["event-two-submit-spanish"])){
        $fullName = $_POST["event-2-name"];
        $phoneNumber = $_POST["event-2-phone"];
        $subject = "Event Two Attendance";
    } 
    else if(isset($_POST["event-three-submit"]) || isset($_POST["event-three-submit-spanish"])){
        $fullName = $_POST["event-3-name"];
        $phoneNumber = $_POST["event-3-phone"];
        $subject = "Event Three Attendance";
    } 
    else if(isset($_POST["event-four-submit"]) || isset($_POST["event-four-submit-spanish"])){
        $fullName = $_POST["event-4-name"];
        $phoneNumber = $_POST["event-4-phone"];
        $subject = "Event Four Attendance";
    }
    
    if(isset($_POST["event-one-submit"]) || isset($_POST["event-two-submit"]) || isset($_POST["event-three-submit"]) || isset($_POST["event-four-submit"])){
        $lang = 'english';
    }else{
        $lang = 'spanish';
    }
    
    $fillInArray = array(
        "{NAME}" => $fullName,
        "{PHONE}" => $phoneNumber
    );
    if(file_exists($emailTemplate)){
        $emailMessage = file_get_contents($emailTemplate);
    }
    foreach(array_keys($fillInArray) as $key){
        if(strlen($key) > 2){
            $emailMessage = str_replace($key, $fillInArray[$key], $emailMessage);
        }
    }

    $to = "asierra010@gmail.com";

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
    
?>