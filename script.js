var password = {
  typeChars: [-1,-1,-1,-1],
  len:0,
  literal:""
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var retPassword = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = retPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  password.literal=""
  queryRules();
  calculateCharsOfType();
  genCompliantString();

  return password.literal;
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
    if(confirm("Include lowercase characters (Ok), or do not include (Cancel)?")==false){password.typeChars[0]=0}
    if(confirm("Include uppercase characters (Ok), or do not include (Cancel)?")==false){password.typeChars[1]=0}
    if(confirm("Include numeric characters (Ok), or do not include (Cancel)?")==false){password.typeChars[2]=0}
    if(confirm("Include special characters (Ok), or do not include (Cancel)?")==false){password.typeChars[3]=0}      
    console.log(password.typeChars[0]+":"+password.typeChars[1]+":"+password.typeChars[2]+":"+password.typeChars[3]);
    //my input should be validated and at least one character type should be selected
    if(password.typeChars[0]==0 && password.typeChars[1]==0 && password.typeChars[2]==0 && password.typeChars[3]==0) {
      alert("You must include at least one type of character for password generation.  Please try again")
      password.typeChars[0]=-1;
      password.typeChars[1]=-1;
      password.typeChars[2]=-1;
      password.typeChars[3]=-1;
    } else {
      validRules=true;
    }      
  }
}

function calculateCharsOfType() {
  var charsRemaining=password.len;
  var intDiv=parseInt(password.len/(password.typeChars[0]+password.typeChars[1]+password.typeChars[2]+password.typeChars[3])*-1);
  var lastValidType=0;

  if(password.typeChars[0]==-1){
    password.typeChars[0]=intDiv;
    charsRemaining-=intDiv;
    lastValidType=0;
  }
  if(password.typeChars[1]==-1){
    lastValidType=1;
    if(charsRemaining>intDiv){
      password.typeChars[1]=intDiv;
      charsRemaining-=intDiv;  
    } else {
      password.typeChars[1]=charsRemaining;
      charsRemaining=0;  
    }
  }
  if(password.typeChars[2]==-1){
    lastValidType=2;
    if(charsRemaining>intDiv){
      password.typeChars[2]=intDiv;
      charsRemaining-=intDiv;  
    } else {
      password.typeChars[2]=charsRemaining;
      charsRemaining=0;  
    }
  }
  if(password.typeChars[3]==-1){
    lastValidType=3;
    if(charsRemaining>intDiv){
      password.typeChars[3]=intDiv;
      charsRemaining-=intDiv;  
    } else {
      password.typeChars[3]=charsRemaining;
      charsRemaining=0;  
    }
  }
  if(charsRemaining>0){
    password.typeChars[lastValidType]+=charsRemaining
  }
}

function getRandomNumberUpTo(maxLim){
  var calcValue=parseInt(Math.random()*(maxLim+1));
  return(calcValue);
}

function genCompliantString() {
  var charsRemaining=password.len;
  var whichType=0;
  var selectedChar="";
  var charPosition=0;
  var i;

  const legalChars = ["abcdefghijklmnopqrstuvwxyz","ABCDEFGHIJKLMNOPQRSTUVWXYZ","0123456789","~!@#$%^&*()"];
  const legalCounts = [26,26,10,11]

  while (charsRemaining!=0) {
    i+=1
    whichType=getRandomNumberUpTo(3);

    if(password.typeChars[whichType]>0){
      charSet=legalChars[whichType];
      charPosition=getRandomNumberUpTo(legalCounts[whichType]-1);
      selectedChar=legalChars[whichType].substring(charPosition,charPosition+1);
      password.literal+=selectedChar;
      charsRemaining-=1;
      password.typeChars[whichType]-=1;
    }
  }
  return;
}