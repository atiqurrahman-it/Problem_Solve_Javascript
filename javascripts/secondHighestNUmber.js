function secondLargest ( numbers ) {
//Write your code here
  let largestNumber=numbers[0]
  let secondLargeNUmber=numbers[1]
  for(let i=0;i<numbers.length;i++){
    if(largestNumber < numbers[i]){
        
     secondLargeNUmber=largestNumber
     largestNumber=numbers[i]
      
    }else if(secondLargeNUmber <arr[i]){
        secondLargeNUmber=arr[i]
    }
        
    
  }
//Don't forget to return
  return secondLargeNUmber;
}
let arr=[10,33,5,99,6]
let result=secondLargest(arr)
console.log(result)