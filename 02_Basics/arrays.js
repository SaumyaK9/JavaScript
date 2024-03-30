//Arrays
//() -> paranthesis , [] -> square brackets, {} -> curly braces

//arrays in js are resizable , zero-based indexing
//arrays can only be accessed using indexes not any arbitrary strings.
//js array copy operations create shallow copies(properties share the same reference point)
                                // deep copy (properties donot share the same reference point)


const myArr = [0, 1, 2, 3, 4, 5]   //can contain different type of datatypes

const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
//console.log(myArr[1]);

// Array methods______________________________________________________________________________________

// myArr.push(6)    //add values
// myArr.push(7)
// myArr.pop()      //removes last value


// myArr.unshift(9)     // adds new value at start of operation
// myArr.shift()          // removes first value of array

// console.log(myArr.includes(9));     //returns boolean
// console.log(myArr.indexOf(3));        //returns number

const newArr = myArr.join()          // combines the values in the array and converts to string.

// console.log(myArr);
// console.log( newArr);
// console.log(typeof newArr);

// slice, splice

// console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)   // [a,b)

// console.log(myn1);
// console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log(myn2);

// slice --> this method just returns the values specified in the range given without changing the actual array --> [a,b)
// splice --> this method removes the elements specified within the range given from the original array thus changing the array --> [a,b]


//Part 2 : *************************************************************************************************************************************************************

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)   // when we merge push another array in marvel_heros, the whole dc_heroes becomes a single element of the array

//  console.log(marvel_heros);
//  console.log(marvel_heros[3][1]);   //and can be accessed like this

//  const allHeros = marvel_heros.concat(dc_heros)    // concat merges the two arrays and returns a new array.
//  console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]   /// ... -> spread operator : it spreads the array elements i.e. each element of the 2 arrays is showed in a new array

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)       //flat() : returns a new array with all subarray elements conctenated into recursively up to specified depth.
                                                              //can specify depth but if we dont know can give infinity.
                                                              // ---> [
                                                                        // 1, 2, 3, 4, 5,
                                                                        // 6, 7, 6, 7, 4,
                                                                        // 5
                                                                    //   ]
//console.log(real_another_array);



console.log(Array.isArray("Saumya"))          //The Array.isArray() static method determines whether the passed value is an Array. return boolean
console.log(Array.from("Saumya"))             //converts argument to array
console.log(Array.from({name: "Sasa"}))       /* interesting
                                               in case of an object we need to specify ki keys ka array banau ya values ka,
                                              / if not specified wo empty array return krega.*/

let score1 = 100
let score2 = 200
let score3 = 300

 console.log(Array.of(score1, score2, score3));

 /*
Array.from() - It lets you create Arrays from:
iterable objects (objects such as Map and Set); or, if the object is not iterable,
array-like objects (objects with a length property and indexed elements).
returns a A new Array instance.
____________________________________________________________________________________________

Array.of() - is a static method creates a new Array instance from a variable number of arguments, 
regardless of number or type of the arguments.
*/