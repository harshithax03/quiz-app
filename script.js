// TO-DO
// 1.Get the start quiz element
const startBtn = document.querySelector('#start')
const displayContainer = document.querySelector('.display-container')
const welcomeMsg = document.querySelector('.head')

// 2.onclick the welcome msg and start button should be closed and the ques should display
startBtn.addEventListener('click', () =>{
    displayContainer.classList.add('open')
    startBtn.classList.add('close')
    welcomeMsg.classList.add('close')
    // startQuiz()
})
// add questions 
const questions = [
    {
        question : "What does DOM stand for in JavaScript?",
        answers : [
            { text : "Document", correct : true},
            { text : "Design", correct : false},
            { text : "Data", correct : false},
            { text : "Display", correct : false}
        ]
    },
    {
        question : "What method is used to add an element to the end of an array in JavaScript?",
        answers : [
            { text : "push", correct : true},
            { text : "pop", correct : false},
            { text : "shift", correct : false},
            { text : "unshift", correct : false}
        ]
    },
    {
        question : "What is the purpose of the 'this' keyword in JavaScript?",
        answers : [
            { text : "Variable", correct : false},
            { text : "Function", correct : false},
            { text : "Object", correct : true},
            { text : "Loop", correct : false}
        ]
    },
    {
        question : "What type of language is JavaScript?",
        answers : [
            { text : "Object-oriented", correct : false},
            { text : "Functional", correct : false},
            { text : "Procedural", correct : false},
            { text : "Multi-paradigm", correct : true}
        ]
    },
    {
        question : "Which keyword is used to declare a variable in JavaScript?",
        answers : [
            { text : "let", correct : true},
            { text : "var", correct : false},
            { text : "get", correct : false},
            { text : "set", correct : false}
        ]
    }

]
// get ques, next and ans elements from dom
const questionElement = document.querySelector('#question')
const  ansOptions= document.querySelector('#ans-options')
const nxtBtn = document.querySelector('.nxt-btn')
const quizContainer = document.querySelector('.quiz-container')
const buttons = document.querySelectorAll('.quiz-container .ans')

let currentQuesIndex = 0;
let score= 0;

// start quiz function
function startQuiz(){
    currentQuesIndex = 0;
    score = 0;
    showQuestion()
    
}

function showQuestion(){
    resetState()
    let currentQues = questions[currentQuesIndex];
    questionElement.innerHTML = currentQues.question;
    //for getting the current question set answers
    currentQues.answers.forEach(answer =>{
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('ans')
        ansOptions.appendChild(button)
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);


    });
}
function resetState(){
    // nxtBtn.style.display = 'none';
    ansOptions.innerHTML = '';
    // body.classList.remove('right-opt wrong-opt')
    }


let finalScore = "0";
const body = document.body
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ===  "true";
    if(isCorrect){
        selectedBtn.classList.add('right-opt')
        body.classList.add('right-opt')
        
    }
    else {
        selectedBtn.classList.add('wrong-opt')
        body.classList.add('wrong-opt')
    }
    Array.from(ansOptions.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add('right-opt');
            body.classList.add('right-opt')
           
        }
        button.disabled = true;
    })
}
function handleNext() {
    // body.classList.remove('right-opt wrong-opt')
    currentQuesIndex++;
    if (currentQuesIndex < questions.length) {
        showQuestion();
    } else {
        // Quiz completed, you can add your logic here
        console.log(finalScore);
    }
}
nxtBtn.addEventListener('click', handleNext);

startQuiz()
// nxtBtn.addEventListener('click', handleNext);

