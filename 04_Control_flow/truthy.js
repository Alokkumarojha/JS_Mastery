// const userEmail = "a@gmail.com"  // [] // {} 

// if (userEmail) {
//    console.log("user logged in")
// }else {
//     console.log("user not logged in")
// }

/*Truthy value
  1. true 
  2. any non zero number (1 , -1 , 1.2 , etc)
  3. "hello" any non empty string ()
  4. " " a string just a space "0" , "false"
  5. empty array []
  6. empty object {}
  7. function () {} any fuction
  8. Infinity or -Infinity
          
  Falsy value
  1. false
  2. 0 zero
  3. -0 (negative zero)
  4. "" empty string 
  5. null
  6. undefined 
  7. NaN (Not a Number)
  8. Bigint 0n
*/  

// we can detuct whether the array empty or not.
// let userEmail = []

// if (userEmail.length === 0) {
//   console.log("array is empty")
// }

// we can detct whether the object is empty or not 
let emptyObject = {}

if (Object.keys(emptyObject).length === 0) {
   console.log("Object is empty.")
}

/*when i checked in console 
false == 0 // resut is true
false == "" // true 
o == "" // true
*/


// Nullish Colescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10  // 5  // the value that come first is assigned
// val1 = null ?? 10  // 10  // if the first value is null and undefined then the value comes after that will get assigned
val1 = undefined ?? 10  // 10  // in the case if 10 is not print then assigned value is null and undefined.


// console.log(val1)

/*Terniary Operator 
 condition ? true : fulse
*/

let iceCreamTea = 1000

iceCreamTea <= 80 ? console.log("ice cream less than 80"): console.log("ice crem greater that 80");