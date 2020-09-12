'use strict'
import {
  test
} from './module'
test()

const golden = () => {
  console.log("this is golden!!")
}
golden()

const newFunction = function literal(firstName, lastName) {
  return {
    firstName,
    lastName,
    fullName() {
      // console.log(`${firstName} ${lastName}`)
      console.log(firstName + " " + lastName)
      return
    }
  }
}
newFunction("William", "Imoh").fullName()

const orang = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!"
}
const {
  firstName,
  lastName,
  destination,
  occupation,
  spell
} = orang;
console.log(firstName, lastName, destination, occupation, spell);

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = west.concat(east)

console.log(...combined);

const planet = "earth"
const view = "glass"
var before = `Lorem ${view} dolor sit amet, consectetur adipiscing elit, ${planet} do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`

console.log(before);