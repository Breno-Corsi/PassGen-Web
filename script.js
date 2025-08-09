LETTERS.addEventListener("click", addLETTERS);
letters.addEventListener("click", addLetters);
numbers.addEventListener("click", addNumbers);
symbols.addEventListener("click", addSymbols);

var passwordCharacters = "";
let charLETTERS = true;
let charLetters = true;
let charNumbers = true;
let charSymbols = true;

function addLETTERS() {
    charLETTERS = !charLETTERS;
    console.log(charLETTERS);
}
function addLetters() {
    charLetters = !charLetters;
    console.log(charLetters);
}
function addNumbers() {
    charNumbers = !charNumbers;
    console.log(charNumbers);
}
function addSymbols() {
    charSymbols = !charSymbols;
    console.log(charSymbols);
}

function generatePassword() {
    console.log("Password Generated");
    
    //passwordCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //passwordCharacters += "abcdefghijklmnopqrstuvwxyz";
    //passwordCharacters += "1234567890";
    //passwordCharacters += "!@#$%^&*";
    //console.log(passwordCharacters);
}

function savePassword() {
    console.log("Password Saved");
    let website = document.getElementById("website").value;
    let username = document.getElementById("username").value;
    let passwordLength = document.getElementById("passwordLength").value;
    let password = document.getElementById("password").value;

    console.log(website);
    console.log(username);
    console.log(passwordLength);
    console.log(password);
}