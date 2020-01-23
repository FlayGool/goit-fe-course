'use strict';

const checkForSpam = function(message) {
  let haveSpam;
  if (
    message.toLowerCase().includes('sale') ||
    message.toLowerCase().includes('spam')
  ) {
    haveSpam = true;
  } else haveSpam = false;
  return haveSpam;
};

console.log(checkForSpam('Latest technology news'));
console.log(checkForSpam('JavaScript weekly newsletter'));
console.log(checkForSpam('Get best sale offers now!'));
console.log(checkForSpam('[SPAM] How to earn fast money?'));
