// Assignment code here

var characterLength = 8-128;
var randomArr = [];



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("button clicked");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



