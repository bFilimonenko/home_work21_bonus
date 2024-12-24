// Дано натуральне число (>0). Знайти і вивести на сторінку всі його дільники
//    Визначити кількість його парних дільників
//    Знайти суму його парних дільників

const number = parseInt(prompt("Enter your number"));
let strDivisors = "";
let evenDivisors = "";
let sumEvenDivisors = 0;


for (let i = 1; i <= number; i++) {
  if (number % i !== 0) {
    continue;
  }

  strDivisors += i + ", ";

  if (i % 2 === 0) {
    evenDivisors += i + ", ";
    sumEvenDivisors += i;
  }
}

document.write(strDivisors);
document.write("<br/>" + evenDivisors);
document.write("<br/>" + sumEvenDivisors);