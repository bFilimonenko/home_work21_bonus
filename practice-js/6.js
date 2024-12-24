// Знайти середнє арифметичне всіх цілих чисел від 1 до 500

let sum = 0;

for (let i = 1; i <= 500; i++) {
  sum += i;
}
const average = sum / 500;

document.write(average);
