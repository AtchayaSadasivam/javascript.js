// Converting a string to upper case

var planet = "Jupiter";
var bigPlanet = planet.toUpperCase();

console.log(planet + " becomes " + bigPlanet);
 function getBig(str) {
    return str.toUpperCase();
 }
function getSmall(str) {
    return str.toLowerCase();
}
 var testString = "Celebrate the Little Successes! ";
 console.log("Original: " + testString);
 console.log("Lower cas: " + getSmall(testString));

/* Further Adventures
 *
 * 1) Create a getBig function that accepts a
 *    string as an argument and returns it
 *    converted to upper case.
 *
 * There is also a toLowerCase string method.
 *
 * 2) Create a getSmall function that accepts a
 *    string as an argument and returns it
 *    converted to lower case.
 *
 */