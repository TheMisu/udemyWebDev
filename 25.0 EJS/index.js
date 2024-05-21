import express from "express";

// starting the app
const app = express();
const port = 3000;

// init some variables we will need
var dayType = "";
var advice = "";


// get handler for the landing page
app.get("/", (req, res) => {
    const d = new Date();
    var dayIndex = d.getDay();


    // computing what type of day we have
    if (dayIndex < 5){
        dayType = "a weekday";
        advice = "it's time to grind!";
    } else {
        dayType = "the weekend";
        advice = "it's time to relax...";
    }


    // rendering the ejs template
    res.render("index.ejs", {
        dayType: dayType,
        advice: advice,
    });
});


// app listener
app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});