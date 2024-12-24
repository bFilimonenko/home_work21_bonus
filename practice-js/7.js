// Вивести суму тільки парних чисел в діапазоні від 30 до 80

// let sumEvenDigits = 0;
//
// for (let i = 30; i <= 80; i++) {
//   if (i % 2 === 1) {
//     continue;
//   }
//   sumEvenDigits += i;
// }
//
// document.write(sumEvenDigits);

let sumEvenDigits = 0;

for (let i = 30; i <= 80; i += 2) {
  sumEvenDigits += i;
}

document.write(sumEvenDigits);
