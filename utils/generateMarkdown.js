// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache 2.0' ) {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
        
  } else if (license === 'BSD-3') {
    return  `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]`

  } else if (license === 'MIT') {
    return `[![License](https://img.shields.io/badge/License-MIT-yellow.svg)]`
  
  } else if (license === 'MPL 2.0') {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`

  } else if (license === 'WTFPL') {
    return `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)]`

  } else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache 2.0') {
    return `(https://opensource.org/licenses/Apache-2.0)`
    
  } else if (license === 'BSD-3') {
    return  `(https://opensource.org/licenses/BSD-3-Clause)`

  } else if (license === 'MIT') {
    return `(https://opensource.org/licenses/MIT)`

  } else if (license === 'MPL 2.0') {
    return `(https://opensource.org/licenses/MPL-2.0)`

  } else if (license === 'WTFPL') {
    return `(http://www.wtfpl.net/about/)`

  } else {
      return ''
  }
};
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {

  return `${response.title}
  # ${response.title}
    
  # Table of Contents

  - [Installation](#installation)
  - [Usage](#usage) 
  - [Credits](#credits)
  - [License](#license)

  # Description
  
  ${response.description}
  
   
  INSERT SCREENSHOT IMAGE HERE AFTER README IS GENERATED
  ![](assets/images/)
  
  # Installation
  
  ${response.install}
  
  # Usage
  
  ${response.usage}
  
  # Credits
  
  ${response.credits}

  # Licenses
  ${renderLicenseBadge(response.licenses)}
  ${renderLicenseLink(response.licenses)}

  # Contact Information
  ${response.github}
  ${response.email}
`
}

module.exports = generateMarkdown;
