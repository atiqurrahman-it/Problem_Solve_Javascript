let array=['atiqur','nurjamal','rohin','korim','rohim','korim','korim','atiqur','atik','atik']

function removeDuplicateArray(arr){
    let arraylength=arr.length
    let uniqueArray=[]
    for(let i=0;i<arraylength;i++){
        let name=arr[i]
        if(uniqueArray.includes(name)===false){
            uniqueArray.push(name)
        }
    }
    return uniqueArray
}
let result=removeDuplicateArray(array)
console.log(result)