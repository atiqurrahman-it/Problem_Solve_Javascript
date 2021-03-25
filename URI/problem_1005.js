var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a=parseFloat(lines.shift());
var b=parseFloat(lines.shift());
var h=a*3.5;
var w=b*7.5
var result=(h+w)/11;
console.log(`MEDIA = ${result.toFixed(5)}`)

