var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var br=0;
var sum=0;
var input_valu;

while(1){
        while(1){
            if(br==2){
                break;
            }
            input_valu=parseFloat(lines.shift());
            if(input_valu>=0 && input_valu<=10){
                br++;
                sum+=input_valu;
            }else{
                console.log("nota invalida");
            }
        }

        result=sum/2;
        console.log(`media = ${result.toFixed(2)}`);
        sum=0;
        br=0;
        while(1){
            input_valu=parseFloat(lines.shift());
            console.log("novo calculo (1-sim 2-nao)");
            if (input_valu==1 || input_valu==2){
                break;
            }
        }

        if (input_valu==1){
            continue;
        }else{
            break;
        }
    }