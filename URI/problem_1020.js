var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n=Number(lines[0]);
var y=parseInt(n/365);
n=n%365;
var m=parseInt(n/30);
var d=parseInt(n%30);
console.log(`${y} ano(s)`);
console.log(`${m} mes(es)`);
console.log(`${d} dia(s)`);
