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
let showPassword = false;
let password = "";

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
    password = "";
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
    showPasswordText();
}

function getPasswordText() {
    e = document.getElementById("password").value;
    return e;
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

function toggleShowPassword() {
    if (getPasswordText() != "*".repeat(getPasswordText().length)) {
        password = getPasswordText();
    }
    showPassword = !showPassword;
    showPasswordText();

    const btn = document.getElementById("show-password");
    if (btn.classList.contains("active")) {
        btn.classList.remove("active");
    } else {
        btn.classList.add("active");
    }
}

function showPasswordText() {
    if (showPassword == true) {
        passwordBox.value = password;
    } else {
        hiddenPassword = "*".repeat(getPasswordText().length);
        if (getPasswordText() == hiddenPassword) {
            hiddenPassword = "*".repeat(password.length);
        }
        passwordBox.value = hiddenPassword;
    }
}

function copyPassword() {
    navigator.clipboard.writeText(password);
    const btn = document.getElementById("copy-password");
    btn.classList.add("active");
    setTimeout(() => {
        btn.classList.remove("active");
    }, 2000);

}

function savePassword() {
    console.log("Password Saved");
    let website = document.getElementById("website").value;
    let username = document.getElementById("username").value;
    password = document.getElementById("password").value;

    if (website == "" || username == "") {
        alert("Please fill website and username field!");
        return false;
    }
}