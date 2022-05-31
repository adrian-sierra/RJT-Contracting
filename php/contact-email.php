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
      <!-- message div -->
      <div class="message container">
        <h2 class="message-title">Message:</h2>
        <p class="actual-message"><span>{MESSAGE}</span></p>
      </div>
    </div>
  </body>
</html>
