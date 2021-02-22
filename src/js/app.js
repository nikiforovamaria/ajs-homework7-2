import validatePhone from './basic';

console.log('worked');

const number1 = '8 (927) 000-00-00';
const number2 = '+7 960 000 00 00';
const number3 = '+86 000 000 0000';

console.log(validatePhone(number1));
console.log(validatePhone(number2));
console.log(validatePhone(number3));
