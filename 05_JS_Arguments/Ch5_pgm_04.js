// Calling the same function with different arguments

var showMessage;
var mymessage;

mymessage = "Programming is the art of algorithm design and the craft of debugging errant code.";

showMessage = function (message) {
	console.log("The message is: \n" + message);
};

showMessage("It's full of stars!");
showMessage("Hello to Jason Isaacs");
showMessage("Hello to Jason Isaacs and Stephen Fry");
showMessage(mymessage);



/* Further Adventures
 *
 * 1) Change the showMessage function to
 *    display its prefixed text on a
 *    separate line to the message.
 *
 * 2) Declare a myMessage variable and
 *    assign it a string value.
 *
 * 3) Call the showMessage function with
 *    myMessage as the argument.
 *
 */