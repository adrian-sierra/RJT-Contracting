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

const eventOneButton = document.getElementById("event-1-button"); // this portion of the file deals with the attendance forms from the home page and deals with checking and setting the appropriate attributes for each of the elements with the appropriate DOM manipulation for each of the four forms
const eventOneForm = document.getElementById("event-1-form");
const eventOne = document.getElementById("event-1");
const eventOneCancel = document.getElementById("event-1-cancel");
const eventOneContainer = document.getElementById("event-container-1");

const eventTwoButton = document.getElementById("event-2-button");
const eventTwoForm = document.getElementById("event-2-form");
const eventTwo = document.getElementById("event-2");
const eventTwoCancel = document.getElementById("event-2-cancel");
const eventTwoContainer = document.getElementById("event-container-2");

const eventThreeButton = document.getElementById("event-3-button");
const eventThreeForm = document.getElementById("event-3-form");
const eventThree = document.getElementById("event-3");
const eventThreeCancel = document.getElementById("event-3-cancel");
const eventThreeContainer = document.getElementById("event-container-3");

const eventFourButton = document.getElementById("event-4-button");
const eventFourForm = document.getElementById("event-4-form");
const eventFour = document.getElementById("event-4");
const eventFourCancel = document.getElementById("event-4-cancel");
const eventFourContainer = document.getElementById("event-container-4");

eventOneButton.addEventListener("click", () => {
  // event listeners for displaying an attendance form and setting appropriate attributes for some styling
  if (eventOneForm.getAttribute("data-visible") === "false") {
    eventOneForm.setAttribute("data-visible", "true");
    eventOneButton.setAttribute("data-visible", "false");
    eventOne.setAttribute("data-visible", "false");
    eventOneContainer.setAttribute("data-visible", "true");
  }
});
eventTwoButton.addEventListener("click", () => {
  if (eventTwoForm.getAttribute("data-visible") === "false") {
    eventTwoForm.setAttribute("data-visible", "true");
    eventTwoButton.setAttribute("data-visible", "false");
    eventTwo.setAttribute("data-visible", "false");
    eventTwoContainer.setAttribute("data-visible", "true");
  }
});
eventThreeButton.addEventListener("click", () => {
  if (eventThreeForm.getAttribute("data-visible") === "false") {
    eventThreeForm.setAttribute("data-visible", "true");
    eventThreeButton.setAttribute("data-visible", "false");
    eventThree.setAttribute("data-visible", "false");
    eventThreeContainer.setAttribute("data-visible", "true");
  }
});
eventFourButton.addEventListener("click", () => {
  if (eventFourForm.getAttribute("data-visible") === "false") {
    eventFourForm.setAttribute("data-visible", "true");
    eventFourButton.setAttribute("data-visible", "false");
    eventFour.setAttribute("data-visible", "false");
    eventFourContainer.setAttribute("data-visible", "true");
  }
});

eventOneCancel.addEventListener("click", () => {
  // event listener to cancel attendance form and reset it as well
  eventOneForm.setAttribute("data-visible", "false");
  eventOneButton.setAttribute("data-visible", "true");
  eventOne.setAttribute("data-visible", "true");
  eventOneForm.reset();
});
eventTwoCancel.addEventListener("click", () => {
  eventTwoForm.setAttribute("data-visible", "false");
  eventTwoButton.setAttribute("data-visible", "true");
  eventTwo.setAttribute("data-visible", "true");
  eventTwoForm.reset();
});
eventThreeCancel.addEventListener("click", () => {
  eventThreeForm.setAttribute("data-visible", "false");
  eventThreeButton.setAttribute("data-visible", "true");
  eventThree.setAttribute("data-visible", "true");
  eventThreeForm.reset();
});
eventFourCancel.addEventListener("click", () => {
  eventFourForm.setAttribute("data-visible", "false");
  eventFourButton.setAttribute("data-visible", "true");
  eventFour.setAttribute("data-visible", "true");
  eventFourForm.reset();
});
