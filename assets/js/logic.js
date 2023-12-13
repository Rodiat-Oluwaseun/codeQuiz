


let currentQuestion = 0;
let score = 0;
//selecting all required elements
const time = document.querySelector("#time");
const startScreen = document.querySelector("#start-screen");
const startId = document.querySelector("#start");
const question = document.querySelector("#questions");
const options = document.querySelector("#choices");
const endScreen = document.querySelector("#end-screen");
const finalScore = document.querySelector("#final-score");
const submit= document.querySelector("#submit");
const feedBack= document.querySelector("#feedback");



 // function declaration
 function startQuiz(){
    currentQuestion = 0;
    score = 0;
    timeLeft = 60;
    // resultContainer.style.display = "none";
    document.getElementById("questions").style.display = "block";
    showQuestion();
    // startTimer();
    
    
    
    console.log("rain🎉✨🧨")
 }
// if startQuiz button clicked
startId.addEventListener("click", startQuiz);


function showQuestion(){
    const currentQuizData = questionsQuiz[currentQuestion];
    question.innerText = currentQuizData.question;
    options.innerHTML = "";

    for (let i = 0; i < currentQuizData.options.length; i++) {
        const button = document.createElement("button");
        button.innerText = currentQuizData.options[i];
        button.addEventListener("click", function () {
            checkAnswer(button.innerText);
        });
        options.appendChild(button);
    }
}

function answer(selectedOption) {
    const currentQuizData = questionsQuiz[currentQuestion];

    if (selectedOption=== currentQuizData[currentQuestion].answer) {
        score++;
        messageElement.innerText = "Correct!";
    } else {
        messageElement.innerText = "Wrong!";
    }

    currentQuestion++;

    if (currentQuestion < questionsQuiz.length) {
        showQuestion();
    } else {
        
    }
}