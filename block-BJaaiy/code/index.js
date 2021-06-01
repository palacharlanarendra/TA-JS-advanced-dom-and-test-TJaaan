const moment = require("moment");
const lodash = require("lodash");

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment().format('dddd'));
console.log(moment().format("MMM Do YY"));


dateElt = `2020-01-01`;
var aDate   = moment(dateElt.value, 'YYYY-MM-DD', true);
var isValid = aDate.isValid(); 
console.log(isValid);

dateElt=`2020-14-01`;
var aDate   = moment(dateElt.value, 'YYYY-MM-DD', true);
var isValid = aDate.isValid(); 
console.log(isValid);

// Manipulating Dates

console.log(moment().add(7, 'days').calendar());
console.log(moment().add(7, 'months').calendar());
console.log(moment().add(7, 'years').calendar());


// - subtracts 7 days to current date
// - subtracts 7 months to current date
// - subtracts 7 years to current date

console.log(moment().subtract(7, 'days').calendar());
console.log(moment().subtract(7, 'months').calendar());
console.log(moment().subtract(7, 'years').calendar());

// Find the difference between the following 2 dates:

// 1.

// - date1: `2014-11-11`
// - date2: `2015-09-11`
var date1 = moment("2014-11-11", "YYY.MM.DD");
var date2 = moment("2015-09-11", "YYY.MM.DD");

var result = 'Diff: ' + date2.diff(date1, 'days') + ` days`;

console.log(result);
// 2.

// - date1: `2014-11-27`
// - date2: `2015-09-16`
var date1 = moment("2014-11-27", "YYY.MM.DD");
var date2 = moment("2015-09-16", "YYY.MM.DD");

var result = 'Diff: ' + date2.diff(date1, 'days') + ` days`;

console.log(result);

// - Check is `2020-01-01` date after `2018-01-01`
console.log(moment('2020-01-01').isAfter('2018-01-01', 'year'));
// - Check is `2010-01-01` date after `2018-01-01`
console.log(moment('2010-01-01').isAfter('2018-01-01', 'year'));
// - Check if the year `2019` is a leap year
console.log(moment([2019]).isLeapYear());
// - Check if the year `2020` is a leap year
console.log(moment([2020]).isLeapYear());
// #### Use lodash to do the following things:

// - Use five methods form the list of Array methods and five from Collection methods (Left side on this link https://lodash.com/docs/4.17.15)

//compact
let numbers = [0, 1, false, 2, '', 3];
let compact = lodash.compact(numbers);
console.log(compact);


//concat
var array = [1];
var other = lodash.concat(array, 2, [3], [[4]]);
 
console.log(other);
// => [1, 2, 3, [4]]
 
console.log(array);
// => [1]


//difference

console.log(lodash.difference([2, 1], [2, 3]));
// => [1]


//drop
console.log(lodash.drop([1, 2, 3]));
console.log(lodash.drop([1, 2, 3], 2));
console.log(lodash.drop([1, 2, 3], 5));


//zipped
var zipped = lodash.zip(['a', 'b'], [1, 2], [true, false]);
console.log(zipped);// => [['a', 1, true], ['b', 2, false]]


//methods



//countBy
const count = lodash.countBy([6.1, 4.2, 6.3], Math.floor);
console.log(count)// => { '4': 1, '6': 2 }


//filter

var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false }
  ];
   
  let active = lodash.filter(users, function(o) { return !o.active; });

  console.log(active);
  // => objects for ['fred']
   
  // The `_.matches` iteratee shorthand.
  let match = lodash.filter(users, { 'age': 36, 'active': true });

  console.log(match);
  // => objects for ['barney']

  //find
  console.log(lodash.filter(users, ['active', false]));
  // => objects for ['fred']

  //forEach

 let some = lodash.forEach([1, 2], function(value) {
    console.log(value);
  });

console.log(some);


//includes
console.log(lodash.includes([1, 2, 3], 1));
// => true
 
//map

function square(n) {
    return n * n;
  }
   
 console.log(lodash.map([4, 8], square));

 //sampleSize

 console.log(lodash.sampleSize([1, 2, 3], 2));
// => [3, 1]
 