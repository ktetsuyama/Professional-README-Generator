// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
	{
		type: "input",
		message: "What is the title of the project?",
		name: "title",
	},
	{
		type: "input",
		message: "What is a description of your project?",
		name: "description",
	},
	{
		type: "input",
		message: "How is the project installed?",
		name: "install",
	},
	{
		type: "input",
		message: "What is the usage of your project?",
		name: "usage",
	},
	{
		type: "input",
		message: "What are the names of any contributors?",
		name: "contributors",
	},
	{
		type: "input",
		message: "What are the urls for the guides you used to build this project?",
		name: "credits",
	},
	{
		type: "input",
		message: "Please provide some tests for your application",
		name: "tests",
	},
	{
		type: "input",
		message:
			"What is your GitHub username (for any questions people may have)?",
		name: "github",
	},
	{
		type: "input",
		message: "What is your email address (for any questions people may have)?",
		name: "email",
	},
	{
		type: "list",
		name: "license",
		message: "What license is your project under?",
		choices: [
			"MIT License",
			"The Do What the Fuck You Want to Public License",
			"CC Attribution-ShareAlike 4.0 International",
			"GNU GPL v3",
		],
	},
];

// TODO: Create a function to write README file

fs.writeFile("README.md", readMeContent, (err) =>
	err ? console.error(err) : console.log("Your README file is ready")
);

// TODO: Create a function to initialize app
inquirer.prompt(questions).then(generateMarkdown(readMeContent));

// Function call to initialize app
generateMarkdown();
