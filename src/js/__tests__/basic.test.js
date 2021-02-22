import validatePhone from '../basic';

test('1 - should format phone number', () => {
  const number1 = '8 (927) 000-00-00';
  const result = '+79270000000';
  expect(validatePhone(number1)).toBe(result);
});

test('2 - should format phone number', () => {
  const number2 = '+7 960 000 00 00';
  const result = '+79600000000';
  expect(validatePhone(number2)).toBe(result);
});

test('3 - should format phone number', () => {
  const number3 = '+86 000 000 0000';
  const result = '+860000000000';
  expect(validatePhone(number3)).toBe(result);
});
