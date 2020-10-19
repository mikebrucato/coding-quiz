// create variables for html classes

// create object array for questions and answers

// create timer for countdown button, the the button is clicked the timer counts down

// create scoring system

// create a way for scores to be stored

// when a questions is answered, the page refreshed to the next question



var timer = document.querySelector(".timer")
var questions = document.querySelector(".questions")
var answers = document.querySelector(".answersList")
var startButton = document.querySelector(".startButton")

var quizQuestions = [
{
    question: "What are variables in Javascript used for?",
    answers: {
        a: "to store data",
        b: "math functions",
        c: "to loop",
    },
    correctAnswer: "a"
},
{   question: "What method is used to return an integer?",
    answers: {
        a: "math.random()",
        b: "math.floor()",
        c: "upperCase()",
    },
    correctAnswer: "b"
},
{   question: "What are prompts used for?",
    answers: {
        a: "to get an input from a user",
        b: "to alert the user",
        c: "to provide a messege in the console",
    },
    correctAnswer: "a"
},
{   question: "What are booleans in Javascript?",
    answers: {
        a: "any number that's a non-integer",
        b: "a type of math function",
        c: "a true or false statement",
    },
    correctAnswer: "c"
},
{   question: "which method returns the length of a string?",
    answers: {
        a: "size()",
        b: "length()",
        c: "index()",
    },
    correctAnswer: "b"
}
]