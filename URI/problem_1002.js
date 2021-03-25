var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var x=Number(lines[0]);
const pi=3.14159;
var area= pi * x**2;
console.log(`A=${area.toFixed(4)}`);