const question = document.getElementById("question");

// Defines variable choices as an array using class choice-text from questions.html as the elements.

const choices = Array.from(document.getElementsByClassName("choice-text"));

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