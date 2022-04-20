// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe this project.',
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'What are the instalation instructions?',
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: 'Enter the usage information.',
    },
    {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'What are the contribution guidelines?',
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'What are the test instructions?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to use?',
        choices: ['MIT License', 'Apache License 2.0', 'Mozilla Public License 2.0', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Boost Software License 1.0', 'The Unilicense'],
        default: '0',
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
