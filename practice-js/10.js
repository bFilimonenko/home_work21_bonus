// Вивести на сторінку повну таблицю множення від 1 до 10

function multiplicationTable(digit) {
  let str = "";

  for (let i = 1; i <= 10; i++) {
    str += `${i} * ${digit} = ` + (i * digit) + "<br>";
  }

  return str;
}

document.write(multiplicationTable(1));
document.write(multiplicationTable(2));
document.write(multiplicationTable(3));
document.write(multiplicationTable(4));
document.write(multiplicationTable(5));
document.write(multiplicationTable(6));
document.write(multiplicationTable(7));
document.write(multiplicationTable(8));
document.write(multiplicationTable(9));
document.write(multiplicationTable(10));
