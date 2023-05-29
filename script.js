// Assignment code here

/*  //starter code
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
//*/
//////////////////////////////////////////////////////////////


//init arrays -------------------------
var pool = Array();

var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upper = Array();
for( let i = 0; i < lower.length; i++)
{
  upper[i] = lower[i].toUpperCase();
}
var numeric = ["0","1","2","3","4","5","6","7","8","9"];

//the special array: " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
// " = \u0022, ' = \u0027, \ = \u005c
var special = [" ", "!", "\u0022", "#", "$", "%", "&", "\u0027", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";",
              "<", "=", ">", "?", "@", "[", "\u005c", "]", "^", "_", "`", "{", "|", "~"];


//establish booleans ------------------------------------
var lowerSelected = true;
var upperSelected = true;
var numericSelected = false;
var specialSelected = true;

if(lowerSelected)   {  pool = pool.concat(lower); }
if(upperSelected)   {  pool = pool.concat(upper); }
if(numericSelected) {  pool = pool.concat(numeric); }
if(specialSelected) {  pool = pool.concat(special); }


//generate password -------------------------------------------------
var min = 8;
var max = 128;
var numOfChar = Math.floor(Math.random()* (max - min + 1) + min);

var word = "";
//adding a new char randomly chosen from pool for each numOFChar
for (let i = 0; i < numOfChar; i++)
{
  word += pool[Math.floor(Math.random()* pool.length)];
}


console.log(numOfChar);
console.log(word);