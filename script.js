var quiz = document.getElementById("quiz");
var result = document.getElementById("results");
var finalScore = document.getElementById("final");
var gameOver = document.getElementById("gameover");
var quizQuestions = document.getElementById("questions");
var timer = document.getElementById("timer");
var beginQuiz = document.getElementById("start");
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

let questions = [
    {
        question: "Where am I?",
        choice1: "I don't know",
        choice2: "Who are you?",
        choice3: "I don't care.",
        choice4: "You're lost.",
        answer: 4,
    },
    {
        question: "Why am I hungry?",
        choice1: "Please don't eat me.",
        choice2: "You forgot to have lunch.",
        choice3: "You exercise so much, it doesn't matter how much you eat. It will never be enough. You're cursed.",
        choice4: "Because I am eating in front of you and you have nothing.",
        answer: 1,
    },
    {
        question: "What do you do when you see that your friend is upset?",
        choice1: "Run away as fast and as far as possible.",
        choice2: "Use a friend who gives good advice as a human shield.",
        choice3: "Distract him or her with candy or other desirable objects.",
        choice4: "Help the friend calm down and find a solution.",
        answer: 2,
    },
];

// Defines more variables

var questionsIndex = 0;
var totalQuestions = questions.length;
var remainingTime = 90;
var timer;
var score = 0;
var correct;

function highScores() {

}

function checkAnswer() {

}

function retake() {

}

function clear() {

}