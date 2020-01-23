'use strict';

const calculateEngravingPrice = function(pricePerWord, message) {
  const wordCount = message.split(' ');
  const totalPrice = wordCount.length * pricePerWord;
  return totalPrice;
};

console.log(
  calculateEngravingPrice(
    10,
    'Proin sociis natoque et magnis parturient montes mus',
  ),
);

console.log(
  calculateEngravingPrice(
    20,
    'Proin sociis natoque et magnis parturient montes mus',
  ),
);

console.log(
  calculateEngravingPrice(40, 'Donec orci lectus aliquam est magnis'),
);

console.log(
  calculateEngravingPrice(20, 'Donec orci lectus aliquam est magnis'),
);
