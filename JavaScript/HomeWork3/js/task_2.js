'use strict';

const countProps = function(obj) {
  let i = 0;
  for (i; i < Object.keys(obj).length; i += 1) {}
  return `Количество свойств обьекта = ${i}`;
};

console.log(countProps({}));
console.log(countProps({ name: 'Mango', age: 2 }));
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));
