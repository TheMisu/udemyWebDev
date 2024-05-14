// init array that stores the button colours
const buttonColours = ["red", "blue", "green", "yellow"];
// init array that stores the pattern generated in this iteration of the game
var gamePattern = [];
// init array that stores the user clicked pattern
var userClickedPattern = [];



// func that changes the button design once it's pressed
function buttonPressAnimation(buttonColour) {
    // accessing the activated button
    var buttonID = "#" + buttonColour;
    var activeButton = $(buttonID);

    // adding a new class to start the animation
    activeButton.classList.add("pressed");

    // removing the pressed class after a slight delay to finalize the animation
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}



// func that makes a button flash once its colour was selected randomly
function buttonFlashAnimation(buttonColour){
    // accessing the activated button
    var buttonID = "#" + buttonColour;
    var selectedButton = $(buttonID);
    
    // animating the button
    selectedButton.fadeOut(100).fadeIn(100);
}



// function that plays audio
function playButtonAudio(buttonColour) {
    var audioFile = "./sounds/" + buttonColour + ".mp3";
    var audio = new Audio(audioFile);
    audio.play();
} 



// function that randomly creates a sequence of pressed buttons
function nextSequence(){
    // generate a random number between 0 and 3
    var randomNumber = Math.floor(Math.random() * 4);
    
    // pick a colour randomly
    var randomChosenColour = buttonColours[randomNumber];

    // add the colour to the pattern
    gamePattern.push(randomChosenColour)

    
    // flashing the pressed button and playing the matching audio 
    buttonFlashAnimation(randomChosenColour);
    playButtonAudio(randomChosenColour);
}



// handler in case jQuery detects a click on any of the buttons
$(".btn").click(function() {
    // init var that stores the colour/id of the clicked button
    var userChosenColour = $(this).attr("id");
    // adding the clicked colour to the array that stores the user's seq
    userClickedPattern.push(userChosenColour);
    playButtonAudio(userChosenColour);
})

// $(document).on("keydown click", function(event) {
//     nextSequence();
// })