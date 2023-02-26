// Assignment code here
var lowerCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; 
var specialCharacters = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "]", ";"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
 //var prompt = window.prompt("Choose Password Characters")

// event.preventDefault() -- keeps screen from submitting inputs and disappearing. 

// Write password to the #password input

function generatePassword() {
  console.log('THIS FUNCTION RAN')
  return 'some_password'
}

var test_var = generatePassword()

function iWillNeverRun() {
  console.log("THIS WILL NEVER SHOW UP... UNLESS I CALL IT")
}


function writePassword() {
  var password = generatePassword()  // getting reference error here from browser console.
  var passwordText = document.querySelector("#password");
  //document.getElementById("password").maxLength = "128";
  //document.getElementById("password").minLength = "8";
  //Math.random()
  passwordText.value = password;
  // console.log(password)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("generate");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
