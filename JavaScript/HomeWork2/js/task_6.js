'use strict';
let input;
console.log(input);
const numbers = [];
let total = 0;

do {
  input = prompt('Введите произвольное число');
  if (isNaN(input)) {
    alert('Вы ввели не число, попробуйте снова.');
  } else if (input === null) {
    break;
  } else {
    numbers.push(input);
  }
} while (input);
for (let number of numbers) {
  total += Number(number);
}
if (total === 0) {
  console.log(`А суммы то и нет:\(`);
} else {
  console.log(`Сумма всех чисел равна ${total}`);
}
