// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'NONE' ) {
    return ''
    
  } else if (license === 'Apache') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`

  } else if (license === 'BSD 3') {
    return  `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  
  } else if (license === 'MIT') {
    return `[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`

  } else if (license === 'MPL') {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`

  } else ( license === 'WTFPL')
    return `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'NONE' ) {
    return ''
    
  } else if (license === 'Apache') {
    return `(https://opensource.org/licenses/Apache-2.0)`

  } else if (license === 'BSD 3') {
    return  `(https://opensource.org/licenses/BSD-3-Clause)`

  } else if (license === 'MIT') {
    return `(https://opensource.org/licenses/MIT)`

  } else if (license === 'MPL') {
    return `(https://opensource.org/licenses/MPL-2.0)`

  } else ( license === 'WTFPL')
    return `(http://www.wtfpl.net/about/)`

}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `${response.title}
  # ${title}
    
  ${license}

  # Table of Contents

  1. [Installation] (#installation)
  2. [Usage] (#usage) 
  3. [Credits] (#credits)
  4. [License] (#license)

  ## Description
  
  ${description}
  
  ${github}
  
  INSERT SCREENSHOT IMAGE HERE
  ![](assets/images/... )
  
  ## Installation
  
  ${install}
  
  ## Usage
  
  ${usage}
  
  ## Credits
  
  ${credits}

  ## License
  ${license}
`;
}

module.exports = generateMarkdown;
