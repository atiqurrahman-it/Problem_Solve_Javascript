
function findLeapYear(arrOfYears){
//write your code here
  let leapYear=[]
  
  // calculate leaper 
  function FindLeaper(year){
      if ((year%4 ==0 && year%100 !=0) || (year%400==0)){
          return leapYear.push(year)
      }
  }
  
  for(let i=0;i<arrOfYears.length;i++){
      FindLeaper(arrOfYears[i])
  }
  
  return leapYear
  
//don't forget to write return
}

let years=[2023,2024,2025,2028,2030]
let result=findLeapYear(years)
console.log(result)