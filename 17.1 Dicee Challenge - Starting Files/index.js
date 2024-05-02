// writing a function that generates random nums between 1 and 6
function generateRandomNum() {
    return Math.floor(Math.random() * 6) + 1;
}

// "rolling the dice" for both players
var num1 = generateRandomNum();
var num2 = generateRandomNum();

// getting the image sources 
var newImgPlayer1 = "./images/dice" + num1 + ".png";
var newImgPlayer2 = "./images/dice" + num2 + ".png";

// changing the images on the website
var player1Img = document.querySelector(".img1");
player1Img.setAttribute("src", newImgPlayer1);
var player2Img = document.querySelector(".img2");
player2Img.setAttribute("src", newImgPlayer2);

// announcing the winner
if (num1 > num2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} 
else if (num1 < num2){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} 
else {
    document.querySelector("h1").innerHTML = "Draw!";
}