/*A JavaScript date is fundamentally specified as the time in milliseconds 
that has elapsed since the epoch, which is defined as the midnight at the
beginning of January 1, 1970, UTC (equivalent to the UNIX epoch). This timestamp 
is timezone-agnostic and uniquely defines an instant in history.  */
//Date is an API.

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

//let myCreatedDate = new Date(2024, 0, 21)   //Months start from 0 when in single digit in JS
//let myCreatedDate = new Date(2024, 2, 29, 19, 15)
//let myCreatedDate = new Date("2024-03-29")
let myCreatedDate = new Date("03-29-2024")

// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now() / 1000)); // to convert into seconds and floor for avoiding decimal values

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

console.log(`Today's date is ${newDate.toLocaleString()} , month is ${newDate.getMonth() + 1} and day is ${newDate.getDay()}`);

newDate.toLocaleString('default', {
    weekday: "long"
})