const inquirer = require("inquirer");
const fs =require('fs');
const generateHTML = require("./generateHTML");
const pdf = require("pdf")
var myDoc = new pdf;
const axios = require("axios")
const writeFileAsync = util.promisfy(fs.writeFile);

function promptUser() {
 return inquirer.prompt([
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
        "purple",
        "red",
        "brown"
    ]
    }]);
}
.then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}`;

    axios.get(queryUrl).then(function(response) {
        console.log(response.data) {

        };

        const gitHubInfo = info.join("\n");

        fs.writeFile("github.pdf", gitHubInfo, function(err)
    }

function writeToFile(github.pdf, data) {
 
}

async function init() {
    console.log("hi")
try {
    const answers = await promptUser();

    const html = generateHTML(data);

    await writeFileAsync("index.html", html);

    console.log("Successfully wrote to indexedDB.html");
}   catch(err) {
    console.log(err);
}
};

init();