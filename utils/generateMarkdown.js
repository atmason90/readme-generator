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
  return `
  # ${data.projectTitle}
  ![License Badge](https://img.shields.io/badge/License-${data.license}-blue)

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${data.instructions}

  ## Usage
  ${data.usageInfo}

  ## License
  This project is licensed under the ${data.license} license.

  ## Contributing
  ${data.contributionGuidelines}

  ## Tests
  ${data.testInstructions}

  ## Questions
  If there are any questions about this project, please reach out to me directly at ${data.email}. To see more of my projects, you can visit my GitHub profile at username: ${data.githubUsername}.

`;
}

module.exports = generateMarkdown;
