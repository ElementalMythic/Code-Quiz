// use console.log to test code
//need to add a timer to this code
//Need to tell this timer to start running otherwise it wil just start right away.
//The "function" behind the set interval is the callback function
var q1 = document.querySelector(".Q1")

var q2 = document.querySelector(".Q2")

var button = document.querySelector("#start");

var secondsLeft = 5

var timer = document.querySelector(".timer")




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
} )

// use javascript to hide questions, then when you click start quiz it remove the hide sytle

// var myCountdown = setInterval(function() {
// }, interval);

// pass in call back function 
// callback functions: 

//need to link button

function startMyApp(){

}

//var button = document.getElementById("click", function(e)) 

//button.addEventListener("click", function()

//Need help above ^^^^^^^^^^^^^^^^

//e.preventDefault(); will prevent the browswer from reloading itself. It prevents the default action. 

//tells you how much of that content is avalible

//console.log("click")

var currentScore = 0

var secondsReamining = 120

function showAQuestion(){

}

// note: use console log 

//figure out which item to get from the arrya each time... 
// Need a something in our data to be able to say the correct answer...
// Make this an array...

var questions = [
    {
        question: "How is Gary such an amaizng teacher",
            answers: [
        "He really isnt",
        "Why can't Katy teach the class?",
        "Can we get our money back?",
    ]
    },
    {
    question: "What sound does a dog make?",
    answers: [
        "Moo",
        "Bark",
        "Meow",
    ]
}

]

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

