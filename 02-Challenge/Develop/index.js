// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';


// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'Title',
    message: 'What is your project name?'
},
{
    type: 'input',
    name: 'Username',
    message: 'What is your Github userName?'
},
{
    type: 'input',
    name: 'Email',
    message: 'What is your email address?'
},
{
    type: 'input',
    name: 'Description',
    message: 'Please right a short discription of your project?'
},
{
    type: 'input',
    name: 'Contributers',
    message: 'What does the user need to know about contributing to the repo?'
},
{
    type: 'input',
    name: 'Installations',
    message: 'What needs to be installed?'
},
{
    type: 'input',
    name: 'Questions',
    message: 'where to direct questions about this code?'
},
{
    type: 'input',
    name: 'Test',
    message: 'What command should be run to run tests?'
},
{
    type: 'input',
    name: 'usage',
    message: 'What does the user need to know about using repo?'
},

{
    type: 'list',
    message: 'what kind of license?',
    name: 'license',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
},

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile('readme-samp.md', data, (err) => {
        if  (err) throw err;
        console.log('README file has been created successfully.');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        const readmeContent = generateMarkdown(responses);


        writeToFile('README.md', readmeContent);
    });
}

// Function call to initialize app
init();