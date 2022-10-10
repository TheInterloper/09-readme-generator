// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');




// TODO: Create an array of questions for user input

const questions = [
    'What is the name of the project you are working on?',              //0
    'Provide a description for the project.',                           //1
    'What are the installation instructions for the project, if any?',  //2
    'What are the usage instructions for the project, if any?',         //3
    'List any additonal contributors to your project here.',            //4
    'What type of license should be applied to this project?',          //5
    'Enter your github username here.',                                 //6
    'Eneter your email address here'                                    //7

];




// TODO: Create a function to write README file
function writeToFile(response) {
    fs.writeFile('README.md', content, (err) => 
        err ? console.log(err) : console.log('README generated successfully'))
}


// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
        {
            type: 'input',

            name: 'title',

            message: questions[0],
        },

        {
            type: 'input',

            name: 'description',

            message: questions[1],
        },

        {
            type: 'input',

            name: 'install',

            message: questions[2],
        },

        {
            type: 'input',

            name: 'usage',

            message: questions[3],
        },

        {
            type: 'input',

            name: 'credits',

            message: questions[4],
        },

        {   type: 'list',

            name: 'license',

            message: questions[5],

            choices: ['NONE','Apache 2.0', 'BSD-3', 'MIT', 'MPL 2.0', 'WTFPL']
        },

        {
            type: 'input',

            name: 'github',

            message: questions[6],
        },

        {
            type: 'input',

            name: 'email',

            message: questions[7],
        }    
    ])
    .then((response) => {
        writeToFile(generateMarkdown(response))
        })
}

// Function call to initialize app
init();
