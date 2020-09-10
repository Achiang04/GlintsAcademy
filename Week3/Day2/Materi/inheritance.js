class Human {
  
    constructor(name, address) {
      this.name = name;
      this.address = address;
    }
  
    introduce() {
      console.log(`Hi, my name is ${this.name}`)
    }
  
    work() {
      console.log("Work!")
    }
  }
  
  // Create a child class from Human
  class Programmer extends Human {
  
    constructor(name, address, programmingLanguages) {
      super(name, address) // Call the super/parent class constructor, in this case Person.constructor;
      this.programmingLanguages = programmingLanguages;
    }
  
    introduce() {
      super.introduce(); // Call the super class introduce instance method.
      console.log(`I can write a programming using these languages`, this.programmingLanguages);
    }
  
    code() {
      console.log(
        "Code some",
        this.programmingLanguages[
          Math.floor(Math.random() * this.programmingLanguages.length)
        ]
      )
    }
  }
  
  // Initiate from Human directly
  let Obama = new Human("Barrack Obama", "Washington DC");
  Obama.introduce() // Hi, my name is Barack Obama
  
  let Isyana = new Programmer("Isyana Karina", "Jakarta", ["Javascript", "Ruby", "Go", "Kotlin", "Python", "Elixir"]);
  Isyana.introduce() // Hi, my name is Isyana; I can write a programming using these languages ["Javascript", "Ruby", "Go", "Kotlin", "Python", "Elixir"]
  Isyana.code() // Code some Javascript/Ruby/...
  Isyana.work() // Call super class method that isn't overrided or overloaded
  
  try {
    // Obama can't code since Obama is an direct instance of Human, which don't have code method 
    Obama.code() // Error: Undefined method "code"
  }
  catch(err) {
    console.log(err.message)
  }
  
  console.log(Isyana instanceof Human) // true
  console.log(Isyana instanceof Programmer) // true