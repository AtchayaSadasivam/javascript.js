// A function with two arguments

var showSum;

showSum = function (number1, number2) {
	var total = number1 + number2;
	console.log("The sum is: " + total);
};

showSum(30, 23);
showSum(2.8, -5);
showSum(56,74);

 var showproduct;
 showproduct = function (number1, number2){
    var total = number1 * number2;
	console.log(" The Multiple is: " + total);
 };
 showproduct(3,5);
 showproduct(4,7);
 showproduct(27,89);

var showQuotient;
showQuotient = function (number1,number2){
	var total = number1 / number2;
	console.log("The divide is :" + total);
}
showQuotient(600,5);
showQuotient(256,8);

var showDifference;
showDifference = function (number1,number2){
	var total = number1 - number2;
	console.log("The difference is:" + total);
}
showDifference(25,4);
showDifference(43,9);
/* Further Adventures
 *
 * 1) Use the showSum function to add 56 and 74.
 *
 * To multiply two numbers, use the * symbol.
 * e.g. 3 * 5 is 3 multiplied by 5.
 *
 * 2) Create a showProduct function to multiply two numbers.
 *
 * 3) Use your function to multiply three pairs of numbers.
 *
 * To divide one number by another, use /.
 * e.g. 10 / 2 is 10 divided by 2.
 *
 * 4) What about showDifference and showQuotient
 *    for subtraction and division?
 *
 */