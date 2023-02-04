
function RecursiveFactorial(num){
    // recursive function break condition 
    // amar jodi break condition na use kori tahole recursive function call hote thakbe

    if(num==1){
        return 1
    }else{
        return num* RecursiveFactorial(num-1)
    }
}
const number=5
const result=RecursiveFactorial(number)
console.log(`${number} factorial number : `,result)