import express from "express";
import bodyParser from "body-parser";
// setting the project directory
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));


// starting the app
const app = express();
const port = 3000;
var bandName = "";


// mounting the body parser middleware 
app.use(bodyParser.urlencoded({ extended: true }));


// writing our own band name generator middleware
function bandNameGenerator(req, res, next){
  console.log(req.body);
  bandName = req.body["street"] + req.body["pet"];
  next();
}

// mounting the band name generator middleware 
app.use(bandNameGenerator);

// get handler that renders the page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
})


// post handler that gets the submitted input and returns a page with
// the generated band name
app.post("/submit", (req, res) => {
  res.send(`<h1>Your band name is: </h1><h2>${bandName}🤘</h2>`);
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
