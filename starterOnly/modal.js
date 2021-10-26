function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalbgThanks = document.querySelector(".bground-thanks");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeForm = document.querySelectorAll(".closed");
const inputName = document.querySelector("[name='first']");
const inputLastName = document.querySelector("[name='last']");
const form = document.querySelector("[name='reserve']");
const inputQuantity = document.querySelector("[name='quantity']");
const inputBirth = document.querySelector("[name='birthdate']");
const inputEmail = document.querySelector("[name='email']");
const inputCheckbox = document.querySelector("input[value='checked']");
const errorName = document.querySelector(".error-name");
const errorLast = document.querySelector(".error-last");
const errorEmail = document.querySelector(".error-email");
const errorQuantity = document.querySelector(".error-quantity");
const errorBirth = document.querySelector(".error-birthdate");
const errorCheckbox = document.querySelector(".error-checkbox");

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

// Verifier le prénom
let prenom = false;
inputName.addEventListener("input", (e) => {
  if (e.target.value.length >= 2) {
    prenom = true;
    console.log("ok !");
    errorName.style.display = "none";
  } else {
    console.log("pas ok");
    prenom = false;
    errorName.style.display = "block";
  }
});

// Vérifier le nom
let lastName = false;
inputLastName.addEventListener("input", (e) => {
  if (e.target.value.length >= 2) {
    lastName = true;
    console.log("ok !");
    errorLast.style.display = "none";
  } else {
    console.log("pas ok");
    lastName = false;
    errorLast.style.display = "block";
  }
});

// Vérifier l'email
let email = false;
inputEmail.addEventListener("input", (e) => {
  if (e.target.value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    email = true;
    console.log("ok !");
    errorEmail.style.display = "none";
  } else {
    console.log("pas ok");
    email = false;
    errorEmail.style.display = "block";
  }
});

// Vérifier l'anniversaire
let birth = false;
inputBirth.addEventListener("input", (e) => {
  console.log(e.target.value);
  if (e.target.value == "") {
    birth = false;
    errorBirth.style.display = "block";
    console.log("pas ok !");
  } else {
    console.log(" ok");
    birth = true;
    errorBirth.style.display = "none";
  }
});

// Vérifier le nombre concours
let quantity = false;
inputQuantity.addEventListener("input", (e) => {
  if (e.target.value > 0) {
    quantity = true;
    console.log("ok !");
    errorQuantity.style.display = "none";
  } else {
    console.log("pas ok");
    quantity = false;
    errorQuantity.style.display = "block";
  }
});

// Vérifier la checkbox
let check = false;
inputCheckbox.addEventListener("click", () => {
  if (inputCheckbox.checked) {
    console.log("ok");
    check = true;
    errorCheckbox.style.display = "none";
  } else {
    console.log("pas ok");
    check = false;
    errorCheckbox.style.display = "block";
  }
});

// Validation du formulaire
function validate() {}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (prenom && lastName && quantity && birth && check) {
    alert("C'est ok !");
    modalbg.style.display = "none";
    modalbgThanks.style.display = "block";
  } else {
    alert("remplir tous les champs !");
    errorCheckbox.style.display = "block";
  }
});
