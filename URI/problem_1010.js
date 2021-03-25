var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var data1=lines.shift().split(" "); //12 1 5.30
var data2=lines.shift().split(" "); //16 2 5.10

var productCode1=data1.shift();
var productQuentity1=data1.shift();
var productPrice1=data1.shift();
var frist_price=productQuentity1*productPrice1;

var productCode2=data2.shift();
var productQuentity2=data2.shift();
var productPrice2=data2.shift();
var second_price=productQuentity2*productPrice2;

var total_price= frist_price+second_price;
console.log(`VALOR A PAGAR: R$ ${total_price.toFixed(2)}`);

Or:


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [productCode1,productQuentity1,productPrice1]=lines.shift().split(" "); //12 1 5.30
var [productCode2,productQuentity2,productPrice2]=lines.shift().split(" "); //16 2 5.10


var frist_price=productQuentity1*productPrice1;

var second_price=productQuentity2*productPrice2;

var total_price= frist_price+second_price;
console.log(`VALOR A PAGAR: R$ ${total_price.toFixed(2)}`);
