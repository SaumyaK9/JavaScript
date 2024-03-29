// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


console.log("2" > 1);   // 2 already gets converted to number
                        //but this may not give a predictable result in js
                        //but should not compare 2 different datatypes (reason above)
console.log("02" > 1);

console.log(null > 0);   //--> false
console.log(null == 0);  //--> false
console.log(null >= 0);  //--> true (becoz that an equality check == and comparisions > < >= <= work differntly.
                                   // comparisions convert null to Number, treating it as 0.
                                   // That's why null >= 0 is true and null > 0 is false)

console.log(undefined == 0);   //--> false
console.log(undefined > 0);    //--> false
console.log(undefined < 0);    //--> false

// ===  --> strict check i.e. also checks the datatype of the operands

console.log("2" === 2);