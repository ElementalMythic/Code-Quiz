// use console.log to test code
//need to add a timer to this code
//Need to tell this timer to start running otherwise it wil just start right away.
//The "function" behind the set interval is the callback function
var q1 = document.querySelector(".Q1");

var q2 = document.querySelector(".Q2");

var q3 = document.querySelector(".Q3");

var q4 = document.querySelector(".Q4");

var button = document.querySelector("#start");

var secondsLeft = 11;

var timer = document.querySelector(".timer");

var optionA = docuemnt.getElementById("A");

var optionB = docuemnt.getElementById("B");

var optionC = docuemnt.getElementById("C");

var optionD = docuemnt.getElementById("D");

// timer and questions

button.addEventListener("click", function(event) {
    event.preventDefault();
    q1.style="display:block;" 
    button.style="display:none;" 
    var myCountdown = setInterval(function() {

        secondsLeft--
        timer.textContent="You have " + secondsLeft + " seconds left " 
        console.log("You have " + secondsLeft + " seconds left " )
    
        if (secondsLeft == 0) {
            clearInterval(myCountdown) }
    }, 1000);
    
    var q1Buttons = document.querySelectorAll(".q1Button")
    for (var i = 0; i < q1Buttons.length; i++) {
        q1Buttons[i].addEventListener("click", function(event) {
            q2.style="display:block;" 
            q1.style="display:none;" 
        })
    }

    // add score inside of the function???? 

    var q2Buttons = document.querySelectorAll(".q2Button")
    for (var i = 0; i < q2Buttons.length; i++) {
        q2Buttons[i].addEventListener("click", function(event) {
            q3.style="display:block;"
            q2.style="display:none;"
        })
    }

    var q3Buttons = document.querySelectorAll(".q3Button")
    for (var i = 0; i < q3Buttons.length; i++) {
        q3Buttons[i].addEventListener("click", function(event) {
            q4.style="display:block;"
            q3.style="display:none;"
        })
    }    

    // need to make sure that the user can log thier data. 

} )

// need to make questions...

let questions = [
    {
        question: "This is the first question",
        optionA: "Correct",
        optionB: "Incorrect",
        optionC: "Incorrect",
        optionD: "Incorrect",
        correctOption: "A" 

    }
    ,
    {
        question: "This is the second question",
        optionA: "Incorrect",
        optionB: "Correct",
        optionC: "Incorrect",
        optionD: "Incorrect",
        correctOption: "B"
    }
    ,
    {
        question: "This is the third question",
        optionA: "Incorrect",
        optionB: "Incorrect",
        optionC: "Correct",
        optionD: "Incorrect",
        correctOption: "C'"
    }
    ,
    {
        question: "This is the fourth question",
        optionA: "Incorrect",
        optionB: "Incorrect",
        optionC: "Incorrect",
        optionD: "Correct",
        correctOption: "D"
    }
];






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

var currentScore = 0

var secondsReamining = 120

// note: use console log 

//figure out which item to get from the arrya each time... 
// Need a something in our data to be able to say the correct answer...
// Make this an array...
//what happens when the user clicks on the button?: 
//The Timer has to start and display the first question.
//Need a fuction 
// keydown is an event that tells us which key is being pressed


for (var i = 0; i < questions.length; i++) {
    currQuestionsObj = questions[i]
    var section = document.createElement("section")
    //Create an h2 tag, give it the text of the question. 
    //create a ul tag
    //for each answer, create an li tag

    // add all this stuff to the dom 
}



// seperate data from presentation. 
// how do i start the application?

// add an event listner for the start button
// another for when they choose an answer

