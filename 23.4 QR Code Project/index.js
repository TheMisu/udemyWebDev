// imports
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
import { error } from "console";



// 1. Use the inquirer npm package to get user input.
inquirer
    .prompt([
        {
            message: "Type in your URL: ",
            name: "URL",
        },
    ])
    .then((answers) => {
        var url = answers.URL;
        

        // 2. Use the qr-image npm package to turn the user entered URL into a QR code image.
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream("my_qr_img.png"));


        // 3. Create a txt file to save the user input using the native fs node module.
        fs.writeFile("myURL.txt", url, (err) => {
            if (err) throw err;
            console.log("The file has been saved.");
        });
    })
    .catch((error) => {
        if (error.isTtyError){
            console.log("Prompt couldn't be rendered in the current environment.")
        } else {
            console.log("Something else went wrong.")
        }
    });