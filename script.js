// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
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

var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upper = Array();
for( let i = 0; i < lower.length; i++)
{
  upper[i] = lower[i].toUpperCase();
}
var numeric = ["0","1","2","3","4","5","6","7","8","9"];

//the special array: " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
// " = \u0022, ' = \u0027, \ = \u005c
var special = [" ", "!", "\u0022", "#", "$", "%", "&", "\u0027", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";",
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
  if(document.getElementById("lowerCheck").checked)
    lowerSelected = true;
  else
    lowerSelected = false;
  if(document.getElementById("upperCheck").checked)
    upperSelected =true;
  else
    upperSelected = false;
  if(document.getElementById("numericCheck").checked)
    numericSelected =true;
  else  
    numericSelected = false;
  if(document.getElementById("specialCheck").checked)
    specialSelected =true; 
  else
    specialSelected = false; 
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
  //checks validity and if wrong returns message
  if(!checkNum(numOfChar))
  {
    return "Warning Character Length is Invalid!"; 
  } 
   // assign boolean variables
  if(!booleanChecks())
  {
    return "At least one character type must be checked!"
  }
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
