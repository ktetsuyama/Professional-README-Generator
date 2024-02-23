// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(answer) {
	let badge = "";
	if (answer.license === "mit") {
		badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
	} else if (answer.license === "wtf") {
		badge = `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`;
	} else if (answer.license === "ccsa") {
		badge = `[![License: CC BY-SA  4.0](https://licensebuttons.net/l/by-sa/4.0/80x15.png)](https://creativecommons.org/licenses/by-sa/4.0/)`;
	} else if (answer.license === "gnu") {
		badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
	}
	return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(answer) {
	let link = "";
	if (answer.license === "mit") {
		link = "https://opensource.org/licenses/MIT";
	} else if (answer.license === "wtf") {
		link = "http://www.wtfpl.net/about/";
	} else if (answer.license === "ccsa") {
		link = "https://creativecommons.org/licenses/by-sa/4.0/";
	} else if (answer.license === "gnu") {
		link = "https://www.gnu.org/licenses/gpl-3.0";
	}
	return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(answer) {
	const licenseBadge = renderLicenseBadge(answer);
	const licenseLink = renderLicenseLink(answer);
	if (licenseBadge && licenseLink) {
		return `This project is covered under the ${licenseBadge}\n\nLearn more about this license [here](${licenseLink}).`;
	} else {
		return "";
	}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {
	const creditsArray = answer.credits.split(",");
	const creditsLinks = creditsArray.map((credit) => {
		const trimmedCredit = credit.trim();
		return `[${trimmedCredit}](${trimmedCredit})`;
	});
	const creditsMarkdown = creditsLinks.join("\n \n");
	return `# ${answer.title}

## Description
	
${answer.description}
	
## Table of Contents
	
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [Credits](#credits)
- [Tests](#tests)
- [Contact for Questions](#contact)
- [License](#license)
	
## Installation
	
${answer.install}
	
## Usage
	
${answer.usage}
	
## Contributors
	
I worked with the following people on this project:
${answer.contributors}

## Credits

I used the following guides in building this application:

${creditsMarkdown}
	
## Tests
	
${answer.tests}


## Contact

You can contact me here is you have questions: 

Github: [${answer.github}](https://github.com/${answer.github})

Email: [${answer.email}](mailto:${answer.email})

## License
	
${renderLicenseSection(answer)}`;
}

module.exports = generateMarkdown;
