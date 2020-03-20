const axios = require("axios");
const inquirer = require("inquirer");
const genHTML = require("./generateHTML");
const createPDF = require("html-pdf");
const options = { format: "Letter" };
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?'
    },
    {
        type: 'list',
        name: 'favColor',
        message: 'What is your favorite color?',
        choices: [
            'green',
            'blue',
            'pink',
            'red',
            'orange',
            'purple'
        ]
    }
];
function prompt() {
    return inquirer.prompt(questions);
}
function init() {
    prompt()
        .then(({ username, favColor }) => {
            const queryURL = `https://api.github.com/users/${username}`;
            axios.get(queryURL)
                .then(res => {
                    res.data.color = favColor;
                    const html = genHTML(res.data);
                    createPDF.create(html, options).toFile(`./${res.data.name}.pdf`, (err, res) => {
                        if (err) {
                            return console.log(err);
                        } else {
                            console.log(res);
                        }
                    });
                })
        })
}
init();