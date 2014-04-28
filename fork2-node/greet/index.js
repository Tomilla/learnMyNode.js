module.exports = function greet(inputName, drunk) {
    if (drunk) {
        return 'Hello ' + inputName + ', you look so sexy today'
    }
    else {
        return "Hello " + inputName
    }
}
