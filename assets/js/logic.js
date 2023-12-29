


let currentQuestion = 0;
let score = 0;
timer = 15;
//selecting all required elements
const time = document.querySelector("#time");
const startScreen = document.querySelector("#start-screen");
const startId = document.querySelector("#start");
const questionEl = document.querySelector("#questions");
const options = document.querySelector("#choices");
const endScreen = document.querySelector("#end-screen");
const finalScore = document.querySelector("#final-score");
const submit = document.querySelector("#submit");
const   messageElement = document.querySelector("#feedback");
const questionTitleEl = document.querySelector("#question-title");
var viewHighScores = document.querySelector("#scores");
var interval ;



// function declaration
function startQuiz() {
    currentQuestion = 0;
    timeLeft = 60;
    // resultContainer.style.display = "none";
    startScreen.style.display = "none";
    startScreen.style.display = "none";
    questionEl.classList.remove("hide");
    // setTimer();
    
    showQuestion();
    // startTimer();
}
// if startQuiz button clicked
startId.addEventListener("click", startQuiz);

// show timer function

function setTimer() {
    time.textContent = timer;
    interval = setInterval(() => {
     timer = timer - 1 ;
     if (timer > -1) {
       time.textContent = timer;
     } else {
       time.textContent = 0;
       clearInterval(interval);
       endQuiz();
     }
    }, 1000);
 }
function showQuestion() {
    const currentQuizData = questionsQuiz[currentQuestion];
    questionTitleEl.innerText = currentQuizData.question;
    options.innerHTML = "";
    console.log(options)
    for (let i = 0; i < currentQuizData.options.length; i++) {
        console.log(currentQuizData.options[i])
        const button = document.createElement("button");
        button.textContent = currentQuizData.options[i];
        button.addEventListener("click", function () {
            checkAnswer(button.innerText);
        });
        options.appendChild(button);
    }
}

function checkAnswer(selectedOption) {
    const currentQuizData = questionsQuiz[currentQuestion].answer;

    if (selectedOption === currentQuizData[currentQuestion].answer) {
        score++;
        messageElement.innerText = "Correct!";
    } else {
        messageElement.innerText = "Wrong!";
        timer = timer -2;
    }

    currentQuestion++;

    if (currentQuestion < questionsQuiz.length) {
        showQuestion();
    } else {
        endQuiz	();
        clearInterval();
    }
}
// endQuiz function

function endQuiz () {
    endScreen.classList.remove("hide");
    finalScore.textContent = "" + score;
    questionEl.style.display = "none";
 }

