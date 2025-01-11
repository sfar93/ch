// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license) {
      return '';
    }
  
    const badges = {
      'MIT': '![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)',
      'GPLv3': '![GPLv3 License](https://img.shields.io/badge/License-GPLv3-blue.svg)',
      'Apache-2.0': '![Apache License](https://img.shields.io/badge/License-Apache%202.0-red.svg)',
      'BSD-3-Clause': '![BSD 3-Clause License](https://img.shields.io/badge/License-BSD%203--Clause-orange.svg)',
    };
  
    return badges[license] || '';
  }
  
  
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (!license) {
      return '';
    }
  
    const links = {
      'MIT': 'https://opensource.org/licenses/MIT',
      'GPLv3': 'https://www.gnu.org/licenses/gpl-3.0',
      'Apache-2.0': 'https://www.apache.org/licenses/LICENSE-2.0',
      'BSD-3-Clause': 'https://opensource.org/licenses/BSD-3-Clause',
    };
  
    return links[license] || '';
  }
  
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (!license) {
      return '';
    }
  
    const sections = {
      'MIT': `
  ## License
  
  This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) file for details.
  `,
      'GPLv3': `
  ## License
  
  This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](https://www.gnu.org/licenses/gpl-3.0) file for details.
  `,
      'Apache-2.0': `
  ## License
  
  This project is licensed under the Apache License 2.0 - see the [LICENSE](https://www.apache.org/licenses/LICENSE-2.0) file for details.
  `,
      'BSD-3-Clause': `
  ## License
  
  This project is licensed under the BSD 3-Clause License - see the [LICENSE](https://opensource.org/licenses/BSD-3-Clause) file for details.
  `,
    };
  
    return sections[license] || '';
  }

// TODO: Create a function to generate markdown for README
function generateMarkdown(responses) {
  
  return `# ${responses.Title}

## Username

${responses.Username}

## Email

${responses.Email}

## Description

${responses.Description} 

## Table of Contents

  -[Installation](#installation)
  -[Usage](#usage)
  -[License](#license)
  -[Contributer](#contributer)
  -[tests](#tests)
  -[questions](#questions)

## Contributers

${responses.Contributers}

## Installation

${responses.Installation}

## Questions

[My Github profile](http://github.com/${responses.Username})

${responses.Questions}

## Tests

${responses.Tests}

## Usage
${responses.Usage}


${renderLicenseSection(responses.license)}
${renderLicenseBadge(responses.license)}
${renderLicenseLink(responses.license)}`

}

export default generateMarkdown;
