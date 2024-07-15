// Using Math.min and Math.max

var showSmaller = function (num1, num2) {
    var smaller = Math.min(num1, num2);
    var larger = Math.max(num1, num2);

    console.log(smaller + " is smaller than " + larger);
};

showSmaller(24, 4);
showSmaller(-15, 3);

var showLarger = function (num1, num2) {
    var smaller = Math.min(num1,num2);
    var larger = Math.max(num1, num2);

    console.log(larger + "is larger than " + smaller);
}
showLarger(34,8);
showLarger(-5, 9);

var showSmallest = function (num1,num2) {
    var smaller = Math.min(num1,num2);
    var larger = Math.max(num1, num2);

console.log(larger + "is smallest than " + smaller);
}
showSmallest(29,67,98);
showSmallest(76,-23,24);

/* Further Adventures
 *
 * 1) Try out some different arguments.
 *
 * 2) Write a showLarger function.
 *
 * 3) Write a showSmallest function that takes
 *    three arguments and displays the smallest
 *    of the three.
 *
 */