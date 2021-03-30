const Employee = require("./employee")

class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email)
        this.school = school;
        this.jobTitle = 'intern'
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return this.jobTitle;
    }
}

module.exports = Intern;