//selecting all required elements
const time = document.querySelector("#time");
const startScreen = document.querySelector("#start-screen");
const startId = document.querySelector("#start");
const question = document.querySelector("#questions");
const choices = document.querySelector("#choices");
const endScreen = document.querySelector("#end-screen");
const finalScore = document.querySelector("#final-score");
const submit= document.querySelector("#submit");
const feedBack= document.querySelector("#feedback");



 // function declaration
 function startQuiz(){
    
    showQuetions(0); //calling showQestions function
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    
    
    const option = choices.querySelectorAll("#choices");
    for (var i = 0; i < questions[count].options.length; i++);
    
    console.log("rain🎉✨🧨")
 }
// if startQuiz button clicked
startId.addEventListener("click", startQuiz);

startId.onclick = ()=>{
 
}

let timeValue =  15;
let count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

// getting questions and options from array
function showQuetions(index){
    const que_text = document.querySelector("#question-title");

    //creating a new span and div tag for question and option and passing the value using array index
    
}


  


