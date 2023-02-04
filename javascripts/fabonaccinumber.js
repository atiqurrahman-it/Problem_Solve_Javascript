// //   Fibonacci number

// way one 
function fibonacci (number){
    if(number==0){
        return [0];
    }else if(number==0){
        return [0,1];
    }else{
        let a=0;let b=1
        let result=[a,b]
        for(let i=2;i<number;i++){
            [a,b]=[b,a+b]
            result.push(b)
        }
        return result
    }
    
}
let serialNumber=3
let resultFib=fibonacci (serialNumber)
console.log(resultFib)


// second way
function fibonacciNumber(number){
    let fifo=[0,1]
    for(let i=2;i<number;i++){
        fifo[i]=fifo[i-1]+fifo[i-2]
           }
    return fifo
}
// input ek list 3
let serialNum=3
let re=fibonacciNumber(serialNum)
console.log(re)


// recursive fibonacci
console.log("fibonacci number using recursive function")
function RecursiveFibonacci(number){
    if(number==0){
        return [0]
    }else if(number==1){
        return [0,1]
    }else{
        let fib=RecursiveFibonacci(number-1)
        let element=fib[number-1]+ fib[number-2]
        fib.push(element)
        return fib
        
    }
}

let number=6
let recursiveFibResult=RecursiveFibonacci(number)
console.log(recursiveFibResult)

// single value return recursive fibonacci number 

function fibonacciReverse(n){
    if(n==0){
        return 0;
    }
    else if(n==1){
        return 1
    }else{
        return fibonacciReverse(n-1)+ fibonacciReverse(n-2)
    }
}

console.log("single recursive fibonacci number : ",fibonacciReverse(10))


