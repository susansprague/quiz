
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
    function timer() {
        var sec = 75;
        var timer = setInterval(function () {
            document.getElementById('safeTimerDisplay').innerHTML = '00:' + sec;
            sec--;
            if (sec < 0) {
                clearInterval(timer);
            }
        }, 1000);
    }
    //show first question
    renderQuestion()
}


// counter render
function endGame() {
    alert("Wins: " + wins + '/nLosses: ' + losses + '/nTies: ' + ties);
    play = confirm("Would you like to play again?");
    if (play) {
        startGame();
    } else {
        alert("Thanks for playing!");
    }
}


// checkAnwer



// answer is correct


// answer is Wrong


// score render
startBtn.addEventListener("click", startQuiz);