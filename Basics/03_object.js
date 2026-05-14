//SingleTon

//object Literals
//"Object.create"this way to create object is called Constructer method & Sinleton inside this
//mySym : "keyOne",//it's typeof is string  not Symbol so we do for Symbol

const mySym = Symbol("Key1")
const jsUser = {
    name : "Lakshya",
    "fullname" : "Lakshya Dwivedi",
    [mySym] : "keyTwo",//this is the coorect way 
    age : 21,
    location : "Vadodra",
    email : "islect.kocompletekrkesona@gmail.com",
    isLogged : false,
    lastLogged : ["Monday", "Sunday"]
}

// console.log(jsUser.name)
// console.log(jsUser["fullname"])
// console.log(typeof jsUser.mySym);
// console.log(jsUser[mySym]);

//to rechange any thing
// jsUser.name = "Tanay"
// Object.freeze(jsUser);
// jsUser.name = "Laksh7ya"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hey Lakshya Dwivedi");
}
jsUser.greetingTwo = function(){
    console.log(`Hey, ${this.fullname}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

/****TO ACCESS ANY THING USE SQUARE BRACKET(console.log(jsUser["fullname"])) INSTED OF "."(console.log(jsUser.name)) *****/