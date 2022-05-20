var password = {
  len:0,
  lcChars:-1,
  ucChars:-1,
  numChars:-1,
  specialChars:-1
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
  var validRules=false;

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
  while (validRules==false) {
    if(confirm("Include lowercase characters (Ok), or do not include (Cancel)?")==false){password.lcChars=0}
    if(confirm("Include uppercase characters (Ok), or do not include (Cancel)?")==false){password.ucChars=0}
    if(confirm("Include numeric characters (Ok), or do not include (Cancel)?")==false){password.numChars=0}
    if(confirm("Include special characters (Ok), or do not include (Cancel)?")==false){password.specialChars=0}      
    if(password.lcChars!=0 || password.ucChars!=0 || password.numChars!=0 || password.specialChars!=0) {
      validRules=true;}      
    else {
      alert("You must include at least one type of character for password generation.  Please try again")
      password.lcChars=-1
      password.ucChars=-1
      password.numChars=-1
      password.specialChars=-1
      }
  }
  

  //my input should be validated and at least one character type should be selected
}