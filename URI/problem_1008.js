var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var member=parseInt(lines.shift());
var perHour=parseInt(lines.shift());
var Hour=parseFloat(lines.shift());

var result=perHour*Hour;
console.log(`NUMBER = ${member}`);
console.log(`SALARY = U$ ${result.toFixed(2)}`);