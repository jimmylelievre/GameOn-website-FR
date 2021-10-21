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
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeForm = document.querySelector(".close");
const inputName = document.querySelector("[name='first']");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close the form
closeForm.addEventListener("click", () => {
  modalbg.style.display = "none";
});

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Verifier le prénom
inputName.addEventListener("input", (e) => {
  if (e.target.value.length >= 2) {
    valid = true;
    console.log("ok !");
  } else {
    console.log("pas ok");
    valid = false;
  }
});
