const name = "Saumya"
const repoCount = 5

// console.log(name + repoCount + " Value");

//String interpolation is done using backticks -> ` ` which is modern technique for the + and , concatenation of strings
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Saumya-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Sasa    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sasa.com/sasa%20kmk"

console.log(url.replace('%20', '-'))

console.log(url.includes('sunder'))

console.log(gameName.split('-'));  // converts string to array