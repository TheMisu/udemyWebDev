const fs = require("fs");


// creates a file as specified, with the content we've entered
fs.writeFile("messageMe.txt", "Hello From NodeJS!\nHello From Me!", (err) => {
    if (err) throw error;
    console.log("The file has been saved");
});


// reads from the specified file 
fs.readFile("messageMe.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
});