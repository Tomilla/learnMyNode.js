greet = (inputName, drinkMartinis) ->
    if (drinkMartinis)
        return 'Hello ' + inputName + ', you look so sexy today'
    else
        return "Hello " + inputName

module.exports = greet
