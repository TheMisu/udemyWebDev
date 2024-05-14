// init array that stores the button colours
const buttonColours = ["red", "blue", "green", "yellow"];
// init array that stores the pattern generated in this iteration of the game
var gamePattern = [];

function nextSequence(){
    // generate a random number between 0 and 3
    var randomNumber = Math.floor(Math.random() * 4);
    
    // pick a colour randomly
    var randomChosenColour = buttonColours[randomNumber];

    // add the colour to the pattern
    gamePattern.push(randomChosenColour)
}