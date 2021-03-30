const Employee = require("./employee")

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email)
        this.officeNumber = officeNumber;
        this.jobTitle = 'manager'
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole(){
        return this.jobTitle;
    }
}

module.exports = Manager;