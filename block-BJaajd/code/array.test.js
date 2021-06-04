const { removeFromArray, map, reduce } = require('./array');

test('test for removeFromArray', () => {
  expect(removeFromArray([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  expect(removeFromArray([1, 2, 4, 6], 6)).toEqual([1, 2, 4]);
  expect(removeFromArray([1, 2, 4], 2)).toEqual([1, 4]);
});

const mockMapback = jest.fn((x) => 42 + x);
map([0, 1], mockMapback);

test('mock funs to test', () => {
  expect(mockMapback.mock.calls.length).toBe(2);
  expect(mockMapback.mock.calls[0][0]).toBe(0);
  expect(mockMapback.mock.calls[1][0]).toBe(1);
  expect(mockMapback.mock.results[0].value).toBe(42);
});

const mockReduceback = jest.fn((acc, cv) => {
  acc = acc + cv;
  return acc;
});
reduce([6, 1, 2, 4], mockReduceback);

test('mock funs to test', () => {
  expect(reduce([6, 1, 2, 4], mockReduceback, 0)).toBe(13);
  expect(reduce([1, 2], mockReduceback, 0)).toBe(3);
});
