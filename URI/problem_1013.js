var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var [a,b,c]=lines.shift().split(" ").map(item=> parseInt(item));

(a>b)? (a>c)?  console.log(`${a} eh o maior`) : console.log(`${c} eh o maior`) : (b>c)? console.log(`${b} eh o maior`) :console.log(`${c} eh o maior`) ;