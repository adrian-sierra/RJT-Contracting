const navigation = document.querySelector("#banner-nav"); // set up for DOM manipulation for nav bar and navigation
const navigationButton = document.querySelector(".banner-nav-toggle");

navigationButton.addEventListener("click", () => {
  // event listener for the navigation bar when the window is in a phone sized screen
  if (navigation.getAttribute("data-visible") === "false") {
    // this if statements and the code inside will alter based off its current condition and the result is the side bar will expand out to the screen or slide out of the screen
    navigation.setAttribute("data-visible", "true");
    navigationButton.setAttribute("aria-expanded", "true");
    navigationButton.classList.remove("fa-bars");
    navigationButton.classList.add("fa-xmark");
  } else {
    navigation.setAttribute("data-visible", "false");
    navigationButton.setAttribute("aria-expanded", "false");
    navigationButton.classList.remove("fa-xmark");
    navigationButton.classList.add("fa-bars");
  }
});

const langDownArrow = document.getElementById("language-down-arrow"); // set up for DOM manipulation for the selected language
const otherLangContainer = document.getElementById("other-lang");

langDownArrow.addEventListener("click", () => {
  // another event listenener for the language selector button and the conditions are then set accordingly
  if (otherLangContainer.getAttribute("data-visible") === "false") {
    otherLangContainer.setAttribute("data-visible", "true");
    langDownArrow.classList.remove("fa-angle-down");
    langDownArrow.classList.add("fa-angle-up");
  } else {
    otherLangContainer.setAttribute("data-visible", "false");
    langDownArrow.classList.remove("fa-angle-up");
    langDownArrow.classList.add("fa-angle-down");
  }
});

const weekDays = { // key-value pair template to store the days of the week with their appropriate times
  0: { day: "Sunday", time: "9am-3pm" },
  1: { day: "Monday", time: "8am-5pm" },
  2: { day: "Tuesday", time: "8am-5pm" },
  3: { day: "Wednesday", time: "8am-5pm" },
  4: { day: "Thursday", time: "8am-5pm" },
  5: { day: "Friday", time: "8am-5pm" },
  6: { day: "Saturday", time: "9am-3pm" },
};

let date = new Date(); // create new instance of the date object to keep track of which day of the week it is and to display the corresponding time
let todaysDate = weekDays[date.getDay()].day; // get the corresponding weekday based off of the getDay method for the date object
let format, paragraph, text; 
let weekDaysSize = Object.keys(weekDays).length; // calculate the key size for the date object in order to loop through each one and then display them onto the screen

for (let i = 0; i < weekDaysSize; i++) { // this for loop will loop through each of the days from the weekdays key-pair object and format them accordingly
  format = weekDays[i].day + ": " + weekDays[i].time;
  paragraph = document.createElement("p"); // JS involves creating a new paragraph element and then appending this child to an hours container
  paragraph.setAttribute("id", "contact-hours");
  text = document.createTextNode(format);
  paragraph.appendChild(text);
  if (todaysDate == weekDays[i].day) {
    paragraph.style.color = "lightgray";
    document.getElementById("hours-container").appendChild(paragraph);
  }
}

const downArrowButton = document.getElementById("contact-down-arrow"); // set up for DOM manipulation on a display for the contact hours
const contactHours = document.getElementById("hours-container");

downArrowButton.addEventListener("click", () => { // event listener for the display contact hours button
  if (contactHours.getAttribute("data-visible") === "false") { // using the class list attributes for the HTML elements to switch back and forth based on current setting 
    contactHours.setAttribute("data-visible", "true");
    downArrowButton.setAttribute("data-visible", "true");
    downArrowButton.classList.remove("fa-angle-down");
    downArrowButton.classList.add("fa-angle-up");
    document
      .getElementById("hours-container")
      .removeChild(document.getElementById("contact-hours"));
    for (let i = 0; i < weekDaysSize; i++) { // this is the same as the for loop above with the exception being that the current day will have an added style of an underline and different color
      format = weekDays[i].day + ": " + weekDays[i].time;
      paragraph = document.createElement("p");
      paragraph.setAttribute("id", "contact-hours");
      text = document.createTextNode(format);
      paragraph.appendChild(text);
      if (todaysDate == weekDays[i].day) {
        paragraph.style.color = "lightgray";
        paragraph.style.textDecoration = "underline";
      }
      document.getElementById("hours-container").appendChild(paragraph);
    }
  } else {
    contactHours.setAttribute("data-visible", "false"); // same as the the above just for the opposite condition
    downArrowButton.setAttribute("data-visible", "false");
    downArrowButton.classList.remove("fa-angle-up");
    downArrowButton.classList.add("fa-angle-down");
    for (let i = 0; i < weekDaysSize; i++)
      document
        .getElementById("hours-container")
        .removeChild(document.getElementById("contact-hours"));

    for (let i = 0; i < weekDaysSize; i++) {
      format = weekDays[i].day + ": " + weekDays[i].time;
      paragraph = document.createElement("p");
      paragraph.setAttribute("id", "contact-hours");
      text = document.createTextNode(format);
      paragraph.appendChild(text);
      if (todaysDate == weekDays[i].day) {
        paragraph.style.color = "lightgray";
        document.getElementById("hours-container").appendChild(paragraph);
      }
    }
  }
});
