class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    printInfo() {
        console.log(`${this.name}`);
        console.log(`${this.id}`);
        console.log(`${this.email}`);
    }

    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };
    
    getRole(){
        return this.jobTitle;
    };
}

module.exports = Employee;