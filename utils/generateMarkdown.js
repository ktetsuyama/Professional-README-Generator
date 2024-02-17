// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
	[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

	[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)

	[![License: CC BY-SA 4.0](https://licensebuttons.net/l/by-sa/4.0/80x15.png)](https://creativecommons.org/licenses/by-sa/4.0/)

	[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

	https://opensource.org/license/mit/

	http://www.wtfpl.net/about/

	https://creativecommons.org/licenses/by-sa/4.0/

	https://www.gnu.org/licenses/gpl-3.0

}

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
    - [Credits](#credits)
	- [Tests](#tests)
	- [Contact for Questions](#email)
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

  [${answer.credits}](${answer.credits})
	
	## Tests
	
	${answer.tests}


##Contact for Questions

You can contact me here is you have questions: 

Github: [${answer.github}](https://github.com/${answer.github})
Email: [${answer.email}](mailto:${answer.email})

	## License
	
  This project is covered under a ${answer.license} license.`;
}

module.exports = generateMarkdown;
