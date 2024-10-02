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

var a = (b = 5);
console.log(`Value of  a: ${a}`);
console.log(`Value of b: ${b}`);
