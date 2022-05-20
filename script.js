var password = {
  len:0

}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  queryRules();
  return "test";
}

function queryRules() {
  var validLength=false;

  //length of at least 8 characters and no more than 128 characters
  while (validLength==false) {
    password.len=prompt("Enter desired password length from 8 to 128 characters")
    if(password.len!=null){
        if(password.len>=8 && password.len<=128) {
            validLength=true;
        }
    }      
}

  //confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  //my input should be validated and at least one character type should be selected
}