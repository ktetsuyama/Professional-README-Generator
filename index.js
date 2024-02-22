// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const choices = [
	{ name: "MIT License", value: "mit" },
	{ name: "The Do What the Fuck You Want to Public License", value: "wtf" },
	{ name: "CC Attribution-ShareAlike 4.0 International", value: "ccsa" },
	{ name: "GNU GPL v3", value: "gnu" },
	{ name: "None", value: "none" },
];

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
		message:
			"What are the urls for the guides you used to build this project? (hint: separate urls with a comma)",
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
			"What is your GitHub username (for any questions people may have)? (hint: use only lowercase letters)",
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
		choices: choices,
	},
];

// TODO: Create a function to write README file
function writeReadme(readMeContent) {
	fs.writeFile("README.md", readMeContent, (err) =>
		err ? console.error(err) : console.log("Your README file is ready")
	);
}

// TODO: Create a function to initialize app
function initializeApp() {
	inquirer.prompt(questions).then((result) => {
		const markDown = generateMarkdown(result);
		writeReadme(markDown);
		return markDown;
	});
}

// Function call to initialize app
initializeApp();
