// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
	return `# ${answer.title}

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
	
	${answer.license}`;
}

module.exports = generateMarkdown;
