// STACK and HEAP
//*** STACK ***//
/*
Stack is used in Premitive data type where it used call by value
*/

let myName = "Lakshya"

let newName = myName
newName = "Tanay"

console.log(newName);//Tanay
console.log(myName);//Lakshya
/*
Heap is used in Non-Premitive datatype..where it called by refrence
*/
let userOne = {
    email : "myname@gmail.com",
    Id : 1223
}

let userTwo = userOne
userTwo.email = "IamChangingMyMailBut_InPreviousOneItPrintssmaeWhichIupdate@"

console.log(userOne.email)
console.log(userTwo.email)

