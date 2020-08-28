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

var questions = [
    {
        question: "Where am I?",
        choiceA: "I don't know",
        choiceB: "Who are you?",
        choiceC: "I don't care.",
        choiceD: "You're lost.",
        correctAnswer: "d"
    },
    {
        question: "Why am I hungry?",
        choiceA: "Please don't eat me.",
        choiceB: "You forgot to have lunch.",
        choiceC: "You exercise so much, it doesn't matter how much you eat. It will never be enough. You're cursed.",
        choiceD: "Because I am eating in front of you and you have nothing.",
        correctAnswer: "a"
    },
    {
        question: "What do you do when you see that your friend is upset?",
        choiceA: "Run away as fast and as far as possible.",
        choiceB: "Use a friend who gives good advice as a human shield.",
        choiceC: "Distract him or her with candy or other desirable objects.",
        choiceD: "Help the friend calm down and find a solution.",
        correctAnswer: "b"
    },
];

// Defines more variables

var questionsIndex = 0;
var totalQuestions = questions.length;
var remainingTime = 90;
var timer;
var score = 0;
var correct;

function generateQuestions() {
    gameOver.style.display = "none";
    if (questionsIndex === totalQuestions) {
        return yourScore;
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

submitScore.addEventListener("click", function highScores() {
    if (initials.value === "") {
        alert("Please enter your initials.");
        return false;
    } else {
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

function generateScores(){
    displayName.innerHTML = "";
    displayScore.innerHTML = "";
    var highscores = JSON.parse(localStorage.getItem("savedScores")) || [];
    for (i = 0; i < highscores.length; i++){
        var newNameSpan = document.createElement("li");
        var newScoreSpan = document.createElement("li");
        newNameSpan.textContent = highscores[i].name;
        newScoreSpan.textContent = highscores[i].score;
        displayName.appendChild(newNameSpan);
        displayScore.appendChild(newScoreSpan);
    }
}

function showHighscores(){
    startQuiz.style.display = "none"
    gameOver.style.display = "none";
    scoreContainer.style.display = "flex";
    scorePage.style.display = "block";
    endGame.style.display = "flex";

    generateScores();
}

function clearAll() {
    window.localStorage.clear();
    displayName.textContent = "";
    displayScore.textContent = "";
}

function retakeQuiz() {
    scoreContainer.style.display = "none";
    gameOver.style.display = "none";
    startQuiz.style.display = "flex";
    remainingTime = 90;
    score = 0;
    currentQuestionIndex = 0;
}



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

startButton.addEventListener("click", start);