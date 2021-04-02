var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [a,b]=lines.shift().split(" ").map(item=> parseFloat(item));
if (a>0 && b>0 ){
    console.log("Q1");
}else if (a>0 && b<0){
    console.log("Q4");
}else if(a<0 && b<0){
    console.log("Q3");
}else if(a<0 && b>0){
    console.log("Q2");
}else if (a>0 && b===0){
    console.log("Eixo X");
}else if (a===0 && b>0){
    console.log("Eixo Y");
}else if (a<0 && b===0){
    console.log("Eixo X");
}else if (a===0 && b<0){
    console.log("Eixo Y");
}else{
console.log("Origem");
}