var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n,Alcohol=0,Gasoline=0,Diesel=0;

while (1) {
    n=parseInt(lines.shift());
    if(n==4){break;
    }else{
        if(n==1){
            Alcohol++;
        }else if(n==2){
            Gasoline++;
        }else if(n==3){
            Diesel ++;
        }else{
            continue;
        }
    }
}

console.log("MUITO OBRIGADO");
console.log(`Alcool: ${Alcohol}`);
console.log(`Gasolina: ${Gasoline}`);
console.log(`Diesel: ${Diesel}`);