var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var N=parseInt(lines[0]);
console.log(N)

var x1=parseInt(N/100);
N=N%100;
console.log(`${x1} nota(s) de R$ 100,00`);
var x2=parseInt(N/50);
N=N%50;
console.log(`${x2} nota(s) de R$ 50,00`);
var x3=parseInt(N/20);
N=N%20;
console.log(`${x3} nota(s) de R$ 20,00`);
var x4=parseInt(N/10);
N=N%10;
console.log(`${x4} nota(s) de R$ 10,00`);
var x5=parseInt(N/5);
N=N%5;
console.log(`${x5} nota(s) de R$ 5,00`);
var x6=parseInt(N/2);
N=N%2;
console.log(`${x6} nota(s) de R$ 2,00`);
var x7=parseInt(N/1);
N=N%1;
console.log(`${x7} nota(s) de R$ 1,00`);
