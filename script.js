LETTERS.addEventListener("click", addLETTERS);
letters.addEventListener("click", addLetters);
numbers.addEventListener("click", addNumbers);
symbols.addEventListener("click", addSymbols);

function addLETTERS() {
    console.log("LETTERS");
}
function addLetters() {
    console.log("letters");
}
function addNumbers() {
    console.log("numbers");
}
function addSymbols() {
    console.log("symbols");
}

function generatePassword() {
    console.log("Password Generated");
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