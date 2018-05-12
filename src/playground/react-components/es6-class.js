//car calss
//attributes - make, model, year of man, regnum, etc
//get description - description of the car

class Person
{
    constructor(name = "Anonymous" , age = 0)
    {
        this.name = name;
        this.age = age;
    }

    showSalutation()
    {
        let temp = `Hello, ${this.name} , Your age is ${this.age}`;
        return temp;
    }
}

class Student extends Person
{
    constructor(name, age , subject)
    {
        super(name, age);
        this.subject = subject;
    }

    hasSubject()
    {
        return ((this.subject) ? this.subject : false);
    }

    showSalutation()
    {
        let superMethod = super.showSalutation();
        let temp = `${superMethod} and you study ${this.hasSubject()}`;
        return temp;
    }
}

class Traveller extends Person
{
    constructor(name, age, location)
    {
        super(name, age);
        this.location = location;
    }

    hasLocation()
    {
        return ((this.location) ? this.location : false);
    }

    showSalutation()
    {
        let superMethod = super.showSalutation();
        let temp = `${superMethod} and you live in ${this.hasLocation()}`;
        return temp;
    }
}

const classObj = new Student("TestUser",26, "CS ");
console.log(classObj.showSalutation());

const classObj2 = new Student();
console.log(classObj2.showSalutation());

const traveller = new Traveller("UserName", 26 , "");
console.log(traveller.showSalutation());

