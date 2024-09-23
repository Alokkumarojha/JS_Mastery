// if statment

if (true) {}  // agar true hai to to iske ander ka code render hoga false hai to nahi render hoga.

// = is an assignment uperator
// == ham check kar rahe hai kya uske barabar hai ki nahi 
// <  lessThan
// > greaterThan
// <= lessThan equalTo
// >= greaterThan equalTo
// != negative statment 3!=2
// === strict checking
// !== 2!==3 // true 

// const Tempretur = 30
// if (Tempretur > 31) {
//     console.log("less than 30")
// }else {
//     console.log("Tempreture greter than 30")
// }

// let score = 200
// if (score > 100) {
//     let Power ="fly"
//     console.log(`The score is ${Power}`)
// }

// console.log(`The score is ${Power}`)  // Power is not defined becouse out of scope we can access using var 

// let Balance = 900
// if ( Balance < 500){
//     console.log("Balance below 500");
    
// }else if ( Balance < 750) {
//     console.log("Balance below 750");
// }else if ( Balance < 950) {
//     console.log("Balance below 950");
// }else {
//     console.log("Balance above 1000");
// }

// let isLoggedIn = true
// let devidcard =true 
// if (isLoggedIn && devidcard && 2==2 & 2!=3) {  // the code will be rendered when the condition is true.
//     console.log("allow to logged in ")
// }else{
//     console.log(" Don't allow to logged in ")
//}

let googleLoggedin = true
let emailLoggedin = false
let guistLoggedin =true
if (googleLoggedin || emailLoggedin || guistLoggedin) {
     
    console.log("logged In succsessfull")
}







