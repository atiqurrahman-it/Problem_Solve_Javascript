var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var nu=parseFloat(lines[0]);

N=parseInt(nu); //total taka 

var x1=parseInt(N/100);
N=N%100;
var x2=parseInt(N/50);
N=N%50;
var x3=parseInt(N/20);
N=N%20;
var x4=parseInt(N/10);
N=N%10;
var x5=parseInt(N/5);
N=N%5;
var x6=parseInt(N/2);
N=N%2;
var x7=parseInt(N/1);
N=N%1;

var bb=nu*100;
var pois=parseInt(bb%100); //total poisa


var y1=parseInt(pois/50);
pois=pois%50;
var y2=parseInt(pois/25);
pois=pois%25;
var y3=parseInt(pois/10);
pois=pois%10;
var y4=parseInt(pois/05);
pois=pois%05;
var y5=parseInt(pois/01);
pois=pois%01;

console.log("NOTAS:");
console.log(`${x1} nota(s) de R$ 100.00`);
console.log(`${x2} nota(s) de R$ 50.00`);
console.log(`${x3} nota(s) de R$ 20.00`);
console.log(`${x4} nota(s) de R$ 10.00`);
console.log(`${x5} nota(s) de R$ 5.00`);
console.log(`${x6} nota(s) de R$ 2.00`);


console.log("MOEDAS:");
console.log(`${x7} moeda(s) de R$ 1.00`);
console.log(`${y1} moeda(s) de R$ 0.50`);
console.log(`${y2} moeda(s) de R$ 0.25`);
console.log(`${y3} moeda(s) de R$ 0.10`);
console.log(`${y4} moeda(s) de R$ 0.05`);
console.log(`${y5} moeda(s) de R$ 0.01`);
