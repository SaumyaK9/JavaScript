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
// console.log(typeof heroes);
// console.log(typeof myObj);
// console.log(typeof myFunction);


// https://262.ecma-international.org/5.1/#sec-11.4.3

//************************************************************************** */

//Stack(primitive)  --->  declared variable ki ek copy milti h aur usi m saare changes perform hota h(original m nhi)
//heap (Non-primitive)  ---> declared ka reference milta h aur changes direct original value m hoti h

let myName = "Saumya"

let anothername = myName
anothername = "sasa"

console.log(myName);    //Since it is created into a stack, the changes are made into the copy so the value in myName remains unchanged
console.log(anothername);

let user1 = {
    email: "user@google.com",
    upi : "user@ybl"
}

let user2 = user1

user2.email = "saumya@google.com"

console.log(user1.email);   //both will print same value i.e. "saumya@google.com" as the object gets memory in the heap and both point at same reference 
console.log(user2.email);