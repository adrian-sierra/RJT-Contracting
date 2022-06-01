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

const workForm = document.querySelector(".form-work"); // this section deals with the user adding more work experience by clicking the button that states "add work experience" and the associated Google Maps API for autocomplete
const workExperience = document.querySelector(".work-experience");
const addWorkButton = document.getElementById("add-work");
let totalWorkExperience = parseInt(
  document.getElementById("add-work-value").value
); // tracker for the work experience forms on the page in order to associate the correct element IDs with the number of forms
//console.log(totalWorkExperience);
let workStringTemplate = [
  "work-company-",
  "work-role-",
  "work-phone-",
  "work-address-",
  "work-zip-",
  "work-start-",
  "work-end-",
]; // template to associate the element IDs with the corresponding number

addWorkButton.addEventListener("click", () => {
  // event listener to add work experience form as well as adding independent functionality to this form for Google Maps API as well as clearing any of the information adding to previous forms
  totalWorkExperience += 1;
  document.getElementById("add-work-value").value = totalWorkExperience;
  //console.log(document.getElementById("add-work-value").value);
  let workExperienceCopy = workExperience.cloneNode(true); // used to clone another work experience form element
  let inputs = workExperienceCopy.getElementsByClassName("jobs-input");
  for (let i = 0; i < inputs.length; i++) {
    // this loop is used to go through the inputs on the work experience form and the names of this form and set them to the appropriate names based on the number of work experiences that were incremented as well as resetting the inputs if they were filled in the previous forms
    let concatString = workStringTemplate[i] + totalWorkExperience.toString();
    inputs[i].id = concatString;
    inputs[i].setAttribute("name", concatString);
    if (inputs[i].type == "text" || inputs[i].type == "date") {
      inputs[i].value = "";
    }
  }
  workForm.removeChild(addWorkButton);
  workForm.appendChild(workExperienceCopy); // add the new work experience form to a work form container

  let addressQuery = "#" + inputs[3].id; // used to select the appropriate elements for Google Maps API
  let zipQuery = "#" + inputs[4].id;
  let newWorkField = workExperienceCopy.querySelector(addressQuery); // have to select the appropriate address input
  let newZipField = workExperienceCopy.querySelector(zipQuery); // have to select the appropriate zip code input
  let newAutocomplete = new google.maps.places.Autocomplete( // create new object of the Google Maps API Autocompete and pass in the corresponding address input and default options
    newWorkField,
    options
  );
  newAutocomplete.addListener("place_changed", () => {
    // use the addListener method on the newly created object which is used with the "place_changed" argument to get the new place based on input, and uses an arrow function to get the corresponding data from the results

    // most all of this structure came from the documentation for the Autocomplete functionality from Google
    const place = newAutocomplete.getPlace();
    let address1 = "";
    let postcode = "";
    for (const component of place.address_components) {
      const componentType = component.types[0];
      switch (componentType) {
        case "street_number": {
          address1 = `${component.long_name} ${address1}`;
          break;
        }
        case "route": {
          address1 += component.short_name;
          break;
        }
        case "locality": {
          address1 += " " + component.long_name;
          break;
        }
        case "administrative_area_level_1": {
          address1 += ", " + component.short_name;
          break;
        }
        case "country": {
          address1 += ", " + component.short_name;
          break;
        }
        case "postal_code": {
          postcode = `${component.long_name}${postcode}`;
          break;
        }
      }
      newWorkField.value = address1;
      newZipField.value = postcode;
    }
  });
  if (totalWorkExperience < 3) {
    workForm.appendChild(addWorkButton); // DOM control based on number of work experience forms
  }
});

const referenceForm = document.querySelector(".form-references"); // references form and DOM manipulation works almost exactly like it was used for the work experience with just updated templates and elements
const reference = document.querySelector(".reference");
const addReferenceButton = document.getElementById("add-reference");

let totalReferences = parseInt(
  document.getElementById("add-reference-value").value
);
//console.log(totalReferences);
let referenceStringTemplate = [
  "references-first-name-",
  "references-middle-name-",
  "references-last-name-",
  "references-phone-",
  "references-email-",
  "references-years-",
];

addReferenceButton.addEventListener("click", () => {
  // same as the event listener for work experience
  totalReferences += 1;
  document.getElementById("add-reference-value").value = totalReferences;
  //console.log(document.getElementById("add-reference-value").value);
  let referenceCopy = reference.cloneNode(true);
  let inputs = referenceCopy.getElementsByClassName("jobs-input");
  for (let i = 0; i < inputs.length; i++) {
    let concatString = referenceStringTemplate[i] + totalReferences.toString();
    inputs[i].id = concatString;
    inputs[i].setAttribute("name", concatString);
    if (inputs[i].type == "text" || inputs[i].type == "date") {
      inputs[i].value = "";
    }
  }
  referenceForm.removeChild(addReferenceButton);
  referenceForm.appendChild(referenceCopy);
  if (totalReferences < 3) {
    referenceForm.appendChild(addReferenceButton);
  }
});

let streetAutocomplete; // this section and variables work like the work experience forms that use the Google Maps API except that this part is for the personal info and corresponding address
let workAutocomplete;
let streetField;
let streetZipField;
let workField;
let workZipField;
let options = {
  componentRestrictions: { country: ["us", "ca"] },
  fields: ["address_components", "geometry"],
  types: ["address"],
}; // option for the results of the Google Maps API

function initAutocomplete() {
  // same as the above in the work experience form with the only exception being that it is ready to be used at the moment of input
  streetField = document.querySelector("#street-address");
  streetZipField = document.querySelector("#street-zip");
  streetAutocomplete = new google.maps.places.Autocomplete(
    streetField,
    options
  );
  streetAutocomplete.addListener("place_changed", () => {
    // streetField = streetAutocomplete.getPlace();
    const place = streetAutocomplete.getPlace();
    let address1 = "";
    let postcode = "";
    for (const component of place.address_components) {
      const componentType = component.types[0];
      switch (componentType) {
        case "street_number": {
          address1 = `${component.long_name} ${address1}`;
          break;
        }
        case "route": {
          address1 += component.short_name;
          break;
        }
        case "locality": {
          address1 += " " + component.long_name;
          break;
        }
        case "administrative_area_level_1": {
          address1 += ", " + component.short_name;
          break;
        }
        case "country": {
          address1 += ", " + component.short_name;
          break;
        }
        case "postal_code": {
          postcode = `${component.long_name}${postcode}`;
          break;
        }
      }
    }
    streetField.value = address1;
    streetZipField.value = postcode;
  });

  workField = document.querySelector("#work-address-1"); // like the rest of the Autocomplete forms, this is just independent since it is always present on the page regardless of the user adding more forms
  workZipField = document.querySelector("#work-zip-1");
  workAutocomplete = new google.maps.places.Autocomplete(workField, options);
  workAutocomplete.addListener("place_changed", () => {
    // workField = workAutocomplete.getPlace();
    const place = workAutocomplete.getPlace();
    let address1 = "";
    let postcode = "";
    for (const component of place.address_components) {
      const componentType = component.types[0];
      switch (componentType) {
        case "street_number": {
          address1 = `${component.long_name} ${address1}`;
          break;
        }
        case "route": {
          address1 += component.short_name;
          break;
        }
        case "locality": {
          address1 += " " + component.long_name;
          break;
        }
        case "administrative_area_level_1": {
          address1 += ", " + component.short_name;
          break;
        }
        case "country": {
          address1 += ", " + component.short_name;
          break;
        }
        case "postal_code": {
          postcode = `${component.long_name}${postcode}`;
          break;
        }
      }
    }
    workField.value = address1;
    workZipField.value = postcode;
  });
}

window.initAutocomplete = initAutocomplete; // here we instantiate the Autocomplete functionality on the current window
