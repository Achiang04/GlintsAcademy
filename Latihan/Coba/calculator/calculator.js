// function tambah(a, b) {
//     return a + b;
// }

// function kurang(a, b) {
//     return a - b;
// }

// function bagi(a, b) {
//     return a / b;
// }

// function kali(a, b) {
//     return a * b;
// }

// export {
//     tambah,
//     kurang,
//     bagi,
//     kali,
// };

export default class Calculator {
    tambah(a, b) {
        return a + b;
    }

    kurang(a, b) {
        return a - b;
    }

    bagi(a, b) {
        return a / b;
    }

    kali(a, b) {
        return a * b;
    }

    modulus(a, b) {
        return a % b;
    }
}