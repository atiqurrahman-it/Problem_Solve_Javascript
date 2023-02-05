function secondLargest ( arr ) {
//Write your code here
  let max1=arr[0]
  let max2=arr[1]
  for(let i=0;i<arr.length;i++){
    if(max1 < arr[i]){
        
     max2=max1
     max1=arr[i]
      
    }else if(max2 < arr[i] && arr[i] < max1 ){
        max2=arr[i]
    }
        
    
  }
//Don't forget to return
  return max2;
}
let arr=[1110,33,5,99,600]
let result=secondLargest(arr)
console.log(result)