// Using the same function with multiple objects

var movie1;
var movie2;
var movie3;
var movie;
var showMovieInfo;

movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
    title: "Spectre",
    actors: "Daniel Craig, Christoph Waltz",
    directors: "Sam Mendes"
};

movie3 = {
    title: "Star Wars: Episode VII - The Force Awakens",
    actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
    directors: "J.J.Abrams"
};

showMovieInfo = function () {
    console.log("Movie information for " + movie.title);
    console.log("------------------------------");
    console.log("Actors: " + movie.actors);
    console.log("Directors: " + movie.directors);
    console.log("------------------------------");
};

movie = movie1;
showMovieInfo();

movie = movie2;
showMovieInfo();

movie = movie3;
showMovieInfo();

var question1;
question1 = {
    question:"What is the capital of France?",
    options:["Berlin","Madrid","Paris","Rome"],
    answer:"Paris"
};

var question2;
question2 = {
    question:"What does HTML stand for?",
    options:["Hyper Text Markup Language","Hyperlinks and Text Markup Language","Home Tool Markup Language"],
    answer:"Hyper Text Markup Language"
};

var question3;
question3 = {
    question:"Who is making the Web Standards?",
    options:["Google","Microsoft","The World Wide Web Consortium","Mozilla"],
    answer: "The World Wide Web Consortium"
};
var showQuizQuestion;

showQuizQuestion = function () {
    console.log("Question: " + quizQuestion.question);
    console.log("Options: ");
    for (var i = 0; i < quizQuestion.options.length; i++) {
        console.log((i + 1) + ". " + quizQuestion.options[i]);
    }
    console.log("------------------------------");
};
var quizQuestion;

quizQuestion = question1;
showQuizQuestion();

quizQuestion = question2;
showQuizQuestion();

quizQuestion = question3;
showQuizQuestion();

/* Further Adventures
 *
 * 1) Create an object to represent
 *    a multiple choice quiz question.
 *
 * 2) Create two more quiz question objects.
 *
 * 3) Create a function to show
 *    the question and answer options.
 *
 * 4) Use the same variable assignment technique
 *    as above to display all three questions
 *    on the console.
 *
 */