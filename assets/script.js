// use console.log to test code
//need to add a timer to this code
//Need to tell this timer to start running otherwise it wil just start right away.
//The "function" behind the set interval is the callback function
var currentScore = 0

var secondsReamining = 120

var q1 = document.querySelector(".Q1");

var q2 = document.querySelector(".Q2");

var q3 = document.querySelector(".Q3");

var q4 = document.querySelector(".Q4");

var startButton = document.querySelector("#start");

var secondsLeft = 61; 

var timer = document.querySelector(".timer");

var optionA = document.getElementById("A");

var optionB = document.getElementById("B");

var optionC = document.getElementById("C");

var optionD = document.getElementById("D");

var questions = [
    {
        question: "What does HTML sand for?",
        options: ["HyperText Markup Language", "Hyperspeed Test MateriaL", "High-Tech Machine Learning"],
        correctOption: "HyperText Markup Language"
    },
    {
        question: "What does CSS do?",
        options: ["Changes Fonts", "Adds Color", "Change Padding", "All Are True"],
        correctOption: "All Are True"
    },
    {
        question: "Is coding hard?",
        options: ["Maybe", "No", "Yes"],
        correctOption: "Yes"
    }
];

var questionIdx = 0; 




function startQuiz(event){
    event.preventDefault()
    console.log("Start Quiz")
    // start timer 
    
    //hide the viewport
    var viewport = document.getElementById("viewport")
    viewport.classList.add("hide")
    displayQuestion()

}



startButton.addEventListener("click", startQuiz)
function displayQuestion(){
    console.log("Display Question")
    var currQuestion = questions[questionIdx]
    var questionHolder = document.getElementById("question-holder")
    questionHolder.classList.remove("hide")
    var questionElement = document.getElementById("question-element")
    var answersElement = document.getElementById("answers-element")
    questionElement.innerHTML = ""
    answersElement.innerHTML = ""
    questionElement.innerHTML = currQuestion.question
    for (let i =0; i <currQuestion.options.length; i++) {
        var button = document.createElement("button")
        button.innerHTML = currQuestion.options[i]
        answersElement.appendChild(button)
        button.addEventListener("click", checkAnswer)
    }
}

a


var myCountdown = setInterval(function() {
        
           secondsLeft--
            timer.textContent="You have " + secondsLeft + " seconds left " 
            console.log("You have " + secondsLeft + " seconds left " )
        
          if (secondsLeft == 0) {
                clearInterval(myCountdown);
                window.alert ("Quiz Over");
                location.reload(); 
            }
         }, 1000);



function checkAnswer(event){
    event.preventDefault()
    console.log("Trigerreddddddd")
    console.log(event.target.innerHTML)
    if(questions[questionIdx].correctOption !== event.target.innerHTML){
        console.log("Wrong")
        window.alert("Incorrect")
    } else{
        console.log("Correct")
        window.alert("Correct!")
    }
    var isOver = checkIfOver()
    if(!isOver){
        questionIdx++
        displayQuestion()
    } else{
        quizOver()
    }
}

function quizOver(){
    console.log("Quiz Over");
    window.alert("Quiz Over");
    location.reload();
}

function checkIfOver(){
    // reach the last question
    if (questionIdx == questions.length -1){
        return true
    } else{
        return false
    }
}




    // create the div 
    // create the h3 
    // create a ul tag 
    // loop through the answwers:
      // create a button that shows the answer
      // if the idx value of the curr answer = the correectOpt, place a custom data attr on the button

    /*
    <div class = Q1 style = "display: none">
            <h3> Question 1 </h3>
            <button class = "q1Button">answer 1</button>
            <button class = "q1Button">answer 2</button>
            <button class = "q1Button" id = "correct">answer 3</button>
            <button class = "q1Button">answer 4</button>
        </div>
    */






// timer and questions


// need to make questions...

// button.addEventListener("click", function(event) {
//     event.preventDefault();
//     q1.style="display:block;" 
//     button.style="display:none;" 
//     var myCountdown = setInterval(function() {

//         secondsLeft--
//         timer.textContent="You have " + secondsLeft + " seconds left " 
//         console.log("You have " + secondsLeft + " seconds left " )
    
//         if (secondsLeft == 0) {
//             clearInterval(myCountdown) }
//     }, 1000);
    
//     var q1Buttons = document.querySelectorAll(".q1Button")
//     for (var i = 0; i < q1Buttons.length; i++) {
//         q1Buttons[i].addEventListener("click", function(event) {
//             q2.style="display:block;" 
//             q1.style="display:none;" 
//         })
//     }

//     // add score inside of the function???? 

//     var q2Buttons = document.querySelectorAll(".q2Button")
//     for (var i = 0; i < q2Buttons.length; i++) {
//         q2Buttons[i].addEventListener("click", function(event) {
//             q3.style="display:block;"
//             q2.style="display:none;"
//         })
//     }

//     var q3Buttons = document.querySelectorAll(".q3Button")
//     for (var i = 0; i < q3Buttons.length; i++) {
//         q3Buttons[i].addEventListener("click", function(event) {
//             q4.style="display:block;"
//             q3.style="display:none;"
//         })
//     }    

//     // need to make sure that the user can log thier data. 

// } )







// use javascript to hide questions, then when you click start quiz it remove the hide sytle

// var myCountdown = setInterval(function() {
    // }, interval);
    
// pass in call back function 
// callback functions: 

//need to link button

//var button = document.getElementById("click", function(e)) 

//button.addEventListener("click", function()

//Need help above ^^^^^^^^^^^^^^^^

//e.preventDefault(); will prevent the browswer from reloading itself. It prevents the default action. 

//tells you how much of that content is avalible

//console.log("click")


// note: use console log 

//figure out which item to get from the arrya each time... 
// Need a something in our data to be able to say the correct answer...
// Make this an array...
//what happens when the user clicks on the button?: 
//The Timer has to start and display the first question.
//Need a fuction 
// keydown is an event that tells us which key is being pressed


// for (var i = 0; i < questions.length; i++) {
//     currQuestionsObj = questions[i]
//     var section = document.createElement("section")
    //Create an h2 tag, give it the text of the question. 
    //create a ul tag
    //for each answer, create an li tag

    // add all this stuff to the dom 
// } 



// seperate data from presentation. 
// how do i start the application?

// add an event listner for the start button
// another for when they choose an answer

