const score = 500;
//console.log(score)
const Balance = new Number(4000)//Manually define Number
//onsole.log(Balance)

// console.log(Balance.toString().length)
// console.log(Balance.toFixed(2))

const secondNum = 123.4555
//console.log(secondNum.toPrecision(4))

const num3 = 10000
// console.log(num3.toLocaleString('en-IN'))//as per Indian number system
// console.log(num3.toLocaleString())

//+++++++++ MATHS +++++++++

// console.log(Math);

// console.log(Math.round(4.55));
// console.log(Math.ceil(4.111111111));///always choose uppar value 
// console.log(Math.floor(4.9999999999999))

console.log(Math.random());//for dice game....It gives value from 0 to 21 
console.log((Math.random() * 10) + 1);

const min = 10
const max = 20

console.log(Math.random() * (max - min + 1) + min)
console.log(Math.floor(Math.random() * (max - min + 1)) + min)