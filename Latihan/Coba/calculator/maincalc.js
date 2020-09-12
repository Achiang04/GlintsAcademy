// 'use strict';
// import {
//     tambah,
//     kurang,
//     bagi,
//     kali
// } from './calculator';

// console.log(bagi(27, 3)); //9
// console.log(kali(10, 10)) //100
// console.log(tambah(112, 232)) //344
// console.log(kurang(100, 50)) //50

// =======================================================================================

// import * as calculator from './calculator';

// console.log(calculator.bagi(27, 3)); // 9
// console.log(calculator.kali(10, 10)) //100
// console.log(calculator.tambah(112, 232)) //344
// console.log(calculator.kurang(100, 50)) //50

// =======================================================================================

import Calculator from './calculator';

let calculator = new Calculator();
//works the same as previously 
console.log(calculator.bagi(27, 3)); //9
console.log(calculator.tambah(5, 7)); //12
console.log(calculator.kali(10, 10)) //100
console.log(calculator.kurang(100, 50)) //50
console.log(calculator.modulus(7, 3)) // 1