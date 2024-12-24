// Дано ціле число. З’ясувати, чи є воно простим
//    Простим називається число, яке більше 1 та яке не має жодних інших дільників окрім 1 і самого себе).
//    Наприклад: 5, 7, 13…

const inputNumber = parseInt(prompt("Enter number"));
let primeNumber = true;

let divider = 2;

while (primeNumber && divider < inputNumber) {
  if (inputNumber % divider === 0) {
    primeNumber = false;
  }
  divider++;
}

console.log(primeNumber);
