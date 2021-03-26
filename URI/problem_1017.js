var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var time=Number(lines[0]);
var averageSpeed=Number(lines[1]);

var result=(time*averageSpeed)/12;
console.log(`${result.toFixed(3)}`)