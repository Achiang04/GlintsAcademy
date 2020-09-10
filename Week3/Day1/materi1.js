//Scope
//Difference var vs let in scope

x = 2
//const x
//console.log(x)

//Sample1
var myAge1 = 20
if (true){
  var myAge1 = 30
}
//console.log(myAge1)


//Solution Before ES6
var myAge2 = 20
function myScope(){
 var myAge2 = 30
 console.log(myAge2)
}
//myScope()
//console.log(myAge2)


//using Anonymous IIFE
//(Immediately Invoke Function Expression)
//no declare var -> global var
//var myAge3 = 20
(function(){
  myAge3 = 30
})()
//console.log(myAge3)


//Sample2

function myFuncA(){
  var x = 1
  console.log('Inside myFuncA :' + x)
}
// myFuncA();
// console.log(x)
var x = 100
var x = 10
// console.log(x)

let y = 10
function myFuncB(){
  let y = 1
  console.log('Inside myFuncB :' + y)
}
// myFuncB(); // y=1
// let y = 100
// console.log(y)


//Sample3
var i = 0;
for(var i = 1; i <= 9; i++) {
  //Looping 9 times, the last i = ?
  // console.log(i)
}
var a = 5;
// console.log(a + i); //guess what?

let j = 0;
for(let j = 1; j <= 9; j++) {
  //Looping 9 times, the last j = ?
  // console.log(j)
}
let b = 5;
// console.log(b + j); //guess what?


//let ES6
let example = "Example" 
let functionA = () => {
  console.log(example + " in A");
  let functionB = () => {
    console.log(example + " in B"); 
  };
  functionB(); //is it possible?
};
// functionA(); //is it possible?
// functionB(); //is it possible?



//const
// const KEY=123
// KEY = 456
// const KEY=123
// var KEY = 456 


//const in object/array (mutable but can't re-assign)
const obj = { id:1, name:'isyana'}
// obj.location = "Batam"
// console.log(obj)
// obj={}


const arr = [1,2,3,4]
arr.push(5)
// console.log(arr)
// arr=[]


//const ES6
const dividedByThree = (num) => {
  return result = num / 3;
};
//console.log(dividedByThree(6));


//Scope with 'this'
let functionC = () => {
  console.log(this); 
}

let sampleObject = {};
sampleObject.functionD = function () {
  console.log(this); 
}
//functionC(); // what's object?
//sampleObject.functionD(); // what's object?


//Class
class Rectangle {
  constructor(height, length=20, widthLoh) {
    this.heightRec = height
    this.widthRec = widthLoh
    this.length = length
  }

  get area() {
    return this.calcArea()
  }

  calcArea() {
    return this.length * this.widthRec
  }
}

const square = new Rectangle(undefined, 10, 10)
// console.log(square.area)