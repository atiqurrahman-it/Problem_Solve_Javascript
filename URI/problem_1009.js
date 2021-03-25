var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var name=String(lines.shift());
var salary=parseFloat(lines.shift());
var sales =parseFloat(lines.shift());

TOTAL=salary+(sales*15)/100;



console.log(`TOTAL = R$ ${TOTAL.toFixed(2)}`);
