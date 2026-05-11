
const name = "Lakshya"
const Company = "Rolls-Royces"

//console.log(name +" "+ Company)//but this is not good thing for CONCATINATION

//FOR NEW GEN WE USE (BACKTICKS)(``) FOR srting interpolation
//console.log(`Hello my name is ${name} and currently am working in ${Company}`)

const myName = new String("Lakshya Dwivedi")
//console.log(myName)

// console.log(myName[0])
// console.log(myName.__proto__)//object
// console.log(myName.toUpperCase())
// console.log(myName.charAt(5))
// console.log(myName.indexOf('y'))

const newString = myName.substring(0, 10);//we can not give - value or if you do it will start from 0
console.log(newString)

const anotheStr = myName.slice(-10, 14);//we use (-) for print in reverse 
console.log(anotheStr)

const email = "       sdcdshv@gmail.com         "//we TRIM to remove extra space /white spaces/ line terimanators
console.log(email.trim()) 

const url = "http://lakshyadwivedi/lakshya%%2211Dwivedi"//http://lakshyadwivedi/lakshyq-Dwivedi

console.log(url.replace('%%2211', '-'))
console.log(url.includes('lakshya'))
console.log(myName.split(' '))