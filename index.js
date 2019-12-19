var inquirer = require("inquirer");
var fs =require('fs');
var generateHTML = require("./generateHTML");
var pdf = require("pdf")

inquirer
    .prompt([
    {
        type: "input",
        name: "username",
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
]).then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}`;

    axios.get(queryUrl).then(function(response) {
        console.log(response) {

        });

        const gitHubInfo = info.join("\n");

        fs.writeFile("github.pdf", gitHubInfo, function(err)
    }

const questions = [
  
];

function writeToFile(github.pdf, data) {
 
}

async function init() {

init();
}