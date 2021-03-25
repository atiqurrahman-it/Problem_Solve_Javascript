var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var r=Number(lines[0]);
const pi=3.14159;
var result=(4.0/3)*pi*r*r*r;
console.log(`VOLUME = ${result.toFixed(3)}`)
