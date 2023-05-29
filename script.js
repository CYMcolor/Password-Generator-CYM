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


//init arrays ------------------------------------------
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

//add array to pool if selected
if(lowerSelected)   {  pool = pool.concat(lower); }
if(upperSelected)   {  pool = pool.concat(upper); }
if(numericSelected) {  pool = pool.concat(numeric); }
if(specialSelected) {  pool = pool.concat(special); }


//generate password -------------------------------------------------

var numOfChar = 8;
var word = Array();
//adding a new char randomly chosen from pool for each numOFChar
for (let i = 0; i < numOfChar; i++)
{
  word[i] = pool[Math.floor(Math.random()* pool.length)];
}
console.log(numOfChar);
console.log(word);


// guarantee the selected types charcater is in word
//makes an array of 4 random indexes to potentially replace
var gar = Array();
var curr;
for (let i = 0; i < 4; i++)
{
  //makes random index
  curr = Math.floor(Math.random()* numOfChar);

  if(!gar.includes(curr)) //if there are no repeats add new number
  {
    gar[i] = curr;
  }
  else //if there are repeats
  {
    while(gar.includes(curr)) //loops until number is no longer a repeat
    {
      curr = Math.floor(Math.random()* numOfChar);
    }
    gar[i] = curr;
  }
  
}
console.log(gar);

//if selected replaces char using randomly generated index form gar
if(lowerSelected)   {  word[gar[0]] = lower[Math.floor(Math.random()* lower.length)] }
if(upperSelected)   {  word[gar[1]] = upper[Math.floor(Math.random()* upper.length)] }
if(numericSelected) {  word[gar[2]] = numeric[Math.floor(Math.random()* numeric.length)] }
if(specialSelected) {  word[gar[3]] = special[Math.floor(Math.random()* special.length)] }
console.log(word);

//convert word to string
//join combines the char with seperator in parameter, and trim removes white spaces
var newWord = word.join('').trim();
console.log(newWord);


















/*// random length
var min = 8;
var max = 128;
var numOfChar = Math.floor(Math.random()* (max - min + 1) + min);
//*/ //end of ranfomlength