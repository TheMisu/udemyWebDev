import express from "express";
const app = express();
const port = 3000;


// prints to the console when the server starts running
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});



// request to get the home page
app.get("/", (req, res) => {
    res.send("Hello world!");
});