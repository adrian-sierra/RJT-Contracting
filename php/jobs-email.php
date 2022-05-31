<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <style type="text/css">
    @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    html,
    body {
      font-family: "Roboto", sans-serif;
      font-weight: bold;
    }
    h2 {
      font-size: 1.25rem;
      text-decoration: underline;
    }
    p {
      font-size: 0.85rem;
      font-weight: bold;
      padding: 0.25em;
      display: list-item;
      list-style: disc;
      margin-left: min(10%, 4em);
    }
    span {
      position: relative;
      left: -8px;
    }
    .container {
      display: flex;
      flex-direction: column;
      gap: 0.25em;
    }
      </style>
    <body>
    <div class="email-container">
      <!-- personal info div -->
      <div class="personal-info container">
        <h2 class="personal-info-title">Personal Info:</h2>
        <p class="name"><span>{NAME}</span></p>
        <p class="phone-number"><span>{PERSONAL_PHONE}</span></p>
        <p class="email"><span>{PERSONAL_EMAIL}</span></p>
      </div>
      <!-- date of birth div -->
      <div class="date-of-birth container">
        <h2 class="date-of-birth-title">Date Of Birth:</h2>
        <p class="dob"><span>{DATE_OF_BIRTH} ({AGE} Years Old)</span></p>
      </div>
      <div class="address container">
        <h2 class="address-title">Address:</h2>
        <p class="street-address"><span>{STREET_ADDRESS}</span></p>
        <p class="street-unit"><span>{STREET_UNIT}</span></p>
        <p class="street-zip"><span>{STREET_ZIP}</span></p>
      </div>
      <!-- position div -->
      <div class="job-position container">
        <h2 class="position-title">Position Desired:</h2>
        <p class="position"><span>{JOB_POSITION}</span></p>
      </div>
      <!-- pay div -->
      <div class="pay-desired container">
        <h2 class="pay-title">Pay Desired:</h2>
        <p class="pay"><span>{PAY}</span></p>
      </div>
      <!-- work experience div -->
      <div class="work-experience container">
        <h2 class="work-experience-title">Work Experience:</h2>
        <p class="work-company"><span>{WORK_COMPANY_1}</span></p>
        <p class="work-role"><span>{WORK_ROLE_1}</span></p>
        <p class="work-phone"><span>{WORK_PHONE_1}</span></p>
        <p class="work-address"><span>{WORK_ADDRESS_1}</span></p>
        <p class="work-zip"><span>{WORK_ZIP_1}</span></p>
        <p class="work-start"><span>Start Date: {WORK_START_1}</span></p>
        <p class="work-end"><span>End Date: {WORK_END_1}</span></p>
      </div>
       <div class="work-experience container">
        <h2 class="work-experience-title">Work Experience(s):</h2>
        <p class="work-company"><span>{WORK_COMPANY_2}</span></p>
        <p class="work-role"><span>{WORK_ROLE_2}</span></p>
        <p class="work-phone"><span>{WORK_PHONE_2}</span></p>
        <p class="work-address"><span>{WORK_ADDRESS_2}</span></p>
        <p class="work-zip"><span>{WORK_ZIP_2}</span></p>
        <p class="work-start"><span>Start Date: {WORK_START_2}</span></p>
        <p class="work-end"><span>End Date: {WORK_END_2}</span></p>
      </div>
      <div class="work-experience container">
        <h2 class="work-experience-title">Work Experience(s):</h2>
        <p class="work-company"><span>{WORK_COMPANY_3}</span></p>
        <p class="work-role"><span>{WORK_ROLE_3}</span></p>
        <p class="work-phone"><span>{WORK_PHONE_3}</span></p>
        <p class="work-address"><span>{WORK_ADDRESS_3}</span></p>
        <p class="work-zip"><span>{WORK_ZIP_3}</span></p>
        <p class="work-start"><span>Start Date: {WORK_START_3}</span></p>
        <p class="work-end"><span>End Date: {WORK_END_3}</span></p>
      </div>
      <!-- references div -->
      <div class="references container">
        <h2 class="references-title">Reference:</h2>
        <p class="reference-name"><span>{REFERENCE_NAME_1}</span></p>
        <p class="reference-phone"><span>{REFERENCE_PHONE_1}</span></p>
        <p class="reference-email"><span>{REFERENCE_EMAIL_1}</span></p>
        <p class="reference-years"><span>{REFERENCE_YEARS_1} Years</span></p>
      </div>
      <div class="references container">
        <h2 class="references-title">Reference:</h2>
        <p class="reference-name"><span>{REFERENCE_NAME_2}</span></p>
        <p class="reference-phone"><span>{REFERENCE_PHONE_2}</span></p>
        <p class="reference-email"><span>{REFERENCE_EMAIL_2}</span></p>
        <p class="reference-years"><span>{REFERENCE_YEARS_2} Years</span></p>
      </div>
      <div class="references container">
        <h2 class="references-title">Reference:</h2>
        <p class="reference-name"><span>{REFERENCE_NAME_3}</span></p>
        <p class="reference-phone"><span>{REFERENCE_PHONE_3}</span></p>
        <p class="reference-email"><span>{REFERENCE_EMAIL_3}</span></p>
        <p class="reference-years"><span>{REFERENCE_YEARS_3} Years</span></p>
      </div>
      <!-- message div -->
      <div class="message container">
        <h2 class="message-title">Message:</h2>
        <p class="actual-message">
          <span>{MESSAGE}</span>
        </p>
      </div>
    </div>
  </body>
</html>
