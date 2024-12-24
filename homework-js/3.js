// Дано ціле число (N). Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N

const inputNumber = parseInt(prompt("Enter your number"));

for (let i = 100; i > 0; i--) {
  if (inputNumber >= i * i) {
    document.write("All digits from 1 to " + i);
    break;
  }
}

//while

let finalDigit = 100;

while (finalDigit > 0) {
  if (inputNumber >= finalDigit * finalDigit) {
    document.write("All digits from 1 to " + finalDigit);
    break;
  }
  finalDigit--
}
