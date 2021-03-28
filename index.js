const fs = require('fs');
const inquirer = require('inquirer');
//JEST for testing...


inquirer
    .prompt([
        //questions start here
        {
            type: 'checkbox',
            name: 'jobTitle',
            message: 'what type of team member would you like to add?',
            choices: ['manager', 'engineer', 'intern', 'i\'m done adding team members'],
            validate: (answer) => {
                if (answer == '') {
                    return 'please make a selection';
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'name',
            message: 'team member\'s name:',
            validate: (answer) => {
                if (answer == '') {
                    return 'please enter a name';
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'team member\'s id number:',
            validate: (answer) => {
                if (answer == '') {
                    return 'please enter an id number';
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'team member\'s email:',
            validate: (answer) => {
                if (answer == '') {
                    return 'please enter an email address';
                }
                return true;
            }
        },
        
    ])

    .then((answers) => {
        console.log(answers);

    });


//----------------------------------------------------------- speculative! -----------------------------------------------------------//
//----------------Constructor Time?------------------------//
// function Manager(name, id, email, officeNumber) {
//     this.name = name;
//     this.id = id;
//     this.email = email;
//     this.officeNumber = officeNumber;
// }
// function Engineer(name, id, email, githubName) {
//     this.name = name;
//     this.id = id;
//     this.email = email;
//     this.githubName = githubName
// }
// function Intern(name, id, email, school) {
//     this.name = name;
//     this.id = id;
//     this.email = email;
//     this.school = school;
// }
//---------------------------------------------------------//

// -----------or...supermulitfunctionstyleboy? -----------//
//        function teamMember(name, id, email, officeNumber, githubName, school) {
//        this.name = name;
//        this.id = id;
//        this.email = email;
//        this.officeNumber = officeNumber;
//        this.githubName = githubName;
//        this.school = school;
//        and if this.property = '' --> return; maybe? i don't know how this works enough yet. 
// }

//----------------------------------------------------------- HTML! -----------------------------------------------------------//

    //--------------------------------------------------------------------- < doctype... > 
    //--------------------------------------------------------------------- < links rels? boostraps? > 
    //--------------------------------------------------------------------- < body >  

    //--------------------------------------------------------------------- < div class="jumbotron" > 
    //--------------------------------------------------------------------- < h1 > MY TEAM < /h1 > 

    //--------------------------------------------------------------------- < div class="container" >
    //--------------------------------------------------------------------- < div class="card-deck" id="level-#"> 


// Manager.prototype.renderFacts = function () {
    //--------------------------------------------------------------------- < div class="card" > 
    //--------------------------------------------------------------------- < div class="card-header" > 
    // var managerTitle = document.createElement('h4')
    // managerTitle.textContent = `${answer.jobTitle}`
    // document.getElementById('jobTitle').append(managerTitle)

    // var managerName = document.createElement('h4');
    // managerName.textContent = `${answer.name}`
    // document.getElementById('employeeName').append(managerName)
    //---------------------------------------------------------------------- < div class="card-body" > 
    //---------------------------------------------------------------------- < ul class="list-group"> 
    //---------------------------------------------------------------------- < li class="list-group-item">
    // var managerId = document.createElement('li')
    // managerId.textContent = `${answer.id}`
    // document.getElementById('idNumber').append(managerId)
    //---------------------------------------------------------------------- < li class="list-group-item">
    // var managerEmail = document.createElement('li')
    // managerEmail.textContent = `${answer.email}`
    // document.getElementById('email').append(managerEmail)
    //---------------------------------------------------------------------- < li class="list-group-item">
    // var managerOffice = document.createElement('li')
    // managerOffice.textContent = `${answer.officeNumber}`
    //---------------------------------------------------------------------- < /managerCard > 

    //---------------------------Engineer.renderFacts----------------------- < another card > 
    //---------------------------Intern.renderFacts------------------------- < another card > 
    

    //---------------------------------------------------------------------- < /body > 









