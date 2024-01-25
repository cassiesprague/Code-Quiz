    var startBtn = document.getElementById("startBtn");
    // var time = 120;
    var timeRemaining = document.getElementById("timeRemaining");
    var headerBox =  document.getElementById("headerBox");
    var quizBox = document.getElementById("quizBox");
    var questionHeader = document.getElementById("questionHeader");
    var choiceA = document.getElementById("choiceA");
    var choiceB = document.getElementById("choiceB");
    var choiceC = document.getElementById("choiceC");
    var choiceD = document.getElementById("choiceD");
    var correctAnswer = document.getElementById("correctAnswer");    
    var timer;
    startBtn.addEventListener("click", startQuiz)
    var qIndex = 0
    let i = 0

    var questionsArray = [
        {
            question: "What is an example of a data structure?",
            answerChoices: ["A) CSS", "B) Array", "C) Div", "D) Var"],
            correctAnswer: "1"
        }, 
        {
            question: "What does a CSS page do?",
            answerChoices: ["A) Add a link", "B) Add numbers", "C) Add images", "D) Add styling"],
            correctAnswer: "3"
        },
        {
            question: "What does DRY stand for?",
            answerChoices: ["A) Don't Repeat Yourself", "B) Do Respectfully Yield", "C) Daily Read Yours", "D) none of these"],
            correctAnswer: "0"
        }, 
        {
            question: "What is a README?",
            answerChoices: ["A) A list of books about coding.", "B) An outline of criteria that needs to be met.", "C) A list of unimportant information.", "D) An outline of to best ways to code."],
            correctAnswer: "1"
        },
        {
            question: "What is the command to check if your ternimal is up to date.",
            answerChoices: ["A) Check status", "B) Check date", "C) Git status", "D) Git date"],
            correctAnswer: "2"
        },
        {
            question: "What tag is used to display a bullet point list?",
            answerChoices: ["A) <l>", "B) <list>", "C) <ul>", "D) <li>"],
            correctAnswer: "3"
        },
        {
            question: "What tag is used to define an image?",
            answerChoices: ["A) <image>", "B) <i>", "C) <img>", "D) </Image>"],
            correctAnswer: "2"
        },
        {
            question: "What is a Booleon?",
            answerChoices: ["A) A list of passwords", "B) A true or false statement", "C) A ghost emoji", "D) A set of pictures"],
            correctAnswer: "1" 
        },
        {
            question: "What tag defines a button?",
            answerChoices: ["A) <button>", "B) <b>", "C) <click>", "D) <bt>"],
            correctAnswer: "0"
        },
        {
            question: "Which of the following is not a coding language?",
            answerChoices: ["A) C++", "B) Python", "C) Java", "D) Talk"],
            correctAnswer: "3"
        }];

console.log(questionsArray);
        var time = 15 * questionsArray.length

console.log(time);

// hide intro and unhide question and start clock
        function startQuiz() {
            headerBox.setAttribute("class", "hide")
            quizBox.removeAttribute("class")
            timer= setInterval(ticker,1000)
            getQuestion()
        }
function timer() {
    time--; //time=time-1
    timeRemaining.textContent=time
    if(time<=0) {
        end_quiz();
    }
    document.getElementById("timer").innerHTML = time;
}

//repeatable function
function getQuestion() {
    questionHeader.textContent = questionsArray[i].question;
    choiceA.textContent = questionsArray[i].answerChoices[]; 
    choiceB.textContent = questionsArray[i].answerChoices[]; 
    choiceC.textContent = questionsArray[i].answerChoices[]; 
    choiceD.textContent = questionsArray[i].answerChoices[]; 
}