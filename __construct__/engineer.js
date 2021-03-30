const Employee = require("./employee")

class Engineer extends Employee {
    constructor (name, id, email, githubName) {
        super (name, id, email)
        this.githubName = githubName;
        this.jobTitle = 'engineer'
    }

    getgithubName(){
        return this.githubName;
    }

    getRole(){
        return this.jobTitle;
    }
}

module.exports = Engineer;