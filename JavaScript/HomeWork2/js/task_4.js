'use strict';

const formatString = function(string, symbolLength) {
  if (string.length > symbolLength) {
    string = `${string.slice(0, symbolLength)}...`;
  }
  return string;
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.', 40));
console.log(
  formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 40),
);
console.log(formatString('Curabitur ligula sapien.', 40));
console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
    40,
  ),
);
