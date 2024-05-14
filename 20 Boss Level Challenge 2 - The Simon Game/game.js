// init array that stores the button colours
const buttonColours = ["red", "blue", "green", "yellow"];
// init array that stores the pattern generated in this iteration of the game
var gamePattern = [];
// init array that stores the user clicked pattern
var userClickedPattern = [];

// init a level tracker and a gameStarted tracker
var level = 0;
var gameStarted = false;



// check if the game was started or not
$(document).keydown(function(event) {
    // following code block makes it so that nextSequence() only get called once
    if (!gameStarted) {
        $("#level-title").text("Level " + level);
        nextSequence();
        gameStarted = true;
    }
})



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
    // resetting the userClickedPattern
    userClickedPattern = [];    

    // change the level number
    level += 1;
    
    // changing the value of the h1 element
    $("h1").text("Level " + level);

    // generate a random number between 0 and 3
    var randomNumber = Math.floor(Math.random() * 4);
    
    // pick a colour randomly
    var randomChosenColour = buttonColours[randomNumber];

    // add the colour to the pattern
    gamePattern.push(randomChosenColour)
    console.log(gamePattern);

    
    // flashing the pressed button and playing the matching audio 
    buttonFlashAnimation(randomChosenColour);
    playButtonAudio(randomChosenColour);
}



// function that checks the answer inputted by the user
function checkAnswer(currentLevel){
    // if the answer is correct
    if (userClickedPattern[currentLevel - 1] == gamePattern[currentLevel - 1]){
        console.log("success");    

        // checking whether the sequence has finished
        if (userClickedPattern.length === gamePattern.length ){
            // call the nextSequence func with a 1000ms delay
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    // if the user's answer is wrong
    } else {
        console.log("wrong");
        playButtonAudio("wrong");
        
        // animate the page's body
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);

        // change the page's h1
        $("h1").text("Game Over, Press Any Key To Restart");
        // reset the game if needed
        console.log(userClickedPattern);
        // startOver();
    }
}


// function that restarts the game
function startOver(){
    level = 0;
    gamePattern = [];
    gameStarted = false;
}

// handler in case jQuery detects a click on any of the buttons
$(".btn").click(function() {
    // init var that stores the colour/id of the clicked button
    var userChosenColour = $(this).attr("id");
    // adding the clicked colour to the array that stores the user's seq
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    playButtonAudio(userChosenColour); // plays the sounds that matches the button
    buttonFlashAnimation(userChosenColour); // animates the button

    // verifying whether the user has clicked the correct sequence
    checkAnswer(level);
})