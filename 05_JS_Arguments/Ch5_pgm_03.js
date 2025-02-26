// Passing information to a function

var showMessage;

showMessage = function (message) {
	console.log("The message is: " + message);
};

showMessage("Happiness is a journey, not a destination.")
showMessage("Make it work, make it right, make it fast.")
showMessage("Programming is the art of algorithm design and the craft of debugging errant code.")


/* Further Adventures
 *
 * 1) Change the message in the parentheses
 *    when showMessage is called on line 9.
 *
 * The value in the parentheses when showMessage is called
 * is an argument. "It's full of stars!" was the
 * original argument on line 9.
 *
 * 2) Add two more calls to the showMessage function
 *    with different arguments each time.
 *
 * 3) Change the showMessage function itself.
 *    Make it add some extra text after the
 *    message passed in.
 *
 */