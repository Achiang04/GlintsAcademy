const calcu = (nilai1, nilai2, operator) => {
    let nilai1 = prompt("Masukin nilai pertama: ");
    let nilai2 = prompt("Masukin nilai kedua: ");
    let operator = prompt("Masukkan operator (+,-,*,/,%): ")
    nilai1 = parseInt(nilai1)
    nilai2 = parseInt(nilai2)


    switch (operator) {
        case "+":
            alert(nilai1 + nilai2);
            break;
        case "-":
            alert(nilai1 - nilai2);
            break;
        case "*":
            alert(nilai1 * nilai2);
            break;
        case "/":
            alert(nilai1 / nilai2);
            break;
        case "%":
            alert(nilai1 % nilai2);
            break;
        default:
            alert("operator tidak invalid");
    }
}