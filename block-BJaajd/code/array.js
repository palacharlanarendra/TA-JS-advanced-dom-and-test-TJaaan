function removeFromArray(array, num) {
  let newArray = [];
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] != num) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

function map(items, callback) {
  const final = [];
  for (let index = 0; index < items.length; index++) {
    final.push(callback(items[index]));
  }
  return final;
}

function reduce(items, reducer, inititalValue = items[0]) {
  let acc = inititalValue;
  for (let index = 0; index < items.length; index++) {
    acc = reducer(acc, items[index], index, items);
  }
  return acc;
}
module.exports = {
  removeFromArray,
  map,
  reduce,
};
