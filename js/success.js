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
