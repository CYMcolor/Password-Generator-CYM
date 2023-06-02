// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //change color to red if invalid inputs and reset to black if valid
  if(!checkNum(numOfChar) || !booleanChecks())
  {
    passwordText.setAttribute("style", "color: red");
  }
  else{
    passwordText.setAttribute("style", "color: black");
  }
  passwordText.value = password;

}

// add input for word length
var getNum = function() 
{
  var inputLength = document.getElementById("charLength").value;
  
  return inputLength;
};

//check if unmber is in the range of 8-128
var checkNum = function(number)
{
  if(isNaN(number)) //makes sure that non numbers are also invalid
  {
    return false;
  }
  if(number < 8 || number > 128)
  {
   return false;   
  }  
  return true;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Init||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

//init arrays ------------------------------------------
var pool = Array();

var lower = "abcdefghijklmnopqrstuvwxyz".split('');
var upper = Array();
for( let i = 0; i < lower.length; i++)
{
  upper[i] = lower[i].toUpperCase();
}
var numeric = "0123456789".split('');

//the special array: " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
// " = \u0022, ' = \u0027, \ = \u005c
var special = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";",
                "<", "=", ">", "?", "@", "[", "\u005c", "]", "^", "_", "`", "{", "|", "}", "~"];

//establish booleans ------------------------------------
var lowerSelected = false;
var upperSelected = false;
var numericSelected = false;
var specialSelected = false;
// length of password
var numOfChar = 8;

//end of Init||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
function booleanChecks()
{
  //sets the boolean values to user checkboxes
  lowerSelected = document.getElementById("lowerCheck").checked;
  upperSelected = document.getElementById("upperCheck").checked;
  numericSelected = document.getElementById("numericCheck").checked;
  specialSelected = document.getElementById("specialCheck").checked;
  
  //if all are unchecked
  if(!lowerSelected &&  !upperSelected && !numericSelected && !specialSelected)
  {
    return false;
  }  
  else return true;

}

function generatePool()
{
   //refresh pool
   pool = Array();
   //add array to pool if selected
   if(lowerSelected)   {  pool = pool.concat(lower); }
   if(upperSelected)   {  pool = pool.concat(upper); }
   if(numericSelected) {  pool = pool.concat(numeric); }
   if(specialSelected) {  pool = pool.concat(special); }
}

function generatePassword()
{
  //recieves character length input value
  numOfChar = getNum();
  //checks validity and if wrong returns  appropiate message
  // also assign boolean variables
  if(!checkNum(numOfChar) && !booleanChecks())
  {
    return "Error: Password length is invalid \n and at least one character type must be checked!"; 
  } 
  else if (!checkNum(numOfChar) && booleanChecks())
  {
    return "Error: Password length is invalid"
  }
  else if (checkNum(numOfChar) && !booleanChecks())
  {
    return "Error: At least one character type must be checked!"
  }
  //moves on to rest of code if there are no invalid inputs 

  //creates pool of characters
  generatePool();

  var word = Array();
  //adding a new char randomly chosen from pool for each numOfChar
  for (let i = 0; i < numOfChar; i++)
  {
    word[i] = pool[Math.floor(Math.random()* pool.length)];
  }

  // guarantee the selected types charcater is in word------------
  //makes an array of 4 random indexes to potentially replace
  var gar = randomIndex();

  //if selected replaces char using randomly generated indexes with selected charcter type 
  if(lowerSelected)   
    {  word[gar[0]] = lower[Math.floor(Math.random()* lower.length)] }
  if(upperSelected)   
    {  word[gar[1]] = upper[Math.floor(Math.random()* upper.length)] }
  if(numericSelected) 
    {  word[gar[2]] = numeric[Math.floor(Math.random()* numeric.length)] }
  if(specialSelected)
    {  word[gar[3]] = special[Math.floor(Math.random()* special.length)] }

  //convert word to string
  //join combines the char with seperator in parameter, and trim removes white spaces
  
  return word.join('').trim();

}

function randomIndex()
{
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
  console.log("lower, upper, numeric, special");
  console.log(gar);

  return gar;
}
