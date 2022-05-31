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

const workForm = document.querySelector(".form-work");
const workExperience = document.querySelector(".work-experience");
const addWorkButton = document.getElementById("add-work");
let totalWorkExperience = parseInt(
  document.getElementById("add-work-value").value
);
//console.log(totalWorkExperience);
let workStringTemplate = [
  "work-company-",
  "work-role-",
  "work-phone-",
  "work-address-",
  "work-zip-",
  "work-start-",
  "work-end-",
];

addWorkButton.addEventListener("click", () => {
  totalWorkExperience += 1;
  document.getElementById("add-work-value").value = totalWorkExperience;
  //console.log(document.getElementById("add-work-value").value);
  let workExperienceCopy = workExperience.cloneNode(true);
  let inputs = workExperienceCopy.getElementsByClassName("jobs-input");
  for (let i = 0; i < inputs.length; i++) {
    let concatString = workStringTemplate[i] + totalWorkExperience.toString();
    inputs[i].id = concatString;
    inputs[i].setAttribute("name", concatString);
    if (inputs[i].type == "text" || inputs[i].type == "date") {
      inputs[i].value = "";
    }
  }
  workForm.removeChild(addWorkButton);
  workForm.appendChild(workExperienceCopy);

  let addressQuery = "#" + inputs[3].id;
  let zipQuery = "#" + inputs[4].id;
  let newWorkField = workExperienceCopy.querySelector(addressQuery);
  let newZipField = workExperienceCopy.querySelector(zipQuery);
  let newAutocomplete = new google.maps.places.Autocomplete(
    newWorkField,
    options
  );
  newAutocomplete.addListener("place_changed", () => {
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
    workForm.appendChild(addWorkButton);
  }
});

const referenceForm = document.querySelector(".form-references");
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

let streetAutocomplete;
let workAutocomplete;
let streetField;
let streetZipField;
let workField;
let workZipField;
let options = {
  componentRestrictions: { country: ["us", "ca"] },
  fields: ["address_components", "geometry"],
  types: ["address"],
};

function initAutocomplete() {
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

  workField = document.querySelector("#work-address-1");
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

window.initAutocomplete = initAutocomplete;
