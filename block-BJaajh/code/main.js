function checkFive(num) {
  let result = '';
  if (num < 5) {
    result = num + ' is less than 5.';
  } else if (num === 5) {
    result = num + ' is equal to 5.';
  } else {
    result = num + ' is greater than 5.';
  }
  return result;
}

function getWinner(guess1, guess2) {
  let result = '';
  if (
    guess1 == !'Rock' ||
    !'Paper' ||
    !'Scissor' ||
    guess2 == !'Rock' ||
    !'Paper' ||
    !'Scissor'
  ) {
    result = 'Invalid Input';
  } else {
    if (guess1 == guess2) {
      result = `TIE`;
    } else if (guess1 === 'Rock' && guess2 === 'Paper') {
      result = `Player 2 wins!`;
    } else if (guess1 === 'Paper' && guess2 === 'Scissor') {
      result = `Player 2 wins!`;
    } else if (guess1 === 'Scissor' && guess2 === 'Rock') {
      result = `Player 2 wins!`;
    } else if (guess2 === 'Rock' && guess1 === 'Paper') {
      result = `Player 1 wins!`;
    } else if (guess2 === 'Paper' && guess1 === 'Scissor') {
      result = `Player 1 wins!`;
    } else if (guess2 === 'Scissor' && guess1 === 'Rock') {
      result = `Player 1 wins!`;
    }
  }
  return result;
}

module.exports = {
  checkFive,
  getWinner,
};
