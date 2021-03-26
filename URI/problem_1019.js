var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var N=Number(lines[0]);
var h=parseInt(N/60);
var second=parseInt(N%60);
if(h>=60){
    var hours=parseInt(h/60);
    var minutes=parseInt(h%60);
    console.log(`${hours}:${minutes}:${second}`);
    }else{
        console.log(`0:${h}:${second}`);
    }
