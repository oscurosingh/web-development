/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/
function faultycalculator(num1, num2, operator) {
  const random = Math.random();
  if (random < 0.1) {
    return faultyoperation(num1, num2, operator);
  } else {
    return operation(num1, num2, operator);
  }
}
function faultyoperation(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 - num2; // faulty addition
    case "-":
      return num1 / num2; // faulty subtraction
    case "*":
      return num1 + num2; // faulty multiplication
    case "/":
      return Math.pow(num1, num2); // faulty division
    default:
      return "Invalid operator";
  }
}
function operation(num1, num2, operator) {
  // Perform correct operation
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Invalid operator";
  }
}
for (let i = 0; i < 100; i++) {
  console.log(faultycalculator(10, 5, "+"));
}
