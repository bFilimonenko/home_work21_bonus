// Дано ціле число. З’ясувати, чи можна це число отримати шляхов возведення числа 3 в деяку ступінь.
//    Наприклад, числа 9, 81 можно отримати, а 13 - ні

const number = parseInt(prompt("Enter a number"));
let treeInPower = 1;
let power = 0;

while (treeInPower <= number) {
  treeInPower *= 3;
  power++;
  if (treeInPower === number) {
    document.write(`Your number is tree in ${power} power`);
  }
}

