upperCase.addEventListener("click", addUpper);
lowerCase.addEventListener("click", addLower);
number.addEventListener("click", addNumbers);
symbol.addEventListener("click", addSymbols);

let passwordCharacters = "";
let charUpper = true;
let charLower = true;
let charNumber = true;
let charSymbol = true;
let passwordBox = document.getElementById("password");

function addUpper() {
    charUpper = !charUpper;
}
function addLower() {
    charLower = !charLower;
}
function addNumbers() {
    charNumber = !charNumber;
}
function addSymbols() {
    charSymbol = !charSymbol;
}

function getPasswordCharacters() {
    passwordCharacters = "";
    switchCheckbox(charUpper, "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    switchCheckbox(charLower, "abcdefghijklmnopqrstuvwxyz");
    switchCheckbox(charNumber, "1234567890");
    switchCheckbox(charSymbol, "!@#$%^&*");

    passwordCharacters = passwordCharacters.split('').sort(function(){return 0.5-Math.random()}).join('');
}

function switchCheckbox(varName, textInput) {
    if (varName == true) {
        passwordCharacters += textInput;
    } else {
        passwordCharacters = passwordCharacters.replace(textInput);
    }
}

function generatePassword() {
    getPasswordCharacters();
    let password = "";
    let passwordLength = getPasswordLength();
    if (passwordLength == false) {
        return false;
    }
    while (passwordLength > 0) {
        let module = getModule();
        let a = passwordCharacters.slice(module -1, module);
        password += a;
        passwordLength--;
    }
    console.log(password);
    passwordBox.value = password;
}

function getPasswordLength() {
    let passwordLength = document.getElementById("passwordLength").value;
    if (passwordLength == "") {
        alert("Please, input password length!");
        return false;
    } else if (passwordLength > 255) {
        alert("Max password length is 255 characters!");
        return false;
    } else if (passwordLength < 1) {
        alert("Min password length is 1 chararcters!");
        return false;
    }
    return passwordLength;
}

function getModule() {
    let i = 0;
    while (i < 1) {
        i = generateInt() % passwordCharacters.length;
    }
    return i;
}

function generateInt() {
    let x = 0;
    while (x < 100) {
        let array = new Uint8Array(1);
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
    let password = document.getElementById("password").value;
}