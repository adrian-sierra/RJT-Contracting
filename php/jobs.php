<?php
    $emailTemplate = "./jobs-email.php"; // used an external HTML template to fill out the structure
    
    $lang = '';    // initialize variables to use throughout the program
    $flag = 0;
    
    if(isset($_POST["job-form-english"])){ // if the form was submitted in the english option, act and set variables accordingly
        $lang = "english";
        $flag = 1;
    }else if(isset($_POST["job-form-spanish"])){ // if the form was submitted in the spanish option, act and set variables accordingly
        $lang = "spanish";
        $flag = 1;
    }
    
    $workStringTemplate = array( "work-company-", "work-role-", "work-phone-", "work-address-", "work-zip-", "work-start-", "work-end-"); // this template is used for multiple work experience forms that are submitted 
    $workEmailTemplate = array("WORK_COMPANY_", "WORK_ROLE_", "WORK_PHONE_", "WORK_ADDRESS_", "WORK_ZIP_", "WORK_START_", "WORK_END_"); // this template is also used for multiple work experience forms, but this deals with the email template
    $workEmailArray = array(array()); // this array will hold the appropriate email templates that will then be replaced with the corresponding submitted data for each of the total work experiences that were used
    $workInputFields = count($workStringTemplate);

    $referenceStringTemplate = array( "references-first-name-", "references-middle-name-", "references-last-name-", "references-phone-", "references-email-", "references-years-");
    $referenceEmailTemplate = array("REFERENCE_NAME_", "REFERENCE_PHONE_", "REFERENCE_EMAIL_", "REFERENCE_YEARS_");
    $referenceEmailArray = array(array()); // this array will hold the appropriate email templates that will then be replaced with the corresponding submitted data for each of the total references that were used
    
    if($flag){ // if a form was submitted, regardless of language
        $totalWork = $_POST["work-experience-value"]; // these two variable retrieve how many work experience and reference forms were submitted
        $totalReferences = $_POST["references-value"];
        

        // these variables come from the form that was submitted and are based on their corresponding names
        //personal info
        $firstName = $_POST["first-name"]; 
        $middleName = $_POST["middle-name"];
        $lastName = $_POST["last-name"];
        $phoneNumber = $_POST["phone-number"];
        $email = $_POST["email"];

        //date of birth
        $dateOfBirth = $_POST["dob"];

        //address
        $streetAddress = $_POST["street-address"];
        $addressUnit = $_POST["unit"];
        $streetZip = $_POST["street-zip"];

        //job position
        $jobPosition = $_POST["position"];

        //pay desired
        $pay = $_POST["pay"];

        //message
        $message = $_POST["message"];
        
        $today = date("Y-m-d"); // these two lines simply calculate a person's age based on the "DOB" input field
        $age = date_diff(date_create($dateOfBirth), date_create($today))->format('%y');


        $fillInArray = array( // this array associates the structures from the email template with the variables that come from the form that was submitted
            "{NAME}" => $firstName." ".$middleName." ".$lastName,
            "{PERSONAL_PHONE}" => $phoneNumber,
            "{PERSONAL_EMAIL}" => $email,
            "{DATE_OF_BIRTH}" => $dateOfBirth,
            "{AGE}" => $age,
            "{STREET_ADDRESS}" => $streetAddress,
            "{STREET_UNIT}" => $addressUnit,
            "{STREET_ZIP}" => $streetZip,
            "{JOB_POSITION}" => $jobPosition,
            "{PAY}" => $pay,
            "{MESSAGE}" => $message
        );
        
        for($i = 1; $i <= 3; $i++){ // this loop will fill out the work experience forms with the appropriate email template and numbers
            for ($t = 0; $t < $workInputFields; $t++){
                $workEmailArray[$i-1][$t] = "{".$workEmailTemplate[$t].$i."}";
            }
        }
        for($i = 1; $i <= 3; $i++){ // this loop will fill out the references forms with the appropriate email template and numbers
            for ($t = 0; $t < count($referenceEmailTemplate); $t++){
                $referenceEmailArray[$i-1][$t] = "{".$referenceEmailTemplate[$t].$i."}";
            }
        }
        if(file_exists($emailTemplate)){  // if the email template exists, we will use the "file_get_contents" function to retrieve the file and place them in an email message string
            $emailMessage = file_get_contents($emailTemplate);
        }
        foreach(array_keys($fillInArray) as $key){  // for each of the keys in the array above, we will use the "str_replace" function to replace the template strings from the email template with the appropriate array keys
            if(strlen($key) > 2){
                $emailMessage = str_replace($key, $fillInArray[$key], $emailMessage);
            }
        }
        for ($i = 1; $i < $totalWork + 1; $i++) { // this loop will go through the email message string and will replace the work experience template with the data that was submitted 
            for ($t = 0; $t < $workInputFields; $t++){
                $emailMessage = str_replace($workEmailArray[$i-1][$t], $_POST[$workStringTemplate[$t].$i], $emailMessage);
            }
        }
        for ($i = 1; $i < $totalReferences + 1; $i++) {  // this loop will go through the email message string and will replace the reference template with the data that was submitted 
            for ($t = 0; $t < count($referenceEmailTemplate); $t++){
                if($t == 0){ // these if statements simply deal with the offset of combining three pieces of data into a single email template
                    $nameKeyField = $_POST[$referenceStringTemplate[0].$i]." ".$_POST[$referenceStringTemplate[1].$i]." ".$_POST[$referenceStringTemplate[2].$i];
                    $emailMessage = str_replace($referenceEmailArray[$i-1][$t], $nameKeyField, $emailMessage);
                } else {
                    $emailMessage = str_replace($referenceEmailArray[$i-1][$t], $_POST[$referenceStringTemplate[$t+2].$i], $emailMessage);
                }
            }
        }
        for ($i = $totalWork + 1; $i <= 3; $i++) { // this loop and the next goes through the email templates that were not filled in with data because the user did not choose to utilize all of the forms available to them and fills them in with an empty space instead
            for ($t = 0; $t < $workInputFields; $t++){
                $emailMessage = str_replace($workEmailArray[$i-1][$t], " ", $emailMessage);
            }
        }
        for ($i = $totalReferences + 1; $i <= 3; $i++) {
            for ($t = 0; $t < count($referenceEmailTemplate); $t++){
                $emailMessage = str_replace($referenceEmailArray[$i-1][$t], " ", $emailMessage);
            }
        }

        //$to = "rjtcontracting21@gmail.com";
        $to = "asierra010@gmail.com";  // the email recepient
        $subject = "Application Form Submission"; // subject line
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
    }
?>
