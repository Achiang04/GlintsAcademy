class Person {
  
    constructor(name, address) {
      this.name = name;
      this.address = address;
    }
  
    introduce() {
      console.log(`Hi, my name is ${this.name}`)
    }
  }
  
  // Create a child class from Person
  class Programmer extends Person {
  
    constructor(name, address, programmingLanguages) {
      super(name, address) // Call the super/parent class constructor, in this case Person.constructor;
      this.programmingLanguages = programmingLanguages;
    }
  
    // Override the Introduce Method
    introduce() {
      super.introduce(); // Call the super class introduce instance method.
      console.log(`I can write a programming using these languages`, this.programmingLanguages);
    }
  
    code() {
      console.log(
        "Code some",
        this.programmingLanguages[
          Math.floor(Math.random * this.programmingLanguages.length)
        ]
      )
    }
  }
  
  let Isyana = new Programmer("Isyana Karina", "Jakarta", ["Javascript", "Ruby", "Go", "Kotlin", "Python", "Elixir"]);
  Isyana.introduce() // Hi, my name is Isyana; I can write a programming using these languages ["Javascript", "Ruby", "Go", "Kotlin", "Python", "Elixir"]