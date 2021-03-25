var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [A,B]=lines.map(Number);
var x=A+B;
console.log(`X = ${x}`);