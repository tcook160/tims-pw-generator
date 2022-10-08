// Assignment code here
var confirmLength;
var confirmLowerCase;
var confirmUpperCase;
var confirmSpecial;
var confirmNumber;
var userSelection;


var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var blankUpper = [];
var toUpper = function (x) {
    return x.toUpperCase();
  };
uppercase = lowercase.map(toUpper);

function generatePassword(){
// Prompt the user for password length
confirmLength = prompt("How many characters would you like your password to be?");
console.log("Password length " + confirmLength);


// Check if the user entered password length that meets requiremnts
while(confirmLength <=7 || confirmLength >=129 || confirmLength == null)
{
  confirmLength = prompt("Your password must be between 8-128 characters. Please try again.");
  console.log("Password length " + confirmLength);
};

  confirmLowerCase = confirm("Would you like to use lower case letters?");
  console.log("Lower case " + confirmLowerCase);

  confirmUpperCase = confirm("Would you like to use upper case letters? ");
  console.log("Upper case " + confirmUpperCase);

  confirmNumber = confirm("Would you like to use numbers");
  console.log("Number " + confirmNumber);

  confirmSpecial = confirm("Would you like to use special characters?");
  console.log("Special Character " + confirmSpecial);


// Confirm that user must select at lease one character type
if (!confirmLowerCase && !confirmUpperCase && !confirmNumber && !confirmSpecial) 
{
  userSelection = alert("You must choose a criteria");
} 
//if user selects all 4 criteria
else if (confirmLowerCase && confirmUpperCase && confirmNumber && confirmSpecial) 
{
  userSelection = lowercase.concat(uppercase, number, special);
  console.log(userSelection);
}
// if user selects 3 criteria
else if (confirmLowerCase && confirmUpperCase && confirmNumber) 
{
  userSelection = lowercase.concat(uppercase, number);
  console.log(userSelection);
}
else if (confirmLowerCase && confirmNumber && confirmSpecial)
{
  userSelection = lowercase.concat(number, special);
  console.log(userSelection);
}
else if (confirmUpperCase && confirmNumber && confirmSpecial) 
{
  userSelection = upperCase.concat(number, special);
  console.log(userSelection);
}
else if (confirmLowerCase && confirmUpperCase && confirmSpecial) 
{
  userSelection = lowercase.concat(upperase, special);
  console.log(userSelection);
}
//if user slects 2 criteria
else if (confirmLowerCase && confirmUpperCase) 
{
  userSelection = lowercase.concat(uppercase);
  console.log(userSelection);
}
else if (confirmLowerCase && confirmNumber) 
{
  userSelection = lowercase.concat(number);
  console.log(userSelection);
}
else if (confirmLowerCase && confirmSpecial) 
{
  userSelection = lowercase.concat(special);
  console.log(userSelection);
}
else if (confirmUpperCase && confirmNumber) 
{
  userSelection = upperCase.concat(number);
  console.log(userSelection);
}
else if (confirmUpperCase && confirmSpecial) 
{
  userSelection = upperCase.concat(special);
  console.log(userSelection);
}
else if (confirmNumber && confirmSpecial) 
{
  userSelection = numbers.concat(special);
  console.log(userSelection);
}
// if user selects only one criteria
else if (confirmLowerCase) 
{
  userSelection = lowercase;
  console.log(userSelection);
}
else if (confirmUpper) {
  userSelection = blankUpper.concat(uppercase);
  console.log(userSelection);
}
else if (confirmNumber) 
{
  userSelection = number;
  console.log(userSelection);
}
else if (confirmSpecial) 
{
  userSelection = special;
  console.log(userSelection);
};

var passwordBlank = [];

for (var i = 0; i < confirmLength; i++) 
{
  var options = userSelection[Math.floor(Math.random() * userSelection.length)];
  passwordBlank.push(options);
  console.log(options);
}

// Log and return password 
var password = passwordBlank.join("");
console.log("Your secure password is: " + password);
alert("Your secure password is: " + password);
return password;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
