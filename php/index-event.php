<?php
    $emailTemplate = "./index-event-email.php"; // used an external HTML template to fill out the structure

    $lang = '';  // initialize variables to use throughout the program
    $fullName = '';
    $phoneNumber = '';
    $subject = '';
    
    if(isset($_POST["event-one-submit"]) || isset($_POST["event-one-submit-spanish"]) ){ // these if statements are designed to check which event form was submitted, and in which language, and then the appropriate name and phone number is retrieved from that form, and the corresponding subject is declared based on the event
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
    
    if(isset($_POST["event-one-submit"]) || isset($_POST["event-two-submit"]) || isset($_POST["event-three-submit"]) || isset($_POST["event-four-submit"])){ // check if any of the four possible submits were submitted from the english version, if not then it must've been the spanish version
        $lang = 'english';
    }else{
        $lang = 'spanish';
    }
    
    $fillInArray = array( // this array associates the structures from the email template with the variables that come from the form that was submitted
        "{NAME}" => $fullName,
        "{PHONE}" => $phoneNumber
    );
    if(file_exists($emailTemplate)){  // if the email template exists, we will use the "file_get_contents" function to retrieve the file and place them in an email message string
        $emailMessage = file_get_contents($emailTemplate);
    }
    foreach(array_keys($fillInArray) as $key){ // for each of the keys in the array above, we will use the "str_replace" function to replace the template strings from the email template with the appropriate array keys
        if(strlen($key) > 2){
            $emailMessage = str_replace($key, $fillInArray[$key], $emailMessage);
        }
    }

    $to = "asierra010@gmail.com"; // the email recepient

    $headers = "From: RJT Website <rjtcoing@gator3227.hostgator.com>\r\n"; // headers for the file and mask the sender email as the name "RJT Website"
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n"; // needed in order to use HTML when sending email
    
    if($lang == "english"){ // check which language submit was sent form to redirect accordingly
        if(mail($to, $subject, $emailMessage, $headers)){ // use the mail function to send the email to the specified email with the corresponding arguments
            header('Location: https://www.rjtcontracting.com/success.html'); // if the email was sent successfully then we will redirect to a confirmation page 
        } else {
            header('Location: https://www.rjtcontracting.com/error.html'); // if the email did not send successfully then we redirect to an error page
        }
    } else {
        if(mail($to, $subject, $emailMessage, $headers)){
            header('Location: https://www.rjtcontracting.com/success-spa.html');
        } else {
            header('Location: https://www.rjtcontracting.com/error-spa.html');
        }
    }
    
?>
