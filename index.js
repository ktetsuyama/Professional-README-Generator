// TODO: Include packages needed for this application
import fs from "fs";

import inquirer from "inquirer";

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
		message: "List the Table of Contents",
		name: "table",
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
		message: "What license is your project under?",
		name: "license",
	},
	{
		type: "input",
		message: "What are the names of any contributors?",
		name: "contributors",
	},
	{
		type: "input",
		message: "Please provide some tests for your application",
		name: "usage",
	},
	{
		type: "input",
		message: "What is your email address (for any questions people may have)?",
		name: "usage",
	},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
