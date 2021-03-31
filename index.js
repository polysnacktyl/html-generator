const fs = require('fs');
const inquirer = require('inquirer');
var validator = require("email-validator");
const Employee = require("./__construct__/employee");
const Manager = require("./__construct__/manager");
const Engineer = require("./__construct__/engineer")
const Intern = require("./__construct__/intern");
const Cards = [];

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
        const Employee = new Manager(name, id, email, officeNumber)
        theWholeTeam.push(Employee)

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
                    // console.log(theWholeTeam);
                    buildCards();
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
            const Employee = new Engineer(name, id, email, githubName)
            theWholeTeam.push(Employee)

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

            anotherTeamMember();
        });
}

function buildCards() {
    theWholeTeam.forEach((element) => {
        const div = (
            `   <div class="card">
                        <div class="card-header">
                            <h6 id="employeeName">${element.name}</h6>
                            <h6 id="jobTitle"><i class="fas fa-clipboard"></i> manager</h6>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li id="id" class="list-group-item">id: ${element.id}</li>
                                <li id="email" class="list-group-item">email: ${element.email}</li>
                                <li id="last" class="list-group-item">office: ${element.officeNumber}</li>
                            </ul>
                        </div>
                    </div>
                </div>
              `
        );
        Cards.push(div);

        // console.log('feasibly, this could be an intern\'s card');
        // console.log(element.school);
        // }
  
        
    }
    )
    writeHTML();
};


function writeHTML() {
//     console.log(Cards);
// }
    Cards.forEach((object) => {
        const doc =
        `<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">

        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
            integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="./assets/style.css">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;600&display=swap" rel="stylesheet">
        <title>Team Profile</title>
        </head>

         <body>
            <div class="jumbotron jumbotron-fluid">
                <h1>The Whole Team</h1>
            </div>

            <div class="container">
                <div class="card-deck">
                ${object}
            </div>
        </body>
        </html>`
        
        const filename = 'roster.html'
        fs.writeFile(filename, doc, (err) =>
            err ? console.log(err) : console.log('Success!')
        )}
    )}

