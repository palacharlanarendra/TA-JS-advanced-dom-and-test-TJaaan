// 1)
// bad
// const item = new Object();

// good
const item = {};
console.log(item);

// 2)
// bad
// var a = 1;
// var b = 2;

// good
const a = 1;
const b = 2;
console.log(a, b);

// 3)
// bad
// var count = 1;
// if (true) {
//   count += 1;
// }

// good, use the let.
let count = 1;
// eslint-disable-next-line no-constant-condition
if (true) {
  count += 1;
}
console.log(count);

// 5)
// bad
function getKey(k) {
  return `a key named ${k}`;
}

//   const objNew = {
//     id: 5,
//     name: 'San Francisco',
//   };
//   objNew[getKey('enabled')] = true;
// good
// eslint-disable-next-line no-unused-vars
const objNew = {
  id: 5,
  name: 'San Francisco',
  [getKey('enabled')]: true,
};

// 6)
// bad
// const atom = {
//     value: 1,

//     addValue: function (value) {
//       return atom.value + value;
//     },
//   };
// good
const atom = {
  value: 1,

  addValue(value) {
    return atom.value + value;
  },
};
// 7)
// const lukeSkywalkerNew = 'Luke Skywalker';

// bad
// const objNew = {
//   lukeSkywalkerNew: lukeSkywalker,
// };

// good
const lukeSkywalkerNew = 'some';
const objNew2 = {
  lukeSkywalkerNew,
};
console.log(objNew2);

// 8)
// bad
// const bad = {
//     'foo': 3,
//     'bar': 4,
//     'data-blah': 5,
//   };

// good
const good = {
  foo: 3,
  bar: 4,
  'data-blah': 5,
};
console.log(good);
// 9)
// bad
// const items = new Array();

// good
const items = [];
console.log(items);

// 10)
const someStack = [];

// bad
// someStack[someStack.length] = 'abracadabra';

// good
someStack.push('abracadabra');

// 1.

const num = 10;

const increaseNumber = () => num + 1;

const increasePassedNumber = (number) => number + 1;

const num1 = increaseNumber();
const num2 = increasePassedNumber(num1);

console.log(num1);
console.log(num2);

// 2.

const animalMethods = {
  eat() {
    console.log(`I live in ${this.location} and I can eat`);
  },
  changeLocation(newLocation) {
    this.location = newLocation;
    return this.location;
  },
  summary() {
    console.log(`I live in ${this.location} and I have ${this.numberOfLegs}`);
  },
};

function createAnimal(location, numberOfLegs) {
  const obj = Object.create(animalMethods);
  obj.location = location;
  obj.numberOfLegs = numberOfLegs;
  return obj;
}

const dogsMethods = {
  bark() {
    // eslint-disable-next-line no-alert
    alert(`I am ${this.name} and I can bark 🐶`);
  },
  changeName(name) {
    this.name = name;
    return this.name;
  },
  changeColor(newColor) {
    this.color = newColor;
    return this.color;
  },
  summary() {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
  },
};
// eslint-disable-next-line no-unused-vars
function createDog(location, numberOfLegs, name, color) {
  const obj = createAnimal(location, numberOfLegs);

  Object.setPrototypeOf(obj, dogsMethods);
  obj.name = name;
  obj.color = color;
  return obj;
}

Object.setPrototypeOf(dogsMethods, animalMethods);

const catsMethods = {
  meow() {
    // eslint-disable-next-line no-alert
    alert(`I am ${this.name} and I can do mewo meow 😹`);
  },
  changeName(name) {
    this.name = name;
    return this.name;
  },
  changeColorOfEyes(newColor) {
    this.colorOfEyes = newColor;
    return this.colorOfEyes;
  },
  summary() {
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
  },
};
// eslint-disable-next-line no-unused-vars
function createCat(location, numberOfLegs, name, colorOfEyes) {
  const obj = createAnimal(location, numberOfLegs);
  Object.setPrototypeOf(obj, catsMethods);
  obj.name = name;
  obj.color = colorOfEyes;
  return obj;
}

Object.setPrototypeOf(catsMethods, animalMethods);

// 3.

const anakinSkywalker = 'Anakin Skywalker';
const lukeSkywalker = 'Luke Skywalker';

// eslint-disable-next-line no-unused-vars
const obj = {
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  lukeSkywalker,
  episodeThree: 3,
  mayTheFourth: 4,
  anakinSkywalker,
};

// 4.

// eslint-disable-next-line no-unused-vars
function getFullName(user) {
  const { firstName } = user;
  const { lastName } = user;

  return `${firstName} ${lastName}`;
}
