// 1 paperRequirements

function paperRequirements(book1,book2,book3){
    let book1Pages=100
    let book2Pages=200
    let book3Pages=300
    let TotalPagesBook1=book1*book1Pages
    let TotalPagesBook2=book2*book2Pages
    let TotalPagesBook3=book3*book3Pages

    let totalPages=TotalPagesBook1+TotalPagesBook2+TotalPagesBook3
    return totalPages

}

let book1Quantity=10
let book2Quantity=20
let book3Quantity=30
let totalPages=paperRequirements(book1Quantity,book2Quantity,book3Quantity)
console.log('Total books pages : ',totalPages)

// 2 BestFriend (whose name is the longest or length )
function bestFriend(names){
    let bestFriend=names[0]
    for(let i=0;i<names.length;i++){
        if(bestFriend.length < names[i].length){
            bestFriend=names[i]
        }
    }
    return bestFriend

}
let friends=['sdfd','sajid','manum','kamal','jubayer bin resed','osman','hasib']
let result=bestFriend(friends)
console.log('bestFriend Name : ',result)

//3 onlyPositive
// sum number by number when negative number 
function onlyPositive(arr){
    let sum=0
    for(let i=0;i<arr.length;i++){
        if(arr[i] > -1){
            sum+=arr[i]

        }else{
            break
        }
    }
    return sum

}
let numbers=[45,87,96,11,-63,-56,63,12]
let sumPositiveNumber=onlyPositive(numbers)
console.log('totalPositiveNumber : ',sumPositiveNumber)