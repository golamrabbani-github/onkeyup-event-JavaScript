const inputEmail = document.getElementById("inputEmail");
const verifyBtn = document.getElementById("varifyBtn");
const result = document.getElementById("result");

inputEmail.onkeyup = () => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailPattern.test(inputEmail.value)) {
    verifyBtn.textContent = "Your Email is Verifyed";
    verifyBtn.style.color = "green";
  } else {
    verifyBtn.textContent = "Please Enter a valid Email";
    verifyBtn.style.backgroundColor = "red";
  }
};

//
//
//
//
//

const inputPass = document.getElementById("inputPass");
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const number = document.getElementById("number");
const spacialC = document.getElementById("spacialC");
const totalCarectors = document.getElementById("totalCarectors");

inputPass.onkeyup = function () {
  const upperCase = /[A-Z]/g;
  if (inputPass.value.match(upperCase)) {
    upper.style.color = "green";
  } else {
    upper.style.color = "red";
  }

  const lowerCase = /[a-z]/g;
  if (inputPass.value.match(lowerCase)) {
    lower.style.color = "green";
  } else {
    lower.style.color = "red";
  }

  const numberText = /[0-9]/g;
  if (inputPass.value.match(numberText)) {
    number.style.color = "green";
  } else {
    number.style.color = "red";
  }

  const spacialCatectors = /[,./"'-*&%$#@!\/]/g;
  if (inputPass.value.match(spacialCatectors)) {
    spacialC.style.color = "green";
  } else {
    spacialC.style.color = "red";
  }

  if (inputPass.value.length >= 10) {
    totalCarectors.style.color = "green";
  } else {
    totalCarectors.style.color = "red";
  }
};
