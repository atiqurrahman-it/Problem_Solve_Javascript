var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [A,B,C]=input.split(" ").map(item=> parseFloat(item));

const pi =3.14159;

var TRIA=(A*C)/2.0;

var CIRC= pi * Math.pow(C, 2);

var tr= ((A+B ) *C)/2.0 ;

var QU=B*B;

var RETAN=A*B;

console.log(`TRIANGULO: ${TRIA.toFixed(3)}`);
console.log(`CIRCULO: ${CIRC.toFixed(3)}`);
console.log(`TRAPEZIO: ${tr.toFixed(3)}`);
console.log(`QUADRADO: ${QU.toFixed(3)}`);
console.log(`RETANGULO: ${RETAN.toFixed(3)}`);
