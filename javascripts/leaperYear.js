
// function findLeapYear(arrOfYears){
// //write your code here
//   let leapYear=[]
  
//   // way one 
// //   function FindLeaper(year){
// //       if ((year%4 ==0 && year%100 !=0) || (year%400==0)){
// //         leapYear.push(year)
// //       }
// //   }
  
// //   for(let i=0;i<arrOfYears.length;i++){
// //       FindLeaper(arrOfYears[i])
// //   }

//   // way two 
//   for(let year of years){
//     if ((year%4 ==0 && year%100 !=0) || (year%400==0)){
//         leapYear.push(year)
//       }
//   }

  
//   return leapYear
  
// //don't forget to write return
// }

// let years=[2023,2024,2025,2028,2030]
// let result=findLeapYear(years)
// console.log(result)





function findLeapYear(arrOfYears){
      let leapYear=[]
      for(let year of arrOfYears){
        if ((year%4 ==0 && year%100 !=0) || (year%400==0)){
            leapYear.push(year)
          }
      }
      return leapYear
    }
    
let years=[2023,2024,2025,2028,2030]
let result=findLeapYear(years)
console.log(result)

