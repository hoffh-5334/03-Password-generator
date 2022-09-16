//Variables
var special 
var numbers 
var lowerCase 
var upperCase 

//Constants 
const SPECIAL_CHARACTERS = '!@#$%^&*();:.,<>';
const LOWERCASE_CHARACTERS = 'abcdefghijklmnopqrstuvwxyz';
const NUMERICAL_CHARACTERS = '0123456789';
const UPPERCASE_CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// GeneratePassword Function - Used to give a prompt window to initate the generate password sequence
function generatePassword() {
  let allPossibleChars = "";
  let PasswordLength = prompt("How many characters would you like your password to contain?");
  if (!PasswordLength) {
    return
  }

// Making sure the user is advised the length of the password must be between 8 and 128 characters
  if (PasswordLength < 8 || PasswordLength > 128) {
    return alert("Please try again & select a value between 8 and 128")
  }

// Once user has chosen a value between 8-128, they can select further acceptance critera

// Special Characters
  special = confirm("Click OK if you would like to use special characters, click cancel if you do not. ")
  if (special) {
    allPossibleChars = allPossibleChars.concat(SPECIAL_CHARACTERS)
  }

// Numbers
  numbers = confirm("Click OK if you would like to use numbers, click cancel if you do not. ")
  if (numbers) {
    allPossibleChars = allPossibleChars.concat(NUMERICAL_CHARACTERS)
  }

// Lowercase
  lowerCase = confirm("Click OK if you would like to use lowercase letters, click cancel if you do not. ")
  if (lowerCase) {
    allPossibleChars = allPossibleChars.concat(LOWERCASE_CHARACTERS)
  }

// Uppercase
  upperCase = confirm("Click OK if you would like to use uppercase letters, click cancel if you do not. ")
  if (upperCase) {
    allPossibleChars = allPossibleChars.concat(UPPERCASE_CHARACTERS)
  }

// Did user select at least one character type?
  if (special === false && numbers === false && lowerCase === false && upperCase === false) {
    return alert("Please try again. Passowrd must contain at least one character type.")
  }

// Once user has selected the characters they want to use, we place those values in a string and it will loop until the password is valid
  var notValid = true;
  var validPassword = "";
  while (notValid) {
    let pass = generatePossible(PasswordLength, allPossibleChars);
    let valid = checkPasswordValid(pass);
    if (valid) {
      notValid = false;
      validPassword = pass;
    }
  }
  return validPassword;
}

// Function to loop a random selection of characters based on the length chose by the user
function generatePossible(userLength, concatString) {
  var possPassword = "";
  for (var n = 0; n < userLength; n++) {
    possPassword += concatString.charAt(Math.floor(Math.random() * concatString.length));
  }
  return possPassword;
}

// is password valid?
function checkPasswordValid(passedCheck) {
  if (special) {
    let = commonChar(SPECIAL_CHARACTERS, passedCheck);
  }
  if (numbers) {
    let = commonChar(NUMERICAL_CHARACTERS, passedCheck);
  }
  if (lowerCase) {
    let = commonChar(LOWERCASE_CHARACTERS, passedCheck);
  }
  if (upperCase) {
    let = commonChar(UPPERCASE_CHARACTERS, passedCheck);
  }
  return true;
}

// Check to see common characters
function commonChar(charSetString, passwordTest) {
  for (let i = 0; i < passwordTest.length; i++) {
    if (charSetString.includes(passwordTest[i])) {
      return true;
    }
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
