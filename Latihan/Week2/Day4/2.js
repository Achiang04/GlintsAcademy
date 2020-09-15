//1. forEach
var arrEach = [1, 2, 3, 4, 5]
//arrEach.forEach(function(item) { console.log(item); });

//2. map
var angkaMap = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var multipleOfTwo = angkaMap.map(function(item){ return item + 2; });
//console.log(multipleOfTwo); 

//3. filter
var angkaFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const filteredArray = angkaFilter.filter(function(item){ return item % 2 === 0 });
//console.log(filteredArray) 

//4. reduce
const angkaReduce = [1, 2, 3, 4, 5];
const sum = angkaReduce.reduce(function(total, value){ return total + value}); 
//console.log(sum); 

//5. includes
var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var something = angka.includes(10);
//console.log(something); 

var any = angka.includes(10);
//console.log(any); 

//6. some
var angkaSome = [1, 2, 3, 4, 5]
var some = angkaSome.some(function(item) { return item % 2 });
//console.log(some); 

var thing = angkaSome.some(function(item) { return item < 0 });
//console.log(thing); 

//7. every
var angka = [5, 6, 7, 8, 9];
var greaterFive = angka.every(function(item) { return item > 4});
//console.log(greaterFive); 

// mengecek apakah semua element kurang dari 10
const lessTen = angka.every(function(item) { return item < 10 });
//console.log(lessTen);

//8. concat
var fruits = ['apel', 'banana', 'mango']
var number = [1, 2, 3]
var fruitsmerge = fruits.concat(number)
console.log(fruitsmerge)
var newArray = number.concat(fruits);
//console.log(newArray); 