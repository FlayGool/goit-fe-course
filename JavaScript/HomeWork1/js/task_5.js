'use strict'

const china = 'китай';
const chinaPrice = 100;
const chile = 'чили';
const chilePrice = 250;
const australia = 'австралия';
const australiaPrice = 170;
const india = 'индия';
const indiaPrice = 80;
const jamaica = 'ямайка';
const jamaicaPrice = 120;
let userSelectedCountry = prompt('Введите страну доставки.');

if (userSelectedCountry === null) {
  console.log('ничего не введено');
} else {
  switch (userSelectedCountry.toLowerCase()) {
    case china:
      alert(`Доставка в ${china} будет стоить ${chilePrice} кредитов`);
      break;
    case chile:
      alert(`Доставка в ${chile} будет стоить ${chilePrice} кредитов`);
      break;
    case australia:
      alert(`Доставка в ${australia} будет стоить ${australiaPrice} кредитов`);
      break;
    case india:
      alert(`Доставка в ${india} будет стоить ${indiaPrice} кредитов`);
      break;
    case jamaica:
      alert(`Доставка в ${jamaica} будет стоить ${jamaicaPrice} кредитов`);
      break;

    default:
      alert('В Вашей стране доставка не доступна');
  }
}