<?php
    $emailTemplate = "./contact-email.php"; // used an external HTML template to fill out the structure

    //$method = $_SERVER['REQUEST_METHOD'];
    $lang = '';    // initialize variables to use throughout the program
    $flag = 0;
    
    if(isset($_POST["contact-form-english"])){ // if the form was submitted in the english option, act and set variables accordingly
        $lang = "english";
        $flag = 1;
    }else if(isset($_POST["contact-form-spanish"])){ // if the form was submitted in the spanish option, act and set variables accordingly
        $lang = "spanish"; 
        $flag = 1;
    }
    
    if($flag){ // if a form was submitted, regardless of language
        $firstName = $_POST["first-name"]; // these variables come from the form that was submitted and are based on their corresponding names
        $middleName = $_POST["middle-name"];
        $lastName = $_POST["last-name"];
        $phoneNumber = $_POST["phone-number"];
        $email = $_POST["email"];
        $message = $_POST["message"];

        $to = "asierra010@gmail.com"; // the email recepient
        $subject = "Contact Form Submission"; // subject line

        $fillInArray = array( // this array associates the structures from the email template with the variables that come from the form that was submitted
            "{NAME}" => $firstName." ".$middleName." ".$lastName,
            "{PERSONAL_PHONE}" => $phoneNumber,
            "{PERSONAL_EMAIL}" => $email,
            "{MESSAGE}" => $message
        );

        if(file_exists($emailTemplate)){ // if the email template exists, we will use the "file_get_contents" function to retrieve the file and place them in an email message string
            $emailMessage = file_get_contents($emailTemplate);
        }
        foreach(array_keys($fillInArray) as $key){ // for each of the keys in the array above, we will use the "str_replace" function to replace the template strings from the email template with the appropriate array keys
            if(strlen($key) > 2){
                $emailMessage = str_replace($key, $fillInArray[$key], $emailMessage);
            }
        }

        $headers = "From: RJT Website <rjtcoing@gator3227.hostgator.com>\r\n"; // headers for the file and mask the sender email as the name "RJT Website"
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n"; // needed in order to use HTML when sending email
        
        if($lang == "english"){
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
    }
    
?>
