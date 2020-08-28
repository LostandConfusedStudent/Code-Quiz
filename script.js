const question = document.getElementById("question");

// defines variable choices as an array using class choice-text from questions.html as the elements.

const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let emptyQuestions = [];

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
    }
]

const totalQuestions = 3;

function gameStart() {
    questionCounter = 0;
    score = 0;
    emptyQuestions = [...questions];
    next();
};

function next() {
    if(emptyQuestions.length === 0 || questionCounter >= totalQuestions) {
        return window.location.assign("/end.html");
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * emptyQuestions.length);
    next = emptyQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset["number"];
        choice.innterText = next["choice" + number];
    });
    emptyQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener("click", (e) => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        next();
    });
});

gameStart();