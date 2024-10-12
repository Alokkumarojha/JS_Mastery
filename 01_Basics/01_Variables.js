// const accountId = "134435";
// let accoutName = "This is github";
// var emailId = "alok@gmail.com";
// let accountState;
// accountCity = "Siwan"

// console.table([accountId, accoutName, emailId, accountCity,accountState])
/*
Prefer not to use var .
Becouse of issue in block scope and functional scope.
*/

// var a = (b = 5);
// console.log(`Value of  a: ${a}`);
// console.log(`Value of b: ${b}`);

let p = 5;
let q = 5;
let r = 5;
let s = 5;

if (((p == q) == r) == 0) {
  console.log("Hellow coders");
} else {
  console.log("bye coders");
}

// // notes: how to work this code.
// (p == q) => (5==5) => true
// ((p == q) == r) => true == 5 => 1==5 = false
// false = 0 => 0==0 true

let str =
  "Hare rama hare rama ram ram hare hare hare krishna hare krishna krishna krishna hare hare.";
const obj = {};
for (let x of str) {
  if (obj[x]) {
    obj[x] += 1;
  } else {
    obj[x] = 1;
  }
}
// console.log(obj);

let str1 =
  "Hare rama hare rama ram ram hare hare hare krishna hare krishna krishna krishna hare hare.";

const charCount = str1.split("").reduce((acc, char) => {
  acc[char] = (acc[char] || 0) + 1;

  return acc;
}, {});

// console.log(charCount);
