console.log("Heloo");

// Global Variables
const inquirer = require('inquirer');
const fs = require('fs');
// const util = require('util');

// const writeFileAsync = util.promisify(fs.writeFile);

// const setText = ({ githubName, email, projectTitle, description, installInstructions, usageInfo, contribGuide, testInstructions, license }) => {
const makeMarkdown = (answers) =>
    `  # ${answers.projectTitle}

        ## Table of Contents
        
        * [Installation](#Installation)
        * [Usage](#Usage)
        * [License](#License)
        * [Contributing](#Contributing)
        * [Tests](#Tests)
        * [Questions?](#Questions?)
        
        ## Description
        
        ${answers.description}

        ## Installation
        
        ${answers.installInstructions}

        ## Usage
        
        ${answers.usageInfo}

        ## License
        
        ${answers.license}

        ## Contributing
        
        ${answers.contribGuide}

        ## Tests
        
        ${answers.testInstructions}

        ## Questions?
        
        For questions about this project, please [email me](${answers.email}) or [find me on GitHub](https://github.com/${answers.githubName}).
        `;


inquirer
    .prompt([
        // GitHub Username
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'githubName',
            // Validate to ensure user has entered something for this prompt.
            // validate: function (answer) {
            //     if (answer.length < 1) {
            //         return console.log("You must enter a GitHub username.");
            //     }
            //     return true;
        },
        // Email address
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
            // Validate to ensure user has entered something for this prompt.
            // validate: function (answer) {
            //     if (answer.length < 1) {
            //         return console.log("You must enter a email address.");
            //     }
            //     return true,
        },
        // Project Title
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'projectTitle',
            // Validate to ensure user has entered something for this prompt.
            // validate: function (answer) {
            //     if (answer.length < 1) {
            //         return console.log("You must enter a project title.");
            //     }
            //     return true;
        },
        // Project Description
        {
            type: 'input',
            message: 'What is a short description of your project?',
            name: 'description',
            // Validate to ensure user has entered something for this prompt.
            // validate: function (answer) {
            //     if (answer.length < 1) {
            //         return console.log("You must enter a description.");
            //     }
            //     return true;
        },
        // Installation Instructions
        {
            type: 'input',
            message: 'What are the installation instructions?',
            name: 'installInstructions',
            // Optional prompt; not validation required.
        },
        // Usage Information
        {
            type: 'input',
            message: 'What is the usage information?',
            name: 'usageInfo',
            // Optional prompt; not validation required.
        },
        // Constribution Guidelines
        {
            type: 'input',
            message: 'What are the contribution guidelines?',
            name: 'contribGuide',
            // Optional prompt; not validation required.
        },
        // Test Instructions
        {
            type: 'input',
            message: 'What are the test instructions?',
            name: 'testInstructions',
            // Optional prompt; not validation required.
        },
        // License Selection
        {
            type: 'list',
            message: 'Please choose a license. If unsure, go to choosealicense.com/',
            choices: ['afl-3.0', 'apache-2.0', 'artistic-2.0', 'bsl-1.0', 'bsd-2-clause', 'bsd-3-clause', 'bsd-3-clause-clear', 'cc', 'cc0-1.0', 'cc-by-4.0', 'cc-by-sa-4.0', 'wtfpl', 'ecl-2.0', 'epl-1.0', 'epl-2.0', 'eupl-1.1', 'agpl-3.0', 'gpl', 'gpl-2.0', 'gpl-3.0', 'lgpl', 'lgpl-2.1', 'lgpl-3.0', 'isc', 'lppl-1.3c', 'ms-pl', 'mit', 'mpl-2.0', 'osl-3.0', 'postgresql', 'ofl-1.1', 'ncsa', 'unlicense', 'zlib'],
            name: 'license',
            // Optional prompt; not validation required.
        },
    ])
    .then((answers) => {
        const readmeContent = makeMarkdown(answers);
        const filename = `${answers.projectTitle.toLowerCase().split(' ').join('')}.md`;

        fs.writeFile(filename, readmeContent, (err) =>
            err ? console.log(err) : console.log('Ding! File done!')
        );
    });

