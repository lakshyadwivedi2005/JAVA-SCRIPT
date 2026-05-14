//Array : In js arrays are resizeable
//js array-copy operation shallow copies(shallow and Deep copies)
const myArr = [0,1, 2,3, 4,5]

const myArr2 = new Array(1,2,3,4)

// console.log(myArr2);

// myArr.push(6);
// myArr.pop();

// myArr.unshift(0)
// myArr.unshift(9)
// myArr.shift()
//console.log(myArr)

// console.log(myArr.includes(3))
// console.log(myArr.includes(9))

// const newArr = myArr.join()

// console.log(myArr)
// console.log(typeof newArr)//string

//**** SLICE....SPLICE*****/

console.log("A ", myArr)
const myn1 = myArr.slice(1, 3)//it remains unchanged
console.log(myn1)
console.log("B ", myArr)

const myn2 = myArr.splice(1, 3)//splice remove the part means it remove 1 to 3 part from original array
console.log("C ", myArr)
console.log(myn2)

