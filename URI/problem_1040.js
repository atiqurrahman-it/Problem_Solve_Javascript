var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [N1,N2,N3,N4]=lines.shift().split(" ").map(item=> parseFloat(item));


var res=(N1*2+N2*3+N3*4 +N4*1)/10;
console.log(`Media: ${res.toFixed(1)}`);
if(res>=7){
    console.log("Aluno aprovado.");
}else if(res<5){
    console.log("Aluno reprovado.");
}else if (5<=res && res<=6.9){
    console.log("Aluno em exame.");
    var fail=parseFloat(lines.shift());
    console.log(`Nota do exame: ${fail.toFixed(1)}`);
    let reava=(res+fail)/2;
    if(reava<4.9){
        console.log("Aluno reprovado.");
    }else if(reava>=5){
        console.log("Aluno aprovado.");
        console.log(`Media final: ${reava.toFixed(1)}`);
    }
   
}
