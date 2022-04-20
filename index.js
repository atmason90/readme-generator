// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter a project title.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe this project.',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter a project description.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'What are the instalation instructions?',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter steps for instalation.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: 'Enter the usage information.',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter usage information.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'What are the contribution guidelines?',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter contribution guidelines.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'What are the test instructions?',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter test instructions.');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to use?',
        choices: ['MIT License', 'Apache License 2.0', 'Mozilla Public License 2.0', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Boost Software License 1.0', 'The Unilicense'],
        default: ['MIT'],
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please choose a license option.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub username?',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter your email address.');
                return false;
            }
        }
    }
]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const fileName = ``
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
