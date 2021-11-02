// Affichage du responsive du menu
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Affichage erreur pour chaque element
function toggleElement(key, predicat) {
  let display = predicat ? "none" : "block";
  formProperties[key].element.style.display = display;
  formProperties[key].display = predicat;
}

// DOM Elements

// Modals
const modalbg = document.querySelector(".bground");
const modalbgThanks = document.querySelector(".bground-thanks");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeForm = document.querySelectorAll(".closed");

// input
const inputName = document.querySelector("[name='first']");
const inputLastName = document.querySelector("[name='last']");
const form = document.querySelector("[name='reserve']");
const inputQuantity = document.querySelector("[name='quantity']");
const inputBirth = document.querySelector("[name='birthdate']");
const inputEmail = document.querySelector("[name='email']");
const inputCheckbox = document.querySelector("input[value='checked']");
const radioCity = document.querySelectorAll("input[type='radio']");

// error messages
const errorName = document.querySelector(".error-name");
const errorLast = document.querySelector(".error-last");
const errorEmail = document.querySelector(".error-email");
const errorQuantity = document.querySelector(".error-quantity");
const errorBirth = document.querySelector(".error-birthdate");
const errorCity = document.querySelector(".error-city");
const errorCheckbox = document.querySelector(".error-checkbox");

// Properties for the form
let formProperties = {
  prenom: { element: errorName, display: false },
  lastName: { element: errorLast, display: false },
  mail: { element: errorEmail, display: false },
  birthday: { element: errorBirth, display: false },
  quantity: { element: errorQuantity, display: false },
  city: { element: errorCity, display: false },
  checkbox: { element: errorCheckbox, display: false },
};
// verification pour le submit
let prenom = false;
let lastName = false;
let mail = false;
let birth = false;
let quantity = false;
let city = false;
let checkbox = false;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close the form
closeForm.forEach((btn) => btn.addEventListener("click", closeModal));

function closeModal() {
  modalbg.style.display = "none";
  modalbgThanks.style.display = "none";
}

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// verification prenom
inputName.addEventListener("input", (e) => {
  predicat = e.target.value.length >= 2;
  toggleElement("prenom", predicat);

  if (predicat) {
    prenom = true;
  } else {
    prenom = false;
  }
});

// verification nom
inputLastName.addEventListener("input", (e) => {
  predicat = e.target.value.length >= 2;
  toggleElement("lastName", predicat);
  if (predicat) {
    lastName = true;
  } else {
    lastName = false;
  }
});

// verification email
inputEmail.addEventListener("input", (e) => {
  predicat = e.target.value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i);
  toggleElement("mail", predicat);
  if (predicat) {
    mail = true;
  } else {
    mail = false;
  }
});

// verification birthdate
inputBirth.addEventListener("input", (e) => {
  predicat = e.target.value !== "";
  toggleElement("birthday", predicat);
  if (predicat) {
    birth = true;
  } else {
    birth = false;
  }
});

// verification quantity
inputQuantity.addEventListener("input", (e) => {
  predicat = e.target.value >= 0;
  toggleElement("quantity", predicat);
  if (predicat) {
    quantity = true;
  } else {
    quantity = false;
  }
});

// verification city
radioCity.forEach((btn) =>
  btn.addEventListener("click", () => {
    predicat = !radioCity.checked;
    toggleElement("city", predicat);
    if (predicat) {
      city = true;
    } else {
      city = false;
    }
  })
);

// Verification condition checkbox
inputCheckbox.addEventListener("input", (e) => {
  predicat = inputCheckbox.checked;
  toggleElement("checkbox", predicat);
  if (predicat) {
    checkbox = true;
  } else {
    checkbox = false;
  }
});

// Submit form
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (prenom && lastName && mail && birth && quantity && city && checkbox) {
    modalbg.style.display = "none";
    modalbgThanks.style.display = "block";
  } else {
    alert("remplir tous les champs !");
    errorQuantity.style.display = "block";
    errorCity.style.display = "block";
  }
});
