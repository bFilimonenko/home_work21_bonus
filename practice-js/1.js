// Вивести на сторінку в один рядок через кому числа від 10 до 20

let str = "";

for (let i = 10; i <= 20; i++) {
  str += i + ", ";
}

document.write(str);


const array = [];

for (let i = 10; i <= 20; i++) {
  array.push(i);
}

document.write(array.join(', '));

