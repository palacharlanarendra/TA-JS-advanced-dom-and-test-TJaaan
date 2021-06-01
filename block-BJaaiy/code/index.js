const moment = require("moment");

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