var generateBtn =document.querySelector("#generate");

var lowercaseChar ="'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'";
var uppercaseChar ="'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'R', 'U', 'V', 'W', 'X', 'Y', 'Z'";
var numericalChar ="'0', '1', '2', '3', '4', '5', '6', '7', '8', '9'";
var specialChar ="'@', '%', '+', '\\', '/', ''', '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'";
var finalPassword =[];
function generatePassword(){


var passwordChar ="";

var passwordLenghtUser = prompt("How many charecters would you like your Password to be? Password must be between 8-128 charecters.");
passwordLenghtUser = parseInt(passwordLenghtUser);

if (passwordLenghtUser < 8){
alert("Password must contain more than 7 charecters!!!!");
return "";
}
if (passwordLenghtUser > 128){
  alert("Password cant contain more than 128 charecters!!!!!!!");
  return "";
}

var lowercaseCharecterChoice = confirm(" Need some lowercase charecters?");
if (lowercaseCharecterChoice){
  passwordChar += lowercaseChar;
}

var uppercaseCharecterchoice = confirm ("Now lets get a few uppercase letters?");
if (uppercaseCharecterchoice){
  passwordChar += uppercaseChar;
}
var numericalCharecterChoice = confirm("Lets add a couple of numbers to your password?");
if(numericalCharecterChoice){
  passwordChar += numericalChar;

}
var specialCharecterChoice = confirm("Almost done! Add some Special Charecters?");
if(specialCharecterChoice){
  passwordChar += specialChar;

}
console.log (passwordChar)
passwordChar.split()

for (var i = 0; i < passwordLenghtUser; i++){
  var index = passwordChar[Math.floor(Math.random() * passwordChar.length)]
  
finalPassword.push(index)
console.log(finalPassword)
}
console.log(finalPassword.join(""))
return finalPassword.join("")

}
generateBtn.addEventListener("click", writePassword);





function writePassword(){
  var password = generatePassword();
  var pwTextArea = document.querySelector("#password");
  pwTextArea.value =password;
  }





