var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [A,B,C]=lines.shift().split(" ").map(item=> parseFloat(item));


X=(B*B)-(4*A*C);

if(X<0){
    console.log("Impossivel calcular");
}else if(A==0){
    console.log("Impossivel calcular");
}else{
x1= (-B+ Math.sqrt(X))/(2*A);
x2=(-B- Math.sqrt(X))/(2*A);
console.log(`R1 = ${x1.toFixed(5)}`);
console.log(`R2 = ${x2.toFixed(5)}`);
}
