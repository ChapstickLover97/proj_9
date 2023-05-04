// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// I can't figure this out :(
// function renderLicenseBadge(license) {
//   if (license === 'MIT') {
//     return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
//   } else if (license === 'The Unlicense') {
//     return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
//   } else if (license === 'zLib License') {
//     return `[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)`;
//   } else if (license === 'Mozilla Public License 2.0') {
//     return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
//   } else if (license === 'ISC') {
//     return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
//   } else if (license === 'Do What The F*ck You Want To Public License') {
//     return `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`;
//   } else {
//     return "";
//   }
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// I can't figure this out :(
// function renderLicenseLink(license) {
//   if (license === 'MIT') {
//     return "[MIT](https://opensource.org/licenses/MIT)";
//   } else if (license === 'The Unlicense') {
//     return "[The Unlicense](http://unlicense.org/)";
//   } else if (license === 'zLib License') {
//     return "[zLib License](https://opensource.org/licenses/Zlib)";
//   } else if (license === 'Mozilla Public License 2.0') {
//     return "[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)";
//   } else if (license === 'ISC') {
//     return "[ISC](https://opensource.org/licenses/ISC)";
//   } else if (license === 'Do What The F*ck You Want To Public License') {
//     return "[Do What The F*ck You Want To Public License](http://www.wtfpl.net/)";
//     } else {
//       return "";
//     }
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// I can't figure this out :(
// function renderLicenseSection(license) {
//   let licenseInfo = '';
//   if (license === 'MIT') {
//     licenseInfo = 'MIT License';
//   } else if (license === 'The Unlicense') {
//     licenseInfo = 'The Unlicense';
//   } else if (license === 'zLib License') {
//     licenseInfo = 'zLib License';
//   } else if (license === 'Mozilla Public License 2.0') {
//     licenseInfo = 'Mozilla Public License 2.0';
//   } else if (license === 'ISC') {
//     licenseInfo = 'ISC';
//   } else if (license === 'Do What The F*ck You Want To Public License') {
//     licenseInfo = 'Do What The F*ck You Want To Public License';
//   }

//   return `## License
//   ${licenseInfo}`;
// };

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

 ## Table of Contents

  * [Description](#description)
  * [Dependencies](#dependencies)
  * [Usage](#usage)
  * [Contributers](#contributers)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)

  ## Description 

  ${data.description}

  ## Dependencies  

  ${data.dependencies}

  ## Usage 

  ${data.usage}

  ## Contributers 

  ${data.contributors}

  ## Tests 

  ${data.tests}

  ## Questions???

Github: ${data.gitHub}\n
Email: ${data.email}`;
};

module.exports = generateMarkdown;
