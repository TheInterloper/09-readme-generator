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


//I think this is what is being asked for based on this requirement??

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under


function renderLicenseSection(license) {
  switch (license) {
    case 'Apache 2.0':
      return `   Copyright [yyyy] [name of copyright owner]

      Licensed under the Apache License, Version 2.0 (the "License");
      you may not use this file except in compliance with the License.
      You may obtain a copy of the License at
   
        http://www.apache.org/licenses/LICENSE-2.0
   
      Unless required by applicable law or agreed to in writing, software
      distributed under the License is distributed on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      See the License for the specific language governing permissions and
      limitations under the License.
   `
    case 'BSD-3':
      return `Copyright <YEAR> <COPYRIGHT HOLDER>

      Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
      1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      
      2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
      
      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {

  return ` #${response.title}

  ${renderLicenseBadge(response.licenses)}
    
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
  ${renderLicenseSection(response.licenses)}

  # Contact Information
  ${response.github}
  ${response.email}
`
}

module.exports = generateMarkdown;
