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

    var specialChars = confirm('Do you want to you use special characters?')
    var numericChars = confirm('Do you want to you use numeric characters?')
    var uppercaseChars = confirm('Do you want to you use upper case characters?')
    var lowercaseChars = confirm('Do you want to you use lower case characters?')

    if (!specialChars && !numericChars && !uppercaseChars && !lowercaseChars) {
        alert('You must select at least on of the options to create your password')
        return;
    }

    var passwordOption = {
        specialChars,
        numericChars,
        uppercaseChars,
        lowercaseChars
    };
    console.log(specialChars)
    if (specialChars) {
        console.log('yes my nigs')
    }
    return passwordOption;
}




document.getElementById('generate').addEventListener('click', function () {
    var answ = getPasswordOption();
    console.log(answ)
    var special = passwordOption.specialChars;
    console.log(special)
})
