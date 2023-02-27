// Assignment code here
// Character possibilities
const lowerCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numberCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; 
const symbolCharacters = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "]", ";"];

// Text input
const inputLength = document.querySelector("#input-length")

// Checkbox inputs
// checkbox inputs have a `.checked` attribute.
const inputSymbols = document.querySelector("#input-symbols")
const inputUppers = document.querySelector("#input-uppers")
const inputLowers = document.querySelector("#input-lowers")
const inputNumbers = document.querySelector("#input-numbers")



function generateString(length, characters) {
  let result = ' ';
  const charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}


function handleAcceptButtonClick() {
  // Verify 1 or more checkbox inputs are checked.
  // checkbox inputs have a `.checked` attribute.
  let input_checked = inputSymbols.checked || inputNumbers.checked || inputLowers.checked || inputUppers.checked
  let inputLengthValue = inputLength.value
  if (!input_checked) {
    window.alert("At least one criteria must be selected");
    return;
  }
  if (!inputLengthValue){
    window.alert("Input length cannot be blank");
    return;
  }

  let char_criteria = ''
  if (inputSymbols.checked) {
    char_criteria += symbolCharacters.join("")
  }
  if (inputNumbers.checked) {
    char_criteria += numberCharacters.join("")
  } 
  if (inputLowers.checked) {
    char_criteria += lowerCharacters.join("")
  }
  if (inputUppers.checked) {
    char_criteria += upperCharacters.join("")
  }

  let password = generateString(inputLengthValue, char_criteria)
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  // Close modal
  modal.style.display = "none";
}


var acceptButton = document.querySelector("#accept-button");
acceptButton.addEventListener("click", handleAcceptButtonClick);



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
