var inquirer = require("inquirer");
var fs =require('fs');
var generateHTML = require("./generateHTML");

inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is you github username?"
    },
    {
    type: "list",
    message: "What is your favorite color?",
    name: "color",
    choices: [
        "white",
        "blue",
        "pink",
        "orange",
        "purple"
        "red",
        "brown"
    ]
    }
])

const questions = [
  
];

function writeToFile(fileName, data) {
 
}

async function init() {

init();
}