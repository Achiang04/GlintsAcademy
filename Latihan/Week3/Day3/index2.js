var readBooksPromise = require("./promise.js");

var books = [{
        name: "LOTR",
        timeSpent: 3000,
    },
    {
        name: "Fidas",
        timeSpent: 2000,
    },
    {
        name: "Kalkulus",
        timeSpent: 4000,
    },
];


let buku = books.length;
let time = 10000;

function membaca(time, ind, buku) {
    readBooksPromise(time, books[ind])
        .then(function (sisaWaktu) {
            time = sisaWaktu;
            buku = buku - 1;
            if (buku > 0) {
                membaca(time, ind + 1, buku);
            }
        })
        .catch(function (error) {

        })
}
membaca(time, 0, buku)