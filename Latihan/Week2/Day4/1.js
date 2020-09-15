//Array
//1. Push
var animalsArray = ["lion", "horse"];
animalsArray.push("duck"); 
console.log(animalsArray); 

//2. Pop
animalsArray.pop(); 
console.log(animalsArray);

//3. Unshift
animalsArray.unshift("dog");
console.log(animalsArray); 

//4. Shift
animalsArray.shift();
//console.log(animalsArray);  

//5. Sort
animalsArray.sort();
console.log(animalsArray); 

//6. Sort Asc
var arrAsc = [1, 2, 15];
arrAsc.sort(function(value1, value2) { return value1 - value2 });
console.log(arrAsc); 

//7. Sort Desc 
var arrDesc = [1, 2, 15];
//arrDesc.sort(function(value1, value2) { return value2 - value1 });
//console.log(arrDesc); 
console.log(arrDesc.reverse()); 

//8. Slice
var arrSlice = ["a", "b", "c", "d", "e"];
var irisan1 = arrSlice.slice(1,3); 
//console.log(irisan1); 
var irisan2 = arrSlice.slice(1);
//console.log(irisan2); 
var irisan3 = arrSlice.slice(2,3);
//console.log(irisan3); 
var irisan4 = arrSlice.slice(2,2);
//console.log(irisan4); 
var irisan5 = arrSlice.slice(2,6);
console.log(irisan5); 

//9. Splice
var arrSplice = ["buku", "laptop", "komputer", "kulkas", "iphone"];
arrSplice.splice(2, 2, "televisi"); 
console.log(arrSplice); 

arrSplice.splice(0, 2, "pen"); 
console.log(arrSplice); 

//10. Split
var kalimat = "saya-adalah-full-stack-javascript-programmer!";
var kata = kalimat.split("-"); 
console.log(kata); 





