// length of password & array for choices
var characterLength = 8;
var choiceArray = [];

// characters to choose from
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var symbol = ['#', '$', '%', '&', '(', ')', '!', '*', '+', '-', '<', '?', '@'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
    var correctPrompts = getPrompts();
    var passwordText = document.querySelector("#password");

    if(correctPrompts) {
      var newPassword = generatePassword();
      passwordText.value = newPassword;

  }
}

function generatePassword() {
  console.log("button clicked");
  var password = "";

  for (var i = 0; i < characterLength; i++) {
    console.log("please be here")
    var randomNumber = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomNumber];
  }
  return password;

}

//PROMPTS
function getPrompts() {
  choiceArray = [];
  characterLength = parseInt(prompt("Choose the number of characters would you like in your password. Your password can have between 8-126 characters."));

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("You must enter a number between 8-128. Please try again...");
    return false;
  }

  if (confirm("Would you like to use numbers in your password?")) {
    choiceArray = choiceArray.concat(numbers);
  }

  if (confirm("Would you like to use symbols in your password?")) {
    choiceArray = choiceArray.concat(symbol);
  }

  if (confirm("Would you like to use lowercase letters in your password?")) {
    choiceArray = choiceArray.concat(lower);
  }
  
  if (confirm("Would you like to use Capital letters in your password?")) {
    choiceArray = choiceArray.concat(upper);
  }
  return true;

}



