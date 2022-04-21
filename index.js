// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMd = require('./utils/generateMarkdown');

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
        message: 'What are the installation instructions?',
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
        choices: ['MIT License', 'Apache License 2.0 License', 'Mozilla Public License 2.0', 'GNU AGPLv3 License', 'GNU GPLv3 License', 'GNU LGPLv3 License', 'Boost Software License 1.0', 'Unilicense'],
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
// function writeToFile(fileName, data) {
const writeFile = data => {    
    fs.writeFile('newreadme.md', data, err => {
        if(err) {
            console.log(err);
            return;
        } else {
            console.log('Success! Your file has now been generated.')
        }
    })
};

// TODO: Create a function to initialize app
// function init() {
    questions()
    .then(answers => {
        return generateMd(answers);
    })
    .then(data => {
        return writeFile(data);
    })
// }
    .catch(err => {
        console.log(err)
    })
// Function call to initialize app
// init();
