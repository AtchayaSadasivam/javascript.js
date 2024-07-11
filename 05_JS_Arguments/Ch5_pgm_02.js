// Breaking a function by changing a variable name

var msg;
var msg1;
var showMessage;


msg = "It's full of stars!";
msg1 = "Happiness is celebrating life with all its highs and lows.";

showMessage = function () {
	console.log(msg);
	console.log(msg1);
	console.log(msg+" "+msg1);
};


showMessage();



/* Further Adventures
 *
 * 1) Update the console.log so the program works.
 *
 * 2) Declare another message variable
 *    and assign it a value.
 *
 * 3) Display the new message as well as the old one.
 *
 * 4) Display a single message created by joining
 *    the two strings.
 *
 */