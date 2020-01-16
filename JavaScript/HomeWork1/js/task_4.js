'use strict'

let credits = 23580;
const pricePerDroid = 3000;

const quantity = prompt('Количество дроидов которые Вы хотите купить?');
let totalPrice;

if (quantity === null) {
    console.log('Отменено пользователем!');
} else {
    totalPrice = (Number(quantity)* pricePerDroid);
    console.log(totalPrice)
}

if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!')
} else {
    console.log(`Вы купили ${quantity} дроидов, на счету осталось ${credits - totalPrice} кредитов.`)
}