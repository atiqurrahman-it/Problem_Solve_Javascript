
function feetToInch(feet){
    // we know 1 feet equal 12 inches
    let re=(feet*12).toFixed(2)
    
    return parseFloat(re);
}
let feet=12.8
let inch=feetToInch(feet)
console.log(inch)
