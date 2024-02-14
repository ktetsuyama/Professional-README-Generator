// TODO: Include packages needed for this application
import fs from "fs";

import inquirer from "inquirer";

import generateMarkdown from "./utils/generateMarkdown";

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
		type: "input",
		message: "What license is your project under?",
		name: "license",
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
