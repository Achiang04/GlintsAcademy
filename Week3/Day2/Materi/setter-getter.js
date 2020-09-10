class Person {
    constructor({firstName, lastName, job}) {
        this.firstNames = firstName;
        this.lastName = lastName;
        this.job = job;
        this.skills = [];
        Person._amount = Person._amount || 0;
        Person._amount++;
    }
 
    static get amount() {
        return Person._amount;
    }
   
    get fullName() {
        return `${this.firstNames} ${this.lastName}`;
    }
 
    set fullName(fN) {
        if (/[A-Za-z]\s[A-Za-z]/.test(fN)) {
            [this.firstNames, this.lastName] = fN.split(' ');
        } else {
            throw Error('Bad fullname');
        }
    }
 
    learn(skill) {
        return this.skills.push(skill);
    }
 }
 
 class Job {
    constructor(company, position, salary) {
        this.company = company;
        this.position = position;
        this.salary = salary;
    }
 }
 
 const john = new Person({
    firstName: 'John',
    lastName: 'Doe',
    job: new Job('Youtube', 'developer', 200000)
 });
 
 const roger = new Person({
    firstName: 'Roger',
    lastName: 'Federer',
    job: new Job('ATP', 'tennis', 1000000)
 });
 
 console.log(john.firstNames) //output: John
 console.log(john.lastName) //output: Doe
 console.log(john.fullName)
 john.fullName = 'Mike Smith';
 console.log(john.fullName) //output: Mike Smith
 console.log(john.firstNames) //output: Mike
 console.log(john.lastName) //output: Smith
 
 john.learn('es6');
 john.learn('es7');
 console.log(john.skills) //output: ["es6","es7"]
 
 roger.learn('programming');
 console.log(roger.skills) //output: ["programming"]
 