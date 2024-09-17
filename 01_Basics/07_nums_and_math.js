const score = 300;

const Balance = new Number (500)
//console.log(score)
//console.log(Balance)
//console.log(Balance.toString().length); 
/* toString() is a JavaScript method that converts 
a number, boolean, array, or other types of data into a string.*/

//console.log(Balance.toFixed(1)) /*used with numbers to format them to a specified number of decimal places.*/

let num = 1.2345;
let result1 = num.toPrecision(2);  // Returns "1.2"
let result2 = num.toPrecision(3);  // Returns "1.23"
let result3 = num.toPrecision(4);  // Returns "1.235"
//console.log(num.toPrecision(1))

const Hundreds = 10000000
//console.log(Hundreds.toLocaleString("en-IN"))
 /*method that converts a 
number, date, or other data types into a locale-sensitive string format. en-in use for india*/

/*toPrecision() is a JavaScript method that formats a number to a specified total number of significant digits*/
/*note- The return value is always a string*/


/*Number() is a built-in JavaScript function that converts a value into a number. 
It can handle different types of input, including strings, booleans, and more. Here are some examples of how it works:*/
Number("123");    // Returns 123 (number)
Number("123.45"); // Returns 123.45 (number)
Number("");       // Returns 0
Number("ABC");    // Returns NaN (Not-a-Number)
Number(true);     // Returns 1
Number(false);    // Returns 0

//*********************************************Math*********************************************

//console.log(Math) // Object [Math] {}

//console.log(Math.abs(-5)) // covert number to positive 5
//console.log(Math.round(4.6)) // use to round a number to the nearest integer.
//console.log(Math.ceil(4.3)) // round a number up to the nearest integer.
//console.log(Math.floor(4.9)) // round a number down to the nearest integer
//console.log(Math.min(4,3,5,67,2)) // print minimum value
//console.log(Math.max(4,3,5,67,2)) // print maximum value

//console.log(Math.random()) //generate a random number beetween 0 to 1 ..
//console.log((Math.random()*10)+1)

const min =10;
const max =20;
console.log(Math.floor((Math.random() *( min - max)+1) ) + max)


