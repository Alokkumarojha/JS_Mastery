// let score = "33addva" // NaN
// let score = null // 0
// let score = undefined // Nan
// let score = true // 1
// let score = false // 0
let score = "alok" // NaN
// console.log(typeof score)
// console.log(typeof(score));

let valueInNumber = Number(score) // convert string to Number
//console.log(typeof valueInNumber)

// console.log( valueInNumber)

// notes-> 
  // "33" => 33 -> if we convert string to  Number then esly converted
  // "34asd" => NaN  not converted. (Not a Number)
  // true => 1 , ralse => 0 
  // 


//   let isLoggedIn = 1 // true
//   let isLoggedIn = 0; // false
// let isLoggedIn = ""; // false
let isLoggedIn = "alok" //true
  let booleanIsLoggedIn = Boolean(isLoggedIn);
//   console.log(booleanIsLoggedIn);

  // 1 => true
  // 0  => false
  // "" => fales
  // "alok" => true


let someNumber = 444;
let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber)

//*********************************************Operation*************************************************


let value =45;
let negativeValue = -value
// console.log(negativeValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*4);
// console.log(2/2);
// console.log(2**8); // 2 to the power 2
// console.log(2%2); // reminder 

// console.log("2"+2+2); //222
// console.log(2+2+"2"); //42
// console.log(2+"2"+2); // 222
// console.log((2+2)+2); // 6 // this is the right way

// console.log(true); // true
// console.log(+true); // 1 
// console.log(+""); // 0


let str1 = "hello"
let str2 = " alok"
let str3 = str1+str2;
// console.log(str3);  // string can also be added.

let x = 3;
const y = x++;

// console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

// console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"


let gameCounter = 100;
// gameCounter++; // value of postfixed gets incremented after use
++gameCounter; // prefixed value is incremented first
console.log(gameCounter); // 101 






