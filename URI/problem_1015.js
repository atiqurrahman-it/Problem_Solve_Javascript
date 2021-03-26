var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [x1,y1]=lines.shift().split(" ").map(item=>  parseFloat(item));
var [x2,y2]=lines.shift().split(" ").map(item=>  parseFloat(item));

var  dis=Math.sqrt(Math.pow(x2-x1 ,2) + Math.pow(y2-y1,2 ));
console.log(`${dis.toFixed(4)}`)