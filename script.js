// create variables for html classes

// create object array for questions and answers

// create timer for countdown button, the the button is clicked the timer counts down

// create scoring system

// create a way for scores to be stored

// when a questions is answered, the page refreshed to the next question


// timer, start, questions, and answer variables

// question and answers variable array
var quizQuestions = [
    {
        question: "What are variables in Javascript used for?",
        answers: ["to store data", "math functions", "to loop"],
        correctAnswer: "to store data"  
              
    },
    {   question: "What method is used to return an integer?",
        answers: ["math.random()", "math.floor()", "upperCase()"],
        correctAnswer: "math.floor()"
      
    },
    {   question: "What are prompts used for?",
        answers: ["to get an input from a user", "to alert the user", "to provide a messege in the console"],
        correctAnswer: "to get an input from a user"
    },
    {   question: "What are booleans in Javascript?",
        answers: ["any number that's a non-integer", "a type of math function", "a true or false statement"],
        correctAnswer: "a true or false statement"
    },
    {   question: "which method returns the length of a string?",
        answers: ["size()", "length()", "index()"],
        correctAnswer: "index()"
    }
    ]

    var container = document.querySelector(".container")
    var timer = document.querySelector(".time")
    var questions = document.querySelector(".questions")
    var startButton = document.querySelector(".startButton")
    var answersList = document.querySelector(".answersList")
    var createUl = document.createElement("ul")
    var timerInterval = 0
    var secondsLeft = 45
    var quizQuestionsIndex = 0
    var score = 0
    var deductTime = 10

//timer

// event listener that starts the quiz and timer when click
startButton.addEventListener("click", function() {
    if (timerInterval === 0) {
        timerInterval = setInterval(function() {
            secondsLeft--;
            timer.textContent = "Time: " + secondsLeft

            if (secondsLeft <= 0) {
                clearInterval(timerInterval)
                finished()
                timer.textContent = "Time's Up!"
            }
        }, 1000)
    }
    render(quizQuestionsIndex);
})
// renders new question to the page
    function render(quizQuestionsIndex) {
        questions.innerHTML = ""
        createUl.innerHTML = ""
// for loop that iterates through the questions and answers array
        for (var i = 0; i < quizQuestions.length; i++) {
            var userQuestions = quizQuestions[quizQuestionsIndex].question
            var userAnswers = quizQuestions[quizQuestionsIndex].answers
            questions.textContent = userQuestions
        }
// renders new answers list to the page
            userAnswers.forEach(function (newQuestion) {
                var listItem = document.createElement("li")
                listItem.textContent = newQuestion
                questions.append(createUl)
                createUl.append(listItem)
                listItem.addEventListener("click", (compare))
            })
// compare the user answer with the correct answer to output a "correct" or "wrong" messege at the bottom of the page            
    }
    function compare(event) {
        var element = event.target;
    
        if (element.matches("li")) {
    
            var createDiv = document.createElement("div");
            createDiv.setAttribute("id", "createDiv");
           
            if (element.textContent == quizQuestions[quizQuestionsIndex].correctAnswer) {
                score++;
                createDiv.textContent = "Correct!"
            
            } else {
// deducts 10 seconds for wrong answer
                secondsLeft = secondsLeft - deductTime;
                createDiv.textContent = "Wrong!"
            }
    
        }
    }

    

