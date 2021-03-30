const fs = require('fs');
const inquirer = require('inquirer');
var validator = require("email-validator");
const Employee = require("./__construct__/employee");
const Manager = require("./__construct__/manager");
const Engineer = require("./__construct__/engineer")
const Intern = require("./__construct__/intern");

//JEST for testing...

let theWholeTeam = [];

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
            console.log(data);
            const name = data.name
            const id = data.id
            const email = data.email
            const school = data.school
            const teamMember = new Intern(name, id, email, school)
            theWholeTeam.push(teamMember)
        
            anotherTeamMember();
        });


}

function buildTeam() {
    console.log(theWholeTeam);


// forEach loop that will do a verb based on the string of text read in jobTitle
// --> so that we may make and place team member cards based on job 
// --> manager + engineer = level 1 card deck 
// --> intern = level 2 card deck 
    theWholeTeam.forEach((element) => {
        console.log(element.jobTitle + ': ' + element.name); 
        if (element.jobTitle == 'intern') {
            console.log('there is an intern, but where is my coffee?');
        }
    });
}

// thinking switch case for card write
        //     switch (data.pickNext) {
        //         case 'engineer':
        //             writengineer();
        //             break;
        //         case 'intern':
        //             writeIntern();
        //             break;
        //         case 'no more team members':
        //             // writes the info into appropriate slots of html template
        //             buildTeam();
        //             break;
        //     }
        // });
    // });
    // }

    // const filename = 'roster.html'
    // fs.writeFile(filename, ?___?, (err) =>
    //     err ? console.log(err) : console.log('Success!')
    // );
// });












