upperCase.addEventListener("click", addUpper);
lowerCase.addEventListener("click", addLower);
number.addEventListener("click", addNumbers);
symbol.addEventListener("click", addSymbols);

var passwordCharacters = "";
let charUpper = true;
let charLower = true;
let charNumber = true;
let charSymbol = true;

function addUpper() {
    charUpper = !charUpper;
    console.log(charUpper);
}
function addLower() {
    charLower = !charLower;
    console.log(charLower);
}
function addNumbers() {
    charNumber = !charNumber;
    console.log(charNumber);
}
function addSymbols() {
    charSymbol = !charSymbol;
    console.log(charSymbol);
}

function getPasswordCharacters() {
    passwordCharacters = "";
    if (charUpper == true) {
        passwordCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else {
        passwordCharacters = passwordCharacters.replace("ABCDEFGHIJKLMNOPQRSTUVWXYZ", "");
    }
    if (charLower == true) {
        passwordCharacters += "abcdefghijklmnopqrstuvwxyz";
    } else {
        passwordCharacters = passwordCharacters.replace("abcdefghijklmnopqrstuvwxyz", "");
    }
    if (charNumber == true) {
        passwordCharacters += "1234567890";
    } else {
        passwordCharacters = passwordCharacters.replace("1234567890", "");
    }
    if (charSymbol == true) {
        passwordCharacters += "!@#$%^&*";
    } else {
        passwordCharacters = passwordCharacters.replace("!@#$%^&*", "");
    }
    console.log(passwordCharacters);
}

function generatePassword() {
    getPasswordCharacters();
    let module = generateInt() % passwordCharacters.length;
    console.log(module);
}

function generateInt() {
    let x = 0;
    while (x < 100) {
        let array = new Uint16Array(1);
        self.crypto.getRandomValues(array);
        for (i of array) {
            x = i;
        }
    }
    return x;
}

function savePassword() {
    console.log("Password Saved");
    let website = document.getElementById("website").value;
    let username = document.getElementById("username").value;
    let passwordLength = document.getElementById("passwordLength").value;
    let password = document.getElementById("password").value;
}