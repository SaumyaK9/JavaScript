//the datatypes are divided into 2 types on the basis of how they are stored into the memory - primitive and non-primitive(or reference)
//  Primitive  --> call by value i.e. a copy is made of their data and the changes are made into that copy

//  7 types : String, Number, Boolean, null, undefined, Symbol(used to make any value unique), BigInt

const score = 100          //number
const scoreValue = 100.3   //number

const isLoggedIn = false   // boolean
const outsideTemp = null   // null
let userEmail;             // undefined

const id = Symbol('123')   
const anotherId = Symbol('123')

//console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// console.log(typeof score , typeof scoreValue);   //Number
// console.log(typeof isLoggedIn);     //boolean
// console.log(typeof anotherId);      //symbol
// console.log(typeof outsideTemp);    // it is null so type will be displayed as object

//**************************************************************************************************

// Reference (Or Non-primitive) - reference is directly allocated in the memory

// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"];     //array
let myObj = {                       //object
    name: "Saumya",
    age: 19,
}

const myFunction = function(){       // function
    console.log("Hello world");
}


//saare non primitive ka datatype function hi aata h bss function ka object function
console.log(typeof heroes);
console.log(typeof myObj);
console.log(typeof myFunction);



// https://262.ecma-international.org/5.1/#sec-11.4.3
