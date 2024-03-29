const score = 400
//console.log(score);           // ---> 400

const balance = new Number(100)
//console.log(balance);            // ---> [Number: 100]

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));    // fix the precision value

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'));  //gives defaukt vlues in usa standards but 
                                                // 'en-IN' makes it to indian standards


// Maximum value of number - MAX_VALUE : 1.7976931348623157e+308
// Minimum value of number - MIN_VALUE : 5e-324

//****************************************************************************************************************************** */

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

// console.log(Math.random());     //always gives values bet. 0 and 1
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)  // *Imp* remember