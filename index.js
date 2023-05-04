// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questionsArray = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please provide a brief description:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What dependencies are required?',
        name: 'dependencies',
    },
    {
        type: 'input',
        message: 'How would one go about downloading this app?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How would one go about using this app?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Who are the contributors?',
        name: 'contributors',
    },
    {
        type: 'input',
        message: 'What tests were run on this app?',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'Which license would you like to use?',
        name: 'license',
        choices: ['MIT', 'The Unlicense', 'zLib License', 'Mozilla Public License 2.0', 'ISC', 'Do What The F*ck You Want To Public License'],
    },
    {
        type: 'input',
        message: 'What is your GitHub?',
        name: 'gitHub',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('README-generator.md', data,(err) => {
        if(err){
            console.log(err)
        } else {
        console.log('Everything went according to plan!');
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    return inquirer
    .prompt(questionsArray)
    .then((Input) => {
      console.log(Input);
      return generateMarkdown(Input);
    })
    .then((readMeStuff) => {
      return writeToFile(readMeStuff);
    });
}

// Function call to initialize app
init();
