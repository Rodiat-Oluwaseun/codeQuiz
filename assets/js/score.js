const quizData = [
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Paris", "Madrid", "Rome"],
        correct: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Mars", "Jupiter", "Venus", "Mercury"],
        correct: "Mars"
    },
    {
        question: "What is the largest mammal in the world?",
        choices: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correct: "Blue Whale"
    }
];

let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 60;

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const messageElement = document.getElementById("message");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const scoreElement = document.getElementById("score");
const finalScoreElement = document.getElementById("final-score");
const restartButton = document.getElementById("restart-btn");
const submitScoreButton = document.getElementById("submit-score-btn");
const timerElement = document.getElementById("timer");
const highScoreElement = document.getElementById("high-score");

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    timeLeft = 60;
    resultContainer.style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    showQuestion();
    startTimer();
}

function showQuestion() {
    const currentQuiz = quizData[currentQuestion];
    questionElement.innerText = currentQuiz.question;
    choicesElement.innerHTML = "";

    for (let i = 0; i < currentQuiz.choices.length; i++) {
        const button = document.createElement("button");
        button.innerText = currentQuiz.choices[i];
        button.addEventListener("click", function () {
            checkAnswer(button.innerText);
        });
        choicesElement.appendChild(button);
    }
}

function checkAnswer(answer) {
    const currentQuiz = quizData[currentQuestion];

    if (answer === currentQuiz.correct) {
        score++;
        messageElement.innerText = "Correct!";
    } else {
        messageElement.innerText = "Wrong!";
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    stopTimer();
    resultContainer.style.display = "block";
    document.getElementById("quiz-container").style.display = "none";
    scoreElement.innerText = `Your Score: ${score}`;
    finalScoreElement.innerText = score;
    updateHighScore();
}

function startTimer() {
    timer = setInterval(function () {
        timeLeft--;
        if (timeLeft >= 0) {
            timerElement.innerText = timeLeft;
        } else {
            endQuiz();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function restartQuiz() {
    resultContainer.style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    startQuiz();
}

function updateHighScore() {
    const storedHighScore = localStorage.getItem("highScore");

    if (storedHighScore === null || score > storedHighScore) {
        localStorage.setItem("highScore", score);
        highScoreElement.innerText = score;
    } else {
        highScoreElement.innerText = storedHighScore;
    }
}

function submitHighScore() {
    const name = prompt("Enter your name:");
    const scoreEntry = `${name}: ${score}`;
    // You can implement further logic here, like storing the high score entry in a backend or another storage solution.
    alert("High score submitted!");
}

startQuiz();

nextButton.addEventListener("click", function () {
    messageElement.innerText = "";
});

restartButton.addEventListener("click", restartQuiz);

submitScoreButton.addEventListener("click", submitHighScore);