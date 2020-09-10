var quiz = document.getElementById("quiz");
var result = document.getElementById("results");
var finalScore = document.getElementById("final");
var gameOver = document.getElementById("gameover");
var quizQuestions = document.getElementById("questions");
var quizTimer = document.getElementById("timer");
var startButton = document.getElementById("start");
var startQuiz = document.getElementById("home");
var scoreContainer = document.getElementById("scoreContainer");
var scorePage = document.getElementById("scorePage");
var initials = document.getElementById("initials");
var displayName = document.getElementById("scoreInitials");
var endGame = document.getElementById("weAreDone");
var submitScore = document.getElementById("submit");
var displayScore = document.getElementById("highScores");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");

// Defines object of questions
// Questions taken from W3Schools JavaScript quiz

var questions = [
    {
        question: "What is the correct way to write a JavaScript array?",
        choiceA: "var colors = ['red', 'green', 'blue']",
        choiceB: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
        choiceC: "var colors = (1:'red', 2:'green', 3:'blue')",
        choiceD: "var colors = 'red', 'green', 'blue'",
        correctAnswer: "a"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        choiceA: "alertBox('Hello World')",
        choiceB: "msg('Hello World')",
        choiceC: "alert('Hello World')",
        choiceD: "msgBox('Hello World')",
        correctAnswer: "c"
    },
    {
        question: "How do you create a function in JavaScript?",
        choiceA: "function:myFunction()",
        choiceB: "function = myFunction()",
        choiceC: "function => myFunction()",
        choiceD: "function myFunction()",
        correctAnswer: "d"
    },
    {
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        choiceA: "if i =! 5 then",
        choiceB: "if (i != 5)",
        choiceC: "if (i <> 5)",
        choiceD: "if i <> 5",
        correctAnswer: "b"
    },
    {
        question: "How does a FOR loop start?",
        choiceA: "for (i = 0; i <= 5; i++)",
        choiceB: "for i = 1 to 5",
        choiceC: "for (i <= 5; i++)",
        choiceD: "for (i = 0; i <= 5)",
        correctAnswer: "a"
    },
];

// Defines more variables

var questionsIndex = 0;
var totalQuestions = questions.length;
var remainingTime = 50;
var timer;
var score = 0;
var correct;

function generateQuestions() {
    gameOver.style.display = "none";
    if (questionsIndex === totalQuestions) {
        return yourScore();
    }
    var yourQuestion = questions[questionsIndex];
    quizQuestions.innerHTML = "<p>" + yourQuestion.question + "</p>";
    buttonA.innerHTML = yourQuestion.choiceA;
    buttonB.innerHTML = yourQuestion.choiceB;
    buttonC.innerHTML = yourQuestion.choiceC;
    buttonD.innerHTML = yourQuestion.choiceD;
}

// Starts the quiz
function start() {
    gameOver.style.display = "none";
    startQuiz.style.display = "none";
    generateQuestions();

    // Countdown
    timer = setInterval(function() {
        remainingTime--;
        quizTimer.textContent = "Remaining Time: " + remainingTime;
        if (remainingTime === 0) {
            clearInterval(timer);
            yourScore();
        }
    }, 1000);
    quiz.style.display = "block";
}

// Displays your score
function yourScore() {
    quiz.style.display = "none"
    gameOver.style.display = "flex";
    clearInterval(timer);
    initials.value = "";
    finalScore.innerHTML = "Your score: " + score + " / " + questions.length;
};

// Adds function to submit button
submitScore.addEventListener("click", function highScores() {
    if (initials.value === "") {
        alert("Please enter your initials.");
        return false;
    } else {
        // Want to retrieve the value of savedScores
        var savedScores = JSON.parse(localStorage.getItem("savedScores")) || [];
        var player = initials.value.trim();
        var currentScore = {
            name : player,
            score : score
        };

        gameOver.style.display = "none";
        scoreContainer.style.display = "flex";
        scorePage.style.display = "block";
        endGame.style.display = "flex";

        savedScores.push(currentScore);
        localStorage.setItem("savedScores", JSON.stringify(savedScores));
        generateScores();
    }
});

// Generates questions
function generateScores(){
    displayName.innerHTML = "";
    displayScore.innerHTML = "";
    var highscores = JSON.parse(localStorage.getItem("savedScores")) || [];
    // Create list for scores
    for (i = 0; i < highscores.length; i++) {
        var newNameSpan = document.createElement("li");
        var newScoreSpan = document.createElement("li");
        newNameSpan.textContent = highscores[i].name;
        newScoreSpan.textContent = highscores[i].score;
        displayName.appendChild(newNameSpan);
        displayScore.appendChild(newScoreSpan);
    }
}

// Displays highscores and hides other elements
function showHighScores(){
    startQuiz.style.display = "none"
    gameOver.style.display = "none";
    scoreContainer.style.display = "flex";
    scorePage.style.display = "block";
    endGame.style.display = "flex";

    generateScores();
}

// Allows player to start the quiz over. Resets remaining time, score, and 
function retakeQuiz() {
    scoreContainer.style.display = "none";
    gameOver.style.display = "none";
    startQuiz.style.display = "flex";
    remainingTime = 50;
    score = 0;
    questionsIndex = 0;
}


// Erases the high scores
function clearAll() {
    window.localStorage.clear();
    displayName.textContent = "";
    displayScore.textContent = "";
}


// Checks to see if selected answer is correct or not and displays feedback
function checkAnswer(answer) {
    correct = questions[questionsIndex].correctAnswer;
    if (answer === correct && questionsIndex !== totalQuestions) {
        score++;
        alert("Correct");
        questionsIndex++;
        generateQuestions();
    } else if (answer !== correct && questionsIndex !== totalQuestions) {
        alert("Incorrect");
        questionsIndex++;
        generateQuestions();
    } else {
        yourScore();
    }
}

// Starts the quiz
startButton.addEventListener("click", start);