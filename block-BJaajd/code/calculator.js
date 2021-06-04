function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function power(a, b) {
  return a ** b;
}

function factorial(n) {
  let product = 1;
  for (let i = 2; i <= n; i++) {
    product = product * i;
  }
  return product;
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
