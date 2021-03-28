var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a=[10];
var n=Number(lines[0]);
for(var i=0;i<10;i++){
    a[i]=n;
    console.log(`N[${i}] = ${n}`);
    n=n*2;
}