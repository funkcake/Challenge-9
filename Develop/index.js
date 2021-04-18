// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
//const generatePage = require('./src/page-template');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your name!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your GitHub username!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your Email (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter your Email!');
            return false;
          }
        }
    },
    {   
        type: 'input',
        name: "title",
        message: "What is the title of your project?", 
    },
    {   
        type: 'input',
        name: "description",
        message: "Please provide a description of the project"
    },
    {   
        type: 'input',
        name: "table of content",
        message: "Please provide a table on content"
    },
    {   
        type: 'input',
        name: "installation",
        message: "What is the installation process?"
    },
    {   
        tpye: 'input',
        name: "usage",
        message: "How will this project be used?"
    },
    {   
        type: 'checkbox',
        name: "licenses",
        message: "What licenses are required with this project?",
        choices: ['Apache', 'BSD 3-Clause', 'BSD 2-Clause', 'GNU Library', 'MIT', 'Mozilla Public', 'Eclipse Public']
    },
    {   
        type: 'input',
        name: "contribution",
        message: "Who were the contributors to this project?"
        
    },
    {   
        tpye: 'input',
        name: "test",
        message: "What is the test process for this project?"
    }
]);
};

questions();

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
