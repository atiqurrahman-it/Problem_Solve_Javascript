var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var  a=Number(lines[0]);
var result=a*2;
console.log(`${result} minutos`);