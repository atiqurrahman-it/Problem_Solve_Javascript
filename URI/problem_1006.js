var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a=parseFloat(lines.shift());
var b=parseFloat(lines.shift());
var c=parseFloat(lines.shift());
var h=a*2;
var w=b*3;
var d=c*5;
var result=(h+w+d)/10;
console.log(`MEDIA = ${result.toFixed(1)}`);