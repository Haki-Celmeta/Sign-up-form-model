//input variables
const firstName = document.querySelector(".first-name");
const lastName = document.querySelector(".last-name");
const emailAddress = document.querySelector(".email-address");
const password = document.querySelector(".password");
//error variables
const firstNameError = document.querySelector("#first-name-error");
const lastNameError = document.querySelector("#last-name-error");
const wrongEmailError = document.querySelector("#wrong-email-error");
const emptyEmailError = document.querySelector("#empty-email-error");
const emptyPasswordError = document.querySelector("#empty-password-error");
const leastPasswordError = document.querySelector("#least-password-error");
const wrongSign = document.querySelectorAll(".wrong-sign");
//container variables
const textContainer = document.querySelectorAll(".text-container");
const errorContainer = document.querySelectorAll(".input-container");
//signup button 
const signupButton = document.querySelector(".signup-button");

signupButton.addEventListener("click", function() {
  if (firstName.value.length === 0) {
    firstName.style.border = '1px solid hsl(0, 100%, 74%)';
    firstNameError.style.display = 'block';
    wrongSign[0].style.display = 'block';
  } else {
    firstName.style.border = '1px solid hsl(246, 25%, 77%)';
    firstNameError.style.display = 'none';
    wrongSign[0].style.display = 'none';
  }
  if (lastName.value.length === 0) {
    lastName.style.border = '1px solid hsl(0, 100%, 74%)';
    lastNameError.style.display = 'block';
    wrongSign[1].style.display = 'block';
  } else {
    lastName.style.border = '1px solid hsl(246, 25%, 77%)';
    lastNameError.style.display = 'none';
    wrongSign[1].style.display = 'none';
  }
  if (emailAddress.value.length === 0) {
    emailAddress.style.border = '1px solid hsl(0, 100%, 74%)';
    emptyEmailError.style.display = 'block';
    wrongEmailError.style.display = 'none';
    wrongSign[2].style.display = 'block';
  } else {
    emailAddress.style.border = '1px solid hsl(246, 25%, 77%)';
    emptyEmailError.style.display = 'none';
    wrongSign[2].style.display = 'none';
    if ((!emailAddress.value.includes("@") || emailAddress.value.slice(-4) !== ".com") 
    && emailAddress.value.length !== 0) {
      emailAddress.style.border = '1px solid hsl(0, 100%, 74%)';
      wrongEmailError.style.display = 'block';
      wrongSign[2].style.display = 'block';
    } else if (emailAddress.value.length !== 0) {
      emailAddress.style.border = '1px solid hsl(246, 25%, 77%)';
      wrongEmailError.style.display = 'none';
      wrongSign[2].style.display = 'none';
    }
  }
  if (password.value.length === 0) {
    password.style.border = '1px solid hsl(0, 100%, 74%)';
    emptyPasswordError.style.display = 'block';
    leastPasswordError.style.display = 'none';
    wrongSign[3].style.display = 'block';
  } else {
    password.style.border = '1px solid hsl(246, 25%, 77%)';
    emptyPasswordError.style.display = 'none';
    wrongSign[3].style.display = 'none';
    if (password.value.length < 8) {
      password.style.border = '1px solid hsl(0, 100%, 74%)';
      leastPasswordError.style.display = 'block';
      wrongSign[3].style.display = 'block';
    } else {
      password.style.border = '1px solid hsl(246, 25%, 77%)';
      leastPasswordError.style.display = 'none';
      wrongSign[3].style.display = 'none';
    }
  }
})