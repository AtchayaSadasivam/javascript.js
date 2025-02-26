// Using the square function

var square;
var cube;
var squareRoot;

square = function (numberToSquare) {
  var result;
  result = numberToSquare * numberToSquare;
  console.log(numberToSquare + " * " + numberToSquare + " = " + result);
};
cube = function (numberToCube) {
  var result;
  result = numberToCube * numberToCube * numberToCube;
  console.log(numberToCube + " * "+ numberToCube + " * "+ numberToCube + " = " + result);
}
squareRoot = function (number) {
   var result;
   result =  Math.sqrt(number);
   console.log("The squareRoot of" + number + " = " + result);
}



square(10);
square(-2);
square(1111);
square(0.5);

cube(2);
cube(4);
cube(27);
cube(12);

squareRoot(9);



/* Further Adventures
 *
 * 1) Define a cube function that cubes
 *    any number passed in as an argument.
 *
 * 2) Call your cube function four times
 *    with different arguments to test it.
 *
 * Math.sqrt is a built-in function to find
 * the square root of a number.
 * e.g. Math.sqrt(9) finds the square root of 9.
 *
 * 3) Define and test a squareRoot function
 *    to find square roots and display
 *    them on the console.
 *    e.g. The square root of 9 is 3.
 *
 */