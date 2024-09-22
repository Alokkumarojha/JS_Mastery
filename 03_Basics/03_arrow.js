const user = {
    userName: "Alok kumar ojha",
    Price: 999,
    userMessage: function () {
        console.log(`User Name is ${this.userName}`) // This keyword refers to current content of scope.
        // console.log(this)
    }
}
// user.userMessage()
// userName = "Shyam"
// user.userMessage()
// console.log(this) // {}


/// Brouser ke ander jo object hai wah windows object hai isliye browser ke ander console.log(this) karne par windows print hota hai 
// jabki yaha empty object print hota hai . 


// function checkThisKeyword () {
//     let  userName = "Alok"
//     console.log(this) // Print global value
// } 
// checkThisKeyword()

// agar function se kewal this ko print karne par onlu global value aye ga.

// const checkThisKeyword = function () {
//     let  userName = "Alok"
//     console.log(this)   // Print global value
// } 
// checkThisKeyword()

//  const checkThisKeyword = () => {
//     let  userName = "Alok"
//     console.log(this) //  but in arrow function print {} empty object
// } 
// checkThisKeyword()


/// arrow function there are two type explicit return and Implicit return.


// // Explicit return 
// const addTwo = (num1, num2) => {
//      return (num1+num2)
// }
// console.log(addTwo(4,7));

// // Implicit return
// const addTwo = (num1, num2) => (num1+num2)

// console.log(addTwo(4,7));

// we can return abject also use paranthisus
const addTwo = (num1, num2) => ({userName: "alok"})

console.log(addTwo(4,7));
