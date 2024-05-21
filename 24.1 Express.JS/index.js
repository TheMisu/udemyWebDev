import express from "express";
const app = express();
const port = 3000;


// prints to the console when the server starts running
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});