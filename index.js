const inquirer = require('inquirer');
const fs = require('fs');
​
const prompts = [
    // Project Title
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'projectTitle'
    },
    // Project Description
    {
        type: 'input',
        message: 'What is a short description of your project?',
        name: 'description'
    },
    // Installation Instructions
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installInstructions'
    },
    // Usage Information
    {
        type: 'input',
        message: 'What is the usage information?',
        name: 'usageInfo',
    },
    // Constribution Guidelines
    {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'contribGuide',
    },
    // Test Instructions
    {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'testInstructions',
    },
    // License Selection
    {
        type: 'list',
        message: 'Please choose a license:',
        choices: 
        name: 'license',
    },
    // GitHub Username
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'githubName',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must enter a GitHub username.");
            }
            return true;
    },
    // Email address
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
]
​
​
//  fs.readFile('data.csv', 'utf8', (error, data) =>
//    error ? console.error(error) : console.log(data)
//  );
​
​
const setText = ({ username, location, linkedIn, github, bio }) => {
    return `
          <!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="ie=edge">
              <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
              
            </head>
            <body>
              <div class="jumbotron jumbotron-fluid">
              <div class="container">
                <h1 class="display-4">Hi! My name is ${username}</h1>
                <p class=" lead">I am from ${location}</p>
                <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
                <ul class="list-group">
                  <li class="list-group-item">My GitHub username is: <b>${github}</b></li>
                  <li class="list-group-item">LinkedIn: ${linkedIn}</li>
                </ul>
                <p><b>my bio:</b> ${bio}</p>
              </div>
            </div>
            </body>
            </html>
        `
}
​
​
inquirer.prompt(prompts)
    .then((response) => {
        const writeHtml = setText(response)
        fs.writeFile('index.html', writeHtml, (err) =>
         err ? console.error(err) : console.log('Prompts written!'))
    });
​
​