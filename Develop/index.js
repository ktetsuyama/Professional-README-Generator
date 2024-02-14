// TODO: Include packages needed for this application
import fs from "fs";

import inquirer from "inquirer";

// TODO: Create an array of questions for user input
const questions = [
	{
		type: "input",
		message: "What is your name?",
		name: "name",
	},
	{
		type: "input",
		message: "What is your location?",
		name: "location",
	},
	{
		type: "input",
		message: "Please provide a biography",
		name: "bio",
	},
	{
		type: "input",
		message: "What is your LinkedIn URL?",
		name: "linkedIn",
	},
	{
		type: "input",
		message: "What is your GitHub URL?",
		name: "gitHub",
	},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
