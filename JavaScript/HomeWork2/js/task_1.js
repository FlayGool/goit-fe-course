'use strict';

const logItems = function(array) {
  for (let item = 0; item < array.length; item += 1) {
    console.log(`${item + 1} - ${array[item]}`);
  }
};

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
