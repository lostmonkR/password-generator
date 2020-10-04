// Assignment Code
var generateBtn = document.querySelector("#generate");
//characters for the function
const specialCharacters = "!@#$%^&*()_+-=`~{}|[]\:;<>?,./"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// password function
function generatePassword(){
  var passwordlength = prompt("please enter the numbers of characters of you passord (8~128)");
  var numbers = confirm("Do you want numbers in your password?");
  var lowerCases = confirm("Do you want lowercases in your password?");
  var upperCases = confirm("Do you want uppercases in your password?");
  var special = confirm("Do you want special characters in your password?");
  // this is a minimum count for numbers, lowerCases, upperCases & specialCharacters
  var minimumCount = 0;
  // Empty minimums for numbers, lowerCases, upperCases & specialCharacters
  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";
  // Generator functions** ??? do not understand 
  var functionArray = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },
    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },
    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },
    getSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
}
};
// Checks to make sure user selected ok for all and uses empty minimums from above
if (numbers === true) {
  minimumNumbers = functionArray.getNumbers();
  minimumCount++;
}
if (lowerCases === true) {
  minimumLowerCases = functionArray.getLowerCases();
  minimumCount++;
}
if (upperCases === true) {
  minimumUpperCases = functionArray.getUpperCases();
  minimumCount++;
}
if (special === true) {
  minimumSpecialCharacters = functionArray.getSpecialCharacters();
  minimumCount++;
}
// empty string variable for the for loop below
var randomPasswordGenerated = "";
// loop getting random characters
for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
  var randomNumberPicked = Math.floor(Math.random() * 4);
  randomPasswordGenerated += randomNumberPicked;
}
// to make sure characters are added to the password
randomPasswordGenerated += minimumNumbers;
randomPasswordGenerated += minimumLowerCases;
randomPasswordGenerated += minimumUpperCases;
randomPasswordGenerated += minimumSpecialCharacters;
return randomPasswordGenerated;
}
<div class="wrapper">
  <header>
    <h1>Password Generator</h1>
  </header>
  <div class="card">
    <div class="card-header">
      <h2>Generate a Password</h2>
    </div>
    <div class="card-body">
      <textarea id="password" placeholder="Your Secure Password" aria-label="Generated Password"></textarea>
    </div>
    <div class="card-footer">
      <button id="generateBtn" class="btn">Generate Password</button>
    </div>
  </div>
</div>
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


