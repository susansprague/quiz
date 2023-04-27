//AS A coding boot camp student
//I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
//SO THAT I can gauge my progress compared to my peers

//GIVEN I am taking a code quiz
//WHEN I click the start button
//THEN a timer starts and I am presented with a question
//WHEN I answer a question
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and score

// select all elements
const startEl = document.getElementById("start");
const startBtn = document.getElementById("start-btn");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choicesEl= document.querySelector(".choices");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
var score=0;
var qIndex=0;


// create our questions
const questions = [
    {
        question: "What is a closure in JavaScript?",
        answers: [
            { text: "A function that returns another function", correct: "correct"},
            { text: "A variable that holds a reference to a function", correct: "incorrect" },
            { text: "A function that takes in another function as an argument", correct: "incorrect" },
            { text: "An object that has properties and methods", correct: "incorrect" }
        ]
    },
    {
        question: "What is the difference between '==' and '===' in JavaScript?",
        answers: [
            { text: "'==' performs type coercion, while '===' does not", correct: true },
            { text: "'===' performs type coercion, while '==' does not", correct: false },
            { text: "Both operators perform type coercion", correct: false },
            { text: "There is no difference between the two operators", correct: false }
        ]
    },
    {
        question: "What is the output of the following code?\n\nconsole.log(2 + '2');",
        answers: [
            { text: "'22'", correct: true },
            { text: "4", correct: false },
            { text: "NaN", correct: false },
            { text: "undefined", correct: false }
        ]
    },
    {
        question: "What is the purpose of the 'use strict' directive in JavaScript?",
        answers: [
            { text: "To enforce stricter parsing and error handling in JavaScript", correct: true },
            { text: "To enable new language features in JavaScript", correct: false },
            { text: "To disable certain language features in JavaScript", correct: false },
            { text: "To make JavaScript run faster", correct: false }
        ]
    },
]

// create some variables



// render a question
function renderQuestion() {
    question.textContent=questions[qIndex].question;
    choicesEl.innerHTML="";
    questions[qIndex].answers.forEach(function(answerObject){
        console.log(answerObject)
        var btn=document.createElement("button");
        btn.textContent=answerObject.text;
        btn.setAttribute("value", answerObject.correct)
        btn.addEventListener("click", function(event) {
            var userSelection=event.target
            console.log(userSelection)
            if(userSelection.value==="correct"){
               score++
            } else {
                //deduct 10 seconds from timer
            }
            qIndex++;
            if(qIndex<questions.length){
                renderQuestion(); 
            } //else to run endgame fuction
           
        })
        choicesEl.appendChild(btn);
    })
}


// start quiz
function startQuiz() {
    startEl.style.display="none";
    quiz.style.display="block";
    //show quiz El
    //start timer
    //show first question
    renderQuestion()
}

// render progress
//function renderProgress() {
    //for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
      //  progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
    //}
//}

// counter render



// checkAnwer



// answer is correct


// answer is Wrong


// score render
startBtn.addEventListener("click", startQuiz);