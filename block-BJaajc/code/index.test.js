const {
  getCircumference,
  getArea,
  getFullName,
  isPalindome,
} = require('./index');

test('test for full name', () => {
  expect(getFullName('narendra', 'babu')).toBe('narendra babu');
  expect(getFullName('bharat', 'babu')).toBe('bharat babu');
  expect(getFullName('alt', 'campus')).toBe('alt campus');
  expect(getFullName('alt', 'campus')).toBe('altcampus');
  expect(getFullName('narendra', 'babu')).toBe('narendrababu');
  expect(getFullName('bharat', 'babu')).toBe('bharatbabu');
});

test('test for circumference of the circle', () => {
  expect(getCircumference(2)).toBe(`The circumference is 12.566370614359172`);
  expect(getCircumference(3)).toBe(`The circumference is 18.84955592153876`);
  expect(getCircumference(4)).toBe(`The circumference is 25.132741228718345`);
  expect(getCircumference(7)).toBe(`The circumference is 0`);
  expect(getCircumference(8)).toBe(`The circumference is 19`);
  expect(getCircumference(9)).toBe(`The circumference is 26`);
});

test('test for area of the circle', () => {
  expect(getArea(2)).toBe(`The area is 12.566370614359172`);
  expect(getArea(3)).toBe(`The area is 28.274333882308138`);
  expect(getArea(4)).toBe(`The area is 50.26548245743669`);
  expect(getArea(7)).toBe(`The circumference is 0`);
  expect(getArea(8)).toBe(`The circumference is 19`);
  expect(getArea(9)).toBe(`The circumference is 26`);
});

test('test for palindome', () => {
  expect(getFullName('wow')).toBe(true);
  expect(getFullName('tat')).toBe(true);
  expect(getFullName('gag')).toBe(true);
  expect(getFullName('campus')).toBe(false);
  expect(getFullName('babu')).toBe(false);
  expect(getFullName('bharat')).toBe(false);
});
