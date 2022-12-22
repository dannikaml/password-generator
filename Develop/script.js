// Assignment code here
var characterLength = 12;

var Numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var Upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var Lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var Symbol = [' #', '$', '%', '&', '(', ')', '!', '*', '+', '-', '<', '?', '@'];



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

//PROMPTS
var choose = prompt("Choose the number of characters would you like in your password?");
  if (choose != null) {
  
}

var numbers = prompt("Would you like to us numbers in your password?");
  if (numbers != null) {
  
}

var Symbol = prompt("Would you like to use symbols in your password?");
  if (Symbol != null) {
  
}
 
var Lower = prompt("Would you like to use lowercase letters in your password?");
  if (Lower != null) {
  
}

var Upper = prompt("Would you like to use Capital letters in your password?");
  if (Upper != null) {
  
}

