// writing a func to play a specific sound based on the 
// input it was given
function playSound(input) {
    switch (input) {
        case "w":
        var crashAudio = new Audio("./sounds/crash.mp3");
        crashAudio.play();
        break;
        
        case "a":
            var kickAudio = new Audio("./sounds/kick-bass.mp3");
            kickAudio.play();
            break;

        case "s":
            var snareAudio = new Audio("./sounds/snare.mp3");
            snareAudio.play();
            break;
                
        case "d":
            var tom1Audio = new Audio("./sounds/tom-1.mp3");
            tom1Audio.play();
            break;

        case "j":
            var tom2Audio = new Audio("./sounds/tom-2.mp3");
            tom2Audio.play();
            break;
            
        case "k":
            var tom3Audio = new Audio("./sounds/tom-3.mp3");
            tom3Audio.play();
            break;

        case "l":
            var tom4Audio = new Audio("./sounds/tom-4.mp3");
            tom4Audio.play();
            break;
            
        default:
            console.log(input);
            break;   
    }
}

// func that changes the button design once it's pressed
function animateButton(input) {
    // accessing the activated button
    var buttonClass = "." + input;
    var activeButton = document.querySelector(buttonClass);

    // adding a new class to start the animation
    activeButton.classList.add("pressed");

    // removing the pressed class after a slight delay to finalize the animation
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}

var numOfButtons = document.querySelectorAll(".drum").length;
var buttons = document.querySelectorAll(".drum"); 

// adding an event listener to ALL drum buttons and making them play sounds when clicked
for (var i = 0; i < numOfButtons; i++){
    buttons[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML);
        animateButton(buttonInnerHTML);
    })
}

// adding an event listener to the entire document to track the key presses
document.addEventListener("keydown", function(event) {
    var pressedKey = event.key;
    playSound(pressedKey);
    animateButton(pressedKey);
})