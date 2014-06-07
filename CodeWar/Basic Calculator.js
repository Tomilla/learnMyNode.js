// Clever solutions tend to be very creative or make use of obscure \
// language features. They usually are not code that you would want to \
// put into production.

/*
 * @strangeworks
 */
/*
  function calculate(num1, operation, num2) {
    var ops = new RegExp("[+-/*]");
    return !ops.test(operation) && num2 == 0 ? null
      : eval(num1+operation+num2);
  }
*/

// Best practice solutions tend to be a good balance of performance,
// readability and maintainability.

/**
 * Calculates num1 operation num2
 * @bbondy
 *
 * @param num1 The left operand
 * @param num2 The right operand
 * @param operation is one of '+', '-', '/' or '*'
 * @return The result or null if there was any kind of error.
 */
/*
  function calculate(num1, operation, num2) {

    // Make sure both numbers are actual numbers
    if (isNaN(parseFloat(num1)) || isNaN(parseFloat(num2)))
      return null;

    // Check if we have a supported operation
    if (operation === '+')
      return num1 + num2;
    else if (operation == '-')
      return num1 - num2;
    else if (operation == '*')
      return num1 * num2;
    // Divide by 0 is not allowed
    else if (operation == '/' && num2 !== 0)
      return num1 / num2;

    // Otherwise we have an invalid operation
    return null;
  }
*/

    ////////////////////////////////////////////////////////////////////
My solutions
function calculate(num1, operation, num2) {
  switch(operation) {
    case "+": return num1 + num2; break;
    case "-": return num1 - num2; break;
    case "/": return num2 != 0 ? num1 / num2 : null; break;
    case "*": return num1 * num2; break;
    default: return null;
  }
}

//Description:

/*
  Write a function called calculate that takes 3 values. The first and third values are numbers. The second value is a character. If the character is "+" , "-", "*", or "/", the function will return the result of the corresponding mathematical function on the two numbers. If the string is not one of the specified characters, the function should return null.

  calculate(2,"+", 4); //Should return 6
  calculate(6,"-", 1.5); //Should return 4.5
  calculate(-4,"*", 8); //Should return -32
  calculate(49,"/", -7); //Should return -7
  calculate(8,"m", 2); //Should return null
  calculate(4,"/",0) //should return null
  Keep in mind, you cannot divide by zero. If an attempt to divide by zero is made, return null.

  Fundamentals OperatorsControl FlowBasic Language Features
*/

//Test Cases:

/*
  Test.assertSimilar(calculate(3.2,"+", 8), 11.2, "3.2 + 8 = 11.2")
  Test.assertSimilar(calculate(3.2,"-", 8), -4.8, "3.2 - 8 = -4.8")
  Test.assertSimilar(calculate(3.2,"/", 8), 0.4, "3.2 / 8 = .4")
  Test.assertSimilar(calculate(3.2,"*", 8), 25.6, "3.2 * 8 = 25.6")
  Test.assertSimilar(calculate(-3,"+", 0), -3, "-3 + 0 = -3")
  Test.assertSimilar(calculate(-3,"-", 0), -3, "-3 - 0 = -3")
  Test.assertSimilar(calculate(-3,"/", 0), null, "-3 / 0 = null")
  Test.assertSimilar(calculate(-2, "/", -2), 1, "-2 / -2 = 1")
  Test.assertSimilar(calculate(-3,"*", 0), 0, "-3 * 0 = 0")
  Test.assertSimilar(calculate(-3,"w", 0), null, "-3 w 0 = null")
*/
