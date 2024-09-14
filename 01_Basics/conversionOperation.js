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
console.log(stringNumber);
console.log(typeof stringNumber)
