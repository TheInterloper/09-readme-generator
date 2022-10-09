// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
// const questions = [];

inquirer
    .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the installation steps?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of your project?',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'What are the contributors of your project?',
    },
    {   type: 'list',
        name: 'license',
        message: 'What license should be used on this project?',
        choices: ['MIT','BSD-3-Clause',]
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    }  

    ])
    .then((response) => {
        const content = generateReadme(response);

        fs.writeFile('README.md', content, (err) => 
            err ? console.log(err) : console.log('README generated successfully')
        );
        })


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
const generateReadme = ({title, description, install, usage, credits, license, github}) => 

    `# ${title}

    ## License
    
    ${license}

    ## Description
    
    ${description}
    
    https://theinterloper.github.io/01coderefactor/
    
    ![](assets/images/Horiseon.png)
    
    ## Installation
    
    ${install}
    
    ## Usage
    
    ${usage}
    
    ## Credits
    
    ${credits}
    
    `;

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
