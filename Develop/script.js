// Assignment code here

var characterLength = 8-128;
var randomArr = [];



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



function generatePassword(); {

}

function getCriteria(); {

}

function getRandomNumber(); {
  var Numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  
}

function getRandomUpper(); {
  var Upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

}

function getRandomLower(); {
  var Lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

}

function getRandomSymbol(); {
  var Symbol = [' #', '$', '%', '&', '(', ')', '!', '*', '+', '-', '<', '?', '@'];

 }