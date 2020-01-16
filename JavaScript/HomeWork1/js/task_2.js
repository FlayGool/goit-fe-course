'use strict'

const total = 100;
const ordered = 50;
const error = 'На складе недостаточно твоаров!';
const success = 'Заказ оформлен, с вами свяжется менеджер!'
if (total > ordered) {
    console.log(success)
} else {
    console.log(error)
}