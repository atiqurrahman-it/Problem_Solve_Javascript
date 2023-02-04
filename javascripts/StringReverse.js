// revers string  &&  revers word 

// revers string
function reversFunction(string){
    let reversString=""
    for(let i=string.length-1;i>=0;i--){
        reversString+=string[i]
    }
    return reversString
}
let string="atiqur"
let re=reversFunction(string)
console.log(string)
console.log(re)


// revers word 
function reversWord(sting){
    let st=sting.split(' ')
    let result=[]
    for(let i=st.length-1;i>=0;i--){
        result.push(st[i])
    }
    return result
}
let str="i love you"
let res=reversWord(str)
console.log(str)
console.log(res)

