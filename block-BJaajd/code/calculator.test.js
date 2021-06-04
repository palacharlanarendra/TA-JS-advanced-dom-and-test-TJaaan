const calculator = require('./calculator');

test('test for addition', () => {
  expect(calculator.add(2, 3)).toBe(5);
});
test('test for substraction', () => {
  expect(calculator.subtract(2, 3)).toBe(-1);
});
test('test for sum', () => {
  expect(calculator.sum(2, 3)).toBe(5);
});
test('test for multiply', () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});
test('test for factorial', () => {
  expect(calculator.factorial(5)).toBe(120);
});
