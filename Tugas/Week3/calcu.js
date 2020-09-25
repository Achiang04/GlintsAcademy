let inputan = () => {
  let nilai1 = prompt("Masukin nilai pertama: ");
  let nilai2 = prompt("Masukin nilai kedua: ");
  let operator = prompt("Masukkan operator (+,-,*,/,%): ");

  hasil = calculate(+nilai1, +nilai2, operator);
  alert("Hasil = " + hasil);
  return hasil1;
};

let calculate = (a, b, ope) => {
  switch (ope) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    case "%":
      return a % b;
    default:
      return "operator tidak invalid";
  }
};
