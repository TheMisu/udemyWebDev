//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming


import express from "express";
import bodyParser from "body-parser";
// setting the project directory
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));


// starting the express app
const app = express();
const port = 3000;
const correctPW = "correctPW";
var userPW = "";


// mounting the bodyParse middleware
app.use(bodyParser.urlencoded({ extended: true}));





// app listener
app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}.`);
});


// get handler for the landing page
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});


// post handler that displays the secret.html page if the inputted 
// password was correct or redirects to / otherwise
app.post("/check", (req, res) => {
    userPW = req.body["password"];

    // check if the inputted pw matches correctPW
    if (userPW === correctPW){
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.redirect("/");
    }
});