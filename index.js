const fs = require('fs');
const inquirer = require('inquirer');
var validator = require("email-validator");

//JEST for testing...

let theWholeTeam = [];

function Manager(name, id, email, officeNumber) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
}
function Engineer(name, id, email, githubName) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.githubName = githubName;
}
function Intern(name, id, email, school) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
}

//FIRST: MANAGER QUESTIONS
inquirer.prompt([
    {
        name: 'name',
        type: 'input',
        message: 'what is the manager\'s name?',
        validate: (answer) => {
            if (answer == '') {
                return 'please enter a name';
            }
            return true;
        }
    },
    {
        name: 'id',
        type: 'input',
        message: 'what is the manager\'s id nubmer?',
        validate: (answer) => {
            if (isNaN(answer) || (answer == '')) {
                return 'please enter an id number';
            }
            return true;
        }
    },
    {
        name: 'email',
        type: 'input',
        message: 'what is the manager\'s email address?',
        validate: (answer) => {
                if ((answer == '') || (validator.validate(answer)) == false) {
                return 'please enter an email address';
            }
            return true;
        }
    },
    {
        name: 'officeNumber',
        type: 'number',
        message: 'what is the manager\'s office number?',
        validate: (answer) => {
            if (isNaN(answer) || (answer == '')) {
                return 'please enter an office number';
            }
            return true;
        }

    },
])
    //ADD MANAGER INFO TO TEAM ARRAY AND CALL FUNCTION FOR NEXT STEP 
    .then(function (data) {
        const name = data.name
        const id = data.id
        const email = data.email
        const officeNumber = data.officeNumber
        const teamMember = new Manager(name, id, email, officeNumber)
        theWholeTeam.push(teamMember)

        console.log(theWholeTeam);

        anotherTeamMember();

    });

//ADD ANOTHER TEAM MEMBER/SPECIFY THEIR JOB-TITLE
function anotherTeamMember() {
    inquirer.prompt([
        {
            name: 'pickNext',
            type: 'list',
            message: 'Would you like to add more team members?',
            choices: ['engineer', 'intern', 'no more team members']
        }
    ])
        .then(function (data) {
            switch (data.pickNext) {
                case 'engineer':
                    addEngineer();
                    break;
                case 'intern':
                    addIntern();
                    break;
                case 'no more team members':
                    // writes the info into appropriate slots of html template
                    buildTeam();
                    break;
            }
        });
}

// if Engineer...
function addEngineer() {
    inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'what is the engineer\'s name?',
            validate: (answer) => {
                if (answer == '') {
                    return 'please enter a name';
                }
                return true;
            }
        },
        {
            name: 'id',
            type: 'input',
            message: 'what is the engineer\'s id nubmer?',
            validate: (answer) => {
                if (isNaN(answer) || (answer == '')) {
                    return 'please enter an id number';
                }
                return true;
            }
        },
        {
            name: 'email',
            type: 'input',
            message: 'what is the engineer\'s email address?',
            validate: (answer) => {
                if ((answer == '') || (validator.validate(answer)) == false) {
                    return 'please enter an email address';
                }
                return true;
            }
        },
        {
            name: 'githubName',
            type: 'input',
            message: 'what is the engineer\'s github user name?',
            validate: (answer) => {
                if (answer == '') {
                    return 'please enter a github user name';
                }
                return true;
            }

        },
    ])
        //.PUSH ENGINFO TO [THEWHOLETEAM]
        .then(function (data) {
            const name = data.name
            const id = data.id
            const email = data.email
            const githubName = data.githubName
            const teamMember = new Engineer(name, id, email, githubName)
            theWholeTeam.push(teamMember)

            console.log(theWholeTeam);
            anotherTeamMember();

        });

}

//if Intern...
function addIntern() {
    inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'what is the intern\'s name?',
            validate: (answer) => {
                if (answer == '') {
                    return 'please enter a name';
                }
                return true;
            }
        },
        {
            name: 'id',
            type: 'input',
            message: 'what is the intern\'s id nubmer?',
            validate: (answer) => {
                if (isNaN(answer) || (answer == '')) {
                    return 'please enter an id number';
                }
                return true;
            }
        },
        {
            name: 'email',
            type: 'input',
            message: 'what is the intern\'s email address?',
            validate: (answer) => {
                if ((answer == '') || (validator.validate(answer)) == false) {
                    return 'please enter an email address';
                }
                return true;
            }
        },
        {
            name: 'school',
            type: 'input',
            message: 'what school does the intern currently attend?',
            validate: (answer) => {
                if (answer == '') {
                    return 'please enter a school';
                }
                return true;
            }

        },
    ])
        //.PUSH INTERNFO TO [THEWHOLETEAM]
        .then(function (data) {
            const name = data.name
            const id = data.id
            const email = data.email
            const school = data.school
            const teamMember = new Intern(name, id, email, school)
            theWholeTeam.push(teamMember)
            console.log(theWholeTeam);
            anotherTeamMember();
        });
}

function buildTeam() {
    console.log(theWholeTeam);
}
    // const filename = 'roster.html'
    // fs.writeFile(filename, ?___?, (err) =>
    //     err ? console.log(err) : console.log('Success!')
    // );

// });

//-------------------------------------------------------- acceptance criteria ---------------------------------------------------------//
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
//          <a mailto>
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
//          <a href 'https://....' target=_blank
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
//          inquirer .prompt --> start with manager 
//          then saves mgr info to variable? 
//          then 'another team member?' engineeer, intern, or nah? 
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
//          saves enj info to variable? 
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
//          saves to variable? 
// WHEN I decide to finish building my team
//          nah
//          fs.writeFile(theWholeTeam!)
// THEN I exit the application, and the HTML is generated
//----------------------------------------------------------- speculative! -----------------------------------------------------------//












