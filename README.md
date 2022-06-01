# RJT-Contracting

Website for RJT Contracting Business

This website was built for a business and includes features such as: language selector, mobile navigation, contact form, application form, and several dynamic webpage features as well.

The website itself is based on the business of a private Wildland Firefighting contractor and it includes details about the company itself, jobs that they offer and hire for, and services that they provide in aid to combatting wildland fires. The page in total includes four separate webpages, that also are able to be seen and read in spanish, with the previously stated language selector. Every page also include both a navigation bar/menu for the according window screen size, as well as a footer at the bottom of every page that include social media pages and some brief contact information as well. Three out of four pages also include a section underneath the header that offers the user to click an "Apply Now" button that will take them to the "Jobs" page.

The technologies utilized for this website include: HTML, CSS, JavaScript, and PHP. The page offers dynamic webpages through JavaScript and back end capabilities provide feature to send a contact email, as well as to apply to one of the positions that the company offers.

APIs used in the website include the Google Maps API which requires an API key token from the Google API Console for developers and then allows users to begin inputting an address and this API will bring up suggestions asynchronously. Another API included is the Intersection Observer API that is included in the JavaScript language and is used to create a fading in animation for a section of the webpage. 

The "Home" page includes an "Events" section that lists four upcoming events for the page and the user is able to click on the "Attend" button and a form is then pops up underneath the specified event. The form includes a "Name" and a "Phone Number" field that they are able to submit after they are both filled out since they are required fields. The user is also given the option to cancel the form by clicking the "Cancel" button and the form is reset. The form, when submitted by the user, is set to send the data from the form to a corresponding PHP page that will handle the information and send out an email using the "mail" function from PHP to the specified email address. The next section in the page is a simple "Mission Statement" for the company and includes a background image with a color overlay and several paragraphs of text. The following section is the "Company History" section that details the history of the company. This section constitutes several paragraphs of text with an associated image and will change based on the window size from one single column, to three columns. 

The "About Us" page begins with four images that use the "grid" technology of CSS to display them according to the window size, starting with a single column at the smallest size, two columns at a medium size, and then four columns at the largest size. Each individual image is also made up of a linear-gradient background color and a single word in the middle of the image. Following the grid images are several paragraphs of text to describe who the company is. The next section is the "Services" section and this section is the one that utilizes that Intersection Observer API which will fade in based on how much of each section is visible on the screen and is set to a specific time to execute the animation. Once the animation is executed, that section is then no longer being observed by the object of the API. The layout of each of these section include one image with a corresponding section of text, surrounded by a border.

The "Contact" page includes an image of the company, as well as some basic contact info for the company. There also includes an "Hours of Operation" section that will display the hours for the current day based on a Date object in JavaScript and the user is able to drop down the rest of the hours for every day. This page also includes a contact form that will take the user's personal info such as, first name, last name, phone number, email, and other optional fields and the user is then able to click on the "Submit" button wich will send this data to a corresponding PHP page and will be dealt with accordingly and ultimately send an email to the owner.

The "Jobs" page constitutes of description for the three positions that the company offers and a job application form. The job description section includes several key aspects of a job, such as, pay, experience, training, skills, and responsibilities, to name a few. This section remains the same in terms of ratio, regardless of the window size and it is surrounded by the same border that is seen throughout other pages of the website. The next section is the application form which is made of eight parts, with the first five being required by the user before submitting. Most of the input fields are basic and require simple information and function basic as well, but some parts, such as the "Address" part of this section utilizes the Google Maps API that will autocomplete the "Street Address" and "Zip Code" field of this part. This API is also included in the "Work Experience" and "Reference" part of the form and with the "Work Experience" form, the user is able to add up to three separate forms that each include the autocomplete independently. The "Position Desired" part also uses options to have a drop down menu of the options that the company offers. Once the user has filled out all of the required fields and click on the "Submit" button, the form and corresponding data is sent to appropriate PHP page and that page handles the pages and send it to the owner's email.

The JavaScript that is used throughout the website is mainly constituted of simple DOM manipulation with different elements being able to be displayed or hidden, such as in the "Events" section in the "Home" page. The mobile navigation bar also uses simple DOM manipulation, combined with some CSS effects to make the website look more dynamic. The intent was to make the website dynamic and interactive and that was achieved with the use of JavaScript.

The PHP that was utilized on three pages of the website are of very similar structure and each utilize an email template that will hold the structure for how the email will look to the recipient. The PHP "mail" function was used to send out the email, and the different arguments that this function takes in were formulated based on each independent form and the language that was utilized. The "Events" section of the "Home" page and the corresponding forms had to be handled a little differently because of the IDs for each of the elements in the form and the PHP included some templates for the different element names and corresponding data. The rest of the handling of the submit and data from the webpages to PHP was standard in terms of how the "mail" function works and is sent. After the email was sent to the recipient, the page redirects to either a "Success" page or an "Error" page depending on if the submission carried out successfully or not. 
