'use strict'

let input;
let totalAmount = 0;

while (input !== null) {
  input = prompt(`Введите число!`);

  if (isNaN(input)) {
    alert('Введите число!');
} else totalAmount = totalAmount + Number(input);
}

alert(`Общая сумма чисел равна ${totalAmount}`);