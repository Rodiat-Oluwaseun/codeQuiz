

// Accessing the innner html element
var count = 0
var score = 0;
var startEl = document.querySelector("#start");
var questionEl = document.querySelector("#questions");
var qestTitleEl = document.querySelector("#question-title");
var choicesEl = document.querySelector("#choices");
var startScreen = document.querySelector("#start-screen");
var endscreenEl = document.querySelector("#end-screen");
var finalscoreEl = document.querySelector("#final-score");
var initialsEl = document.querySelector("#initials");
var submitEl = document.querySelector("#submit");
var timeEl = document.querySelector("#time");
var feedbackEl = document.querySelector("#feedback");
var timer = 30;
var interval;


// validating if the answer selected right or wrong
function answer(selectedOption) {
   if (selectedOption === questionsQuiz[count].answer) {
       score++;
       feedbackEl.textContent = "valid!";
   } else {
       feedbackEl.textContent = "invalid!";
   
       timer = timer - 2;
   }
   count++;

   // running through if there are more question
   if (count < questionsQuiz.length) {
       displayQuestion();
   } else {
       //this function end the quiz
       endQuiz();
       clearInterval(interval)
   }
}
// function declaration for displaying the question
function displayQuestion() {
   qestTitleEl.textContent = questionsQuiz[count].question;
  // remove previous question
   choicesEl.innerHTML = "";
   
   for (var i = 0; i < questionsQuiz[count].options.length; i++) {
       var choiceButton = document.createElement("button");
       choiceButton.textContent = questionsQuiz[count].options[i];
       choiceButton.addEventListener("click", function () {
           answer(this.textContent);
       });
       choicesEl.appendChild(choiceButton);
   }
}
//  Function declaration to start quiz
function startQuiz() {
   startScreen.style.display = "none";
   questionEl.classList.remove("hide");
   feedbackEl.classList.remove("hide");
   displayQuestion();
   setTimer();
}

function saveInitials() {
   localStorage.setItem("initials", initialsEl.value);
   localStorage.setItem("score", score);
   location.href = "/highscores.html"
}

function setTimer() {
   timeEl.textContent = timer;
   interval = setInterval(() => {
    timer = timer - 1 ;
    if (timer > -1) {
      timeEl.textContent = timer;
    } else {
      timeEl.textContent = 0;
      clearInterval(interval);
      endQuiz();
    }
   }, 1000);
}

function endQuiz () {
   endscreenEl.classList.remove("hide");
   finalscoreEl.textContent = "" + score;
   questionEl.style.display = "none";
}
// Event listener in starting the quiz
startEl.addEventListener("click", startQuiz);

 submitEl.addEventListener("click", saveInitials);

