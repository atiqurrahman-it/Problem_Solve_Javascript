var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [A,B,C,D]=lines.map(Number);
var result=(A * B - C * D)
console.log(`DIFERENCA = ${result}`)