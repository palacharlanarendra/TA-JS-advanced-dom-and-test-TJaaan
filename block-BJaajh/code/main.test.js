const { getWinner, checkFive } = require('./main');

test('check getWinner fn', () => {
  expect(getWinner('Rock', 'Paper')).toBe('Player 2 wins!');
});
test('check getWinner fn', () => {
  expect(getWinner('', 'Paper')).toBe('Invalid Input');
});
test('check checkFive  fn', () => {
  expect(checkFive(5)).toBe('5 is equal to 5.');
});
