const fs = require('fs');
const inquirer = require('inquirer');




inquirer
    .prompt([
        //questions start here
        {
            type: 'input',
            name: 'name',
            message: 'what is your name?',
            validate: (answer) => {
                if (answer == '') {
                    return 'please enter your name';
                }
                return true;
                //validate how-to video 
                //[this youtube video](https://www.youtube.com/watch?v=1AxFrY2oSiw)
                //by [Markodex](https://www.youtube.com/channel/UC7RGmhOjaxsBdCl_XEsDPrw)
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'what is your id nubmer?',
            validate: (answer) => {
                if (answer == '') {
                    return 'please enter your id number';
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'what is your email address?',
            validate: (answer) => {
                if (answer == '') {
                    return 'please enter your email address';
                }
                return true;
            }
        },
        {
            type: 'checkbox',
            name: 'jobTitle',
            message: 'what is your job title?',
            choices: ['manager', 'engineer', 'intern'],
            validate: (answer) => {
                if (answer == '') {
                    return 'please select a job title';
                }
                // if (answer == 'intern') {
                //     inquirer.prompt([
                //         type: 'input',
                //         name: 'school',
                //         message: 'what school do you attend?'
                //     ])
                // }
                return true;
            }
        },

    ])




    .then((answers) => {
        console.log(answers);
        console.log(answers.jobTitle);

    });


//JEST for testing...

//CLASSES
//  Employee
//  Manager
//  Engineer 
//  Intern 

// what is the team manager's: 
        // [name, id, email, office number]

// which type of team member would you like to add?
//    > engineer
//      intern 
//      i don't want to add anymore team members 

        // what is the engineer's:
        // [name, id, email, githubUsername] 

//---------------------------------------------------------------

// which type of team member would you like to add? 
//      engineer
//    > intern 
//      i don't want to add anymore team members 

        // what is the intern's:
        // [name, ID, email, and school]

//---------------------------------------------------------------

// which type of team member would you like to add? 
//      engineer
//      intern
//    > i don't want to add anymore team members 

// no more team members? --> writes information into the html template 



