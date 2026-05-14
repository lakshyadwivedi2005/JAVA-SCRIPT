const family = ["Sneh lata dwivedi", "Pratap Narayan diwvedi","Lakshya dewivedi"]
const siblings = ["Geetanjali Agnihotri", "Akansha pandey", "Smrati Dwivedi"] 

//family.push(siblings)
//console.log(family)//it print like array inisde array which is not good
// console.log(family[3])
// console.log(family[3][1])//to accsses "Akansha Dwivedi" you wnat to write like this-> not good 

// const fullFamily = family.concat(siblings)
// console.log(fullFamily)

//* SPREAD */
const house = [...family, ...siblings]
//console.log(house)

const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const complexArrToSimple = anotherArr.flat(Infinity)//inside flat method it required to provide how many depth you want to solve
//console.log(complexArrToSimple) 

console.log(Array.isArray("Vivek"))
console.log(Array.from("Vivek"))
console.log(Array.from({name : "vivek"}))/* INtresting case : beacuse it gives empty array*/

let Roll1 = 32343
let Roll2 = 75748
let Roll3 = 76549
console.log(Array.of(Roll1, Roll2, Roll3))
