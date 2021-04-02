var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

// var [a,b]= lines.map(Number);

var [X,Y]=lines.shift().split(" ").map(function(item){
    item=parseInt(item)
    return item
})

OR
// var [a,b]=lines.shift().split(" ").map(item=> parseInt(item));
// var [A,B]=input.split(" ").map(item=> parseFloat(item));


/*
var a=parseFloat(lines.shift());
var b=parseFloat(lines.shift());
*/

/*
var a=Number(lines[0]);
var b=Number(lines[1]);
*/


console.log(a);
console.log(b);
