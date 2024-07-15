// Passing an array to a function

var getVisitorReport = function (visitorArray, dayInWeek) {
	var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday" ,
    "Saturday" ,
    "Sunday"
  ];
	var index = dayInWeek - 1;
	var visitorReport;

	visitorReport = "There were ";
  visitorReport += visitorArray[index];
  visitorReport += " visitors ";
	visitorReport += "on " + days[index] + "of week" + week;

	return visitorReport;
};

var visitors = [ 354, 132, 210, 221, 481, 123, 87];

var report = getVisitorReport(visitors, 5);
console.log(report);

var reportSaturday = getVisitorReport(visitors, 6);
console.log(reportSaturday);

var reportSunday = getVisitorReport(visitors, 7);
console.log(reportSunday);

var week1 = [ 354, 132, 210, 221, 481, 123, 87];
var week2 = [400, 150, 230, 200, 500, 120, 90];
var week3 = [360, 140, 220, 210, 470, 110, 80];
var week4 = [370, 135, 215, 225, 490, 115, 85];

var month = [week1, week2, week3, week4];

var reportWeek1Monday = getMonthVisitorReport(month, 1, 1);
console.log(reportWeek1Monday); 

var reportWeek2Friday = getMonthVisitorReport(month, 2, 5);
console.log(reportWeek2Friday); 

var reportWeek3Sunday = getMonthVisitorReport(month, 3, 7);
console.log(reportWeek3Sunday); 

var reportWeek4Wednesday = getMonthVisitorReport(month, 4, 3);
console.log(reportWeek4Wednesday); 


/* Further Adventures
 *
 * 1) Run the report for Friday.
 *
 * 2) Update the function to include Saturday and Sunday.
 *
 * A month of visitor info could be represented as an
 * array of arrays: [ week1, week2, week3, week4 ]
 * where each week could be an array of visitor numbers.
 *
 * 3) Write a new function with three parameters,
 *    the month array, the week wanted and the day wanted.
 *    The new function should return the visitor report specified.
 *    You can call getVisitorReport from your function if you want.
 *
 * 4) Create four arrays of week visitor numbers
 *    and a month array of the four weeks.
 *    Test your function from 3) for different weeks and days.
 *
 */