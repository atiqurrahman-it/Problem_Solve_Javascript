var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [X,Y]=lines.shift().split(" ").map(item=> parseInt(item));


switch(X)
{
case 1:
    re1=(4.00)*Y;
    console.log(`Total: R$ ${re1.toFixed(2)}`);
    break;

case 2:
    re2=(4.50)*Y;
    console.log(`Total: R$ ${re2.toFixed(2)}`);
    break;

case 3:
    re3=(5.00)*Y;
    console.log(`Total: R$ ${re3.toFixed(2)}`);
    break;
case 4:
    re4=(2.00)*Y;
    console.log(`Total: R$ ${re4.toFixed(2)}`);
    break;
case 5:
    re5=(1.50)*Y;
    console.log(`Total: R$ ${re5.toFixed(2)}`);
    break;
}