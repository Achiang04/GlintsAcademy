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
 
   // Overload the Introduce Method
   introduce(withDetail) {
     super.introduce(); // Call the super class introduce instance method.
     (Array.isArray(withDetail)) ? 
     console.log(`I can write a programming using these languages ${this.programmingLanguages}`) : console.log("Wrong input")
   }
 
   code() {
     let acak = Math.floor(Math.random() * this.programmingLanguages.length)
     console.log("Code some", this.programmingLanguages[acak])
   }
 }
 
 let Isyana = new Programmer("Isyana Karina", "Jakarta", ["JavaScript", " Kotlin"]);
 Isyana.introduce(["JavaScript"]) // Hi, my name is Isyana; I can write a programming using these languages ...
 //Isyana.introduce("JavaScript") // Hi, my name is Isyana; Wrong Input
 //Isyana.introduce(1) // Hi, my name is Isyana; Wrong Input
 Isyana.code() //Code some ...
 
 
 
 
 //String
 //(Object.prototype.toString.call(withDetail) === '[object String]') ? console.log(`I can write a programming using these languages`, this.programmingLanguages) : console.log(`Wrong input`)
 
 // if(String(withDetail)) {
 //   console.log(`I can write a programming using these languages`, this.programmingLanguages)
 // } else { 
 //   console.log(`Wrong input`) 
 // }
 
 //Number
 //(Object.prototype.toString.call(withDetail) === '[object Number]') ? console.log(`I can write a programming using these languages`, this.programmingLanguages) : console.log(`Wrong input`)
 
 // if(Number(withDetail)) {
 //   console.log(`I can write a programming using these languages`, this.programmingLanguages)
 // } else { 
 //   console.log(`Wrong input`) 
 // }
 
 //Array
 // if(Object.prototype.toString.call(withDetail) === '[object Array]') {
 //   console.log(`I can write a programming using these languages`, this.programmingLanguages)
 // } else { 
 //   console.log(`Wrong input`) 
 // }