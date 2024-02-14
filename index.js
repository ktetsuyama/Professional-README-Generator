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
		message: "Please provide some tests for your application",
		name: "tests",
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
inquirer.prompt(questions).then((answer) => {
	const readMeContent = `# ${answer.title}

	## Description
	
	${answer.description}
	
	## Table of Contents
	
	- [Installation](#installation)
	- [Usage](#usage)
	- [Contributors](#contributors)
	- [Tests](#tests)
	- [Contact for Questions](#email)
	- [License](#license)
	
	## Installation
	
	${answer.install}
	
	## Usage
	
	${answer.usage}
	
	## Contributors
	
	I worked with the folloing people on this project:
	${answer.contributors}
	
	## Tests
	
	${answer.tests}


##Contact for Questions

You can contact me here is you have questions: ${answer.email}

	## License
	
	${generateMarkdown()}`;
	fs.writeFile("README.md", readMeContent, (err) =>
		err ? console.error(err) : console.log("Your README file is ready")
	);
});
