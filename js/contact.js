const navigation = document.querySelector("#banner-nav");
const navigationButton = document.querySelector(".banner-nav-toggle");

navigationButton.addEventListener("click", () => {
  if (navigation.getAttribute("data-visible") === "false") {
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

const langDownArrow = document.getElementById("language-down-arrow");
const otherLangContainer = document.getElementById("other-lang");

langDownArrow.addEventListener("click", () => {
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

const weekDays = {
  0: { day: "Sunday", time: "9am-3pm" },
  1: { day: "Monday", time: "8am-5pm" },
  2: { day: "Tuesday", time: "8am-5pm" },
  3: { day: "Wednesday", time: "8am-5pm" },
  4: { day: "Thursday", time: "8am-5pm" },
  5: { day: "Friday", time: "8am-5pm" },
  6: { day: "Saturday", time: "9am-3pm" },
};

let date = new Date();
let todaysDate = weekDays[date.getDay()].day;
let format, paragraph, text;
let weekDaysSize = Object.keys(weekDays).length;

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

const downArrowButton = document.getElementById("contact-down-arrow");
const contactHours = document.getElementById("hours-container");

downArrowButton.addEventListener("click", () => {
  if (contactHours.getAttribute("data-visible") === "false") {
    contactHours.setAttribute("data-visible", "true");
    downArrowButton.setAttribute("data-visible", "true");
    downArrowButton.classList.remove("fa-angle-down");
    downArrowButton.classList.add("fa-angle-up");
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
        paragraph.style.textDecoration = "underline";
      }
      document.getElementById("hours-container").appendChild(paragraph);
    }
  } else {
    contactHours.setAttribute("data-visible", "false");
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
