
//Holds the empty array to store all the potential values for the password
var passwordPossibilities = [
    uppercase = [],
    lowercase = [],
    special = [],
    numeric = []
]

//Creates all uppercase letters
function genAlphabetUpper() {
    var alphabetUpper = [];
    for (var i = 65; i < 91; i++) {
        alphabetUpper.push(String.fromCharCode(i));

    }
    return alphabetUpper;
}
var alphabetUpper = genAlphabetUpper();
uppercase.push(alphabetUpper);


//Creates all lowercase letters
function genAlphabetLower() {
    var alphabetLower = [];
    for (var i = 97; i < 123; i++) {
        alphabetLower.push(String.fromCharCode(i));
    }
    return alphabetLower;
}
var alphabetLower = genAlphabetLower();
lowercase.push(alphabetLower);

//Creates all Numeric Characters
function genAlphabetNumeric() {
    var alphabetNumeric = [];
    for (var i = 48; i < 58; i++) {
        alphabetNumeric.push(String.fromCharCode(i));
    }
    return alphabetNumeric;
}
var alphabetNumeric = genAlphabetNumeric();
numeric.push(alphabetNumeric);

//Creates all special characters
function genAlphabetSpecial() {
    var alphabetSpecial = [];
    for (var i = 33; i < 47; i++) {
        alphabetSpecial.push(String.fromCharCode(i));
    }
    alphabetSpecial
    return alphabetSpecial;
}
var alphabetSpecial = genAlphabetSpecial();
special.push(alphabetSpecial);



//This is the main function of the program
function getPasswordOption() {
    var length = parseInt(
        prompt('How many characters would you like your password to contain?')
    );

    if (isNaN(length)) {
        alert('Password length must be a number')
        return;
    }

    if (length < 8) {
        alert('Password length must be greater than 8')
        return;
    }

    if (length > 128) {
        alert('Password length must be less than 128')
        return;
    }

    var uppercaseChars = confirm('Do you want to you use upper case characters?')
    var lowercaseChars = confirm('Do you want to you use lower case characters?')
    var specialChars = confirm('Do you want to you use special characters?')
    var numericChars = confirm('Do you want to you use numeric characters?')

    if (!specialChars && !numericChars && !uppercaseChars && !lowercaseChars) {
        alert('You must select at least on of the options to create your password')
        return;
    }

    var passwordOption = {
        uppercaseChars,
        lowercaseChars,
        specialChars,
        numericChars,
    };



    //Creates a random number for the length of each corresponding array to assign a random letter or character to the password
    function randomNumbers(randStart) {
        if (randStart < 2) {
            var randNumber = Math.floor(Math.random() * 26)
            return randNumber
        }
        else if (randStart === 2) {
            var randNumber = Math.floor(Math.random() * 14)
            return randNumber
        }
        else {
            var randNumber = Math.floor(Math.random() * 10)
            return randNumber
        }
    }

    //Password Hasher version 1.0 for all the password combinations that are aligned and can accept a range between example 1 -3
    function passwordHasher(max, min) {
        var myArray = []
        for (let i = 0; i < length; i++) {

            var allCharacters = Math.floor(Math.random() * (max - min + 1) + min);
            randomNumbers(allCharacters);
            var passwordArrangment = passwordPossibilities[allCharacters][0][randomNumbers()]
            myArray.push(passwordArrangment)

        }
        return myArray.join("")
    }

    //Password Hasher version 2.0 for the 2 selections that aren's aligned so nicely. For example it will allow you to grab 0 and 2 for your first array index number followed by a random number based on if the starter number is below a certain value
    function passwordHasher2(num1, num2) {
        var myArray = []
        for (let i = 0; i < length / 2; i++) {



            var passwordArrangment = passwordPossibilities[num1][0][randomNumbers(num1)]
            myArray.push(passwordArrangment)

            var passwordArrangment = passwordPossibilities[num2][0][randomNumbers(num2)]
            myArray.push(passwordArrangment)
        }
        return myArray.join("")
    }

    //Finally the Password Hasher version 3.0! This allows you to select three different first array indexs that aren't in order numbers for example 0, 2, 3
    function passwordHasher3(num1, num2, num3) {
        var myArray = []
        for (let i = 0; i < length / 3; i++) {
            var passwordArrangment = passwordPossibilities[num1][0][randomNumbers(num1)]
            myArray.push(passwordArrangment)
            var passwordArrangment = passwordPossibilities[num2][0][randomNumbers(num2)]
            myArray.push(passwordArrangment)
            var passwordArrangment = passwordPossibilities[num3][0][randomNumbers(num3)]
            myArray.push(passwordArrangment)
        }
        return myArray.join("")
    }

    //Boat load of if and else if statements to run through all the possible outcomes. Definitely not the most efficient but I couldn't think of any other way to do it
    if (uppercaseChars && lowercaseChars && specialChars && numericChars) {

        document.getElementById("password").innerHTML = passwordHasher(3, 0)

    }
    else if (uppercaseChars && lowercaseChars && specialChars) {

        document.getElementById("password").innerHTML = passwordHasher(2, 0)

    }
    else if (uppercaseChars && specialChars && numericChars) {

        document.getElementById("password").innerHTML = passwordHasher3(0, 2, 3)

    }
    else if (uppercaseChars && lowercaseChars && numericChars) {

        document.getElementById("password").innerHTML = passwordHasher3(0, 1, 3)

    }
    else if (lowercaseChars && specialChars && numericChars) {

        document.getElementById("password").innerHTML = passwordHasher(3, 1)

    }
    else if (uppercaseChars && lowercaseChars) {

        document.getElementById("password").innerHTML = passwordHasher(1, 0)

    }
    else if (lowercaseChars && specialChars) {

        document.getElementById("password").innerHTML = passwordHasher(2, 1)

    }

    else if (specialChars && numericChars) {

        document.getElementById("password").innerHTML = passwordHasher(3, 2)

    }

    else if (uppercaseChars && specialChars) {

        document.getElementById("password").innerHTML = passwordHasher2(0, 2)

    }
    else if (uppercaseChars && numericChars) {

        document.getElementById("password").innerHTML = passwordHasher2(0, 3)

    }
    else if (lowercaseChars && specialChars) {

        document.getElementById("password").innerHTML = passwordHasher2(1, 2)

    }
    else if (lowercaseChars && numericChars) {

        document.getElementById("password").innerHTML = passwordHasher2(1, 3)

    }
    else if (specialChars) {

        document.getElementById("password").innerHTML = passwordHasher(2, 2)

    }
    else if (numericChars) {

        document.getElementById("password").innerHTML = passwordHasher(3, 3)

    }
    else if (lowercaseChars) {

        document.getElementById("password").innerHTML = passwordHasher(1, 1)

    }
    else if (uppercaseChars) {

        document.getElementById("password").innerHTML = passwordHasher(0, 0)

    }

}







document.getElementById('generate').addEventListener('click', function () {
    getPasswordOption();
})


