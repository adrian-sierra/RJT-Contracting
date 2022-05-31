<?php
    $emailTemplate = "./jobs-email.php";
    
    $lang = '';    
    $flag = 0;
    
    if(isset($_POST["job-form-english"])){
        $lang = "english";
        $flag = 1;
    }else if(isset($_POST["job-form-spanish"])){
        $lang = "spanish";
        $flag = 1;
    }
    
    $workStringTemplate = array( "work-company-", "work-role-", "work-phone-", "work-address-", "work-zip-", "work-start-", "work-end-");
    $workEmailTemplate = array("WORK_COMPANY_", "WORK_ROLE_", "WORK_PHONE_", "WORK_ADDRESS_", "WORK_ZIP_", "WORK_START_", "WORK_END_");
    $workEmailArray = array(array());
    $workInputFields = count($workStringTemplate);

    $referenceStringTemplate = array( "references-first-name-", "references-middle-name-", "references-last-name-", "references-phone-", "references-email-", "references-years-");
    $referenceEmailTemplate = array("REFERENCE_NAME_", "REFERENCE_PHONE_", "REFERENCE_EMAIL_", "REFERENCE_YEARS_");
    $referenceEmailArray = array(array());
    
    if($flag){
        $totalWork = $_POST["work-experience-value"];
        $totalReferences = $_POST["references-value"];
        
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
        
        $today = date("Y-m-d");
        $age = date_diff(date_create($dateOfBirth), date_create($today))->format('%y');


        $fillInArray = array(
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
        
        for($i = 1; $i <= 3; $i++){
            for ($t = 0; $t < $workInputFields; $t++){
                $workEmailArray[$i-1][$t] = "{".$workEmailTemplate[$t].$i."}";
            }
        }
        for($i = 1; $i <= 3; $i++){
            for ($t = 0; $t < count($referenceEmailTemplate); $t++){
                $referenceEmailArray[$i-1][$t] = "{".$referenceEmailTemplate[$t].$i."}";
            }
        }
        if(file_exists($emailTemplate)){
            $emailMessage = file_get_contents($emailTemplate);
        }
        foreach(array_keys($fillInArray) as $key){
            if(strlen($key) > 2){
                $emailMessage = str_replace($key, $fillInArray[$key], $emailMessage);
            }
        }
                for ($i = 1; $i < $totalWork + 1; $i++) {
            for ($t = 0; $t < $workInputFields; $t++){
                $emailMessage = str_replace($workEmailArray[$i-1][$t], $_POST[$workStringTemplate[$t].$i], $emailMessage);
            }
        }
        for ($i = 1; $i < $totalReferences + 1; $i++) {
            for ($t = 0; $t < count($referenceEmailTemplate); $t++){
                if($t == 0){
                    $nameKeyField = $_POST[$referenceStringTemplate[0].$i]." ".$_POST[$referenceStringTemplate[1].$i]." ".$_POST[$referenceStringTemplate[2].$i];
                    $emailMessage = str_replace($referenceEmailArray[$i-1][$t], $nameKeyField, $emailMessage);
                } else {
                    $emailMessage = str_replace($referenceEmailArray[$i-1][$t], $_POST[$referenceStringTemplate[$t+2].$i], $emailMessage);
                }
            }
        }
        for ($i = $totalWork + 1; $i <= 3; $i++) {
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
        $to = "asierra010@gmail.com";
        $subject = "Application Form Submission";
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