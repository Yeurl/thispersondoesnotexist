//A basic puppeteer for thispersondoesnotexist
//

var maxPicts = 10; // HERE CHANGE THE NUMBER OF PICTURE YOU WANT TO DOWNLOAD


const puppeteer = require('puppeteer'); 
const fs        = require( 'fs' );

var i = 0; 

const url = 'https://thispersondoesnotexist.com/';


puppeteer.launch({headless:false}).then(async browser => {   

const page = await browser.newPage();   

for(i;i<maxPicts;i++){

    var viewSource = await page.goto(url);
    fs.writeFile("./"+i+"\.jpg", await viewSource.buffer(), function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });
}












}); 