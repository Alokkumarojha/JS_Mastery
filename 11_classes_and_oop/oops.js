// const user = {
// username: "alok",
// loginCount: "11",
// signedIn: true,
// getUserDetails: function () {
// console.log(`User name is: ${this.username}`); //  "this" refers to the surrounding "user" object . current context.
// console.log(this); // "this" refers to the current context of object "user"
//   },
// };
// console.log(user.username);
// console.log(user.getUserDetails());
console.log(this); // "this" refers to the {} empty object in node inviroment
// if we write in the brouser then "this" refers to the global objects. {window}

// constructor function

// "new" keyword is a constructor function.
// we can create multiple instances from one litral object

function User(userNmae, LogCount, isLoggedIn) {
  this.userNmae = userNmae;
  this.LogCount = LogCount;
  this.isLoggedIn = isLoggedIn;
  this.greeting = function () {
    console.log(`Welcom: ${this.userNmae}`);
  };
  // return this; // JavaScript implicitly return "this" (automatically)
}

const userOne = new User("Alok", 12, true);
const userTow = new User("Ojha", 9, false);
console.log(userOne.constructor);
console.log(userTow);
console.log(userOne instanceof User); // true
// cosntructor properties is refrence of using function(User)

// without new keyword value is override
// constructor function provide new copy of instances
// new keyword is a constructor function

// stap by stap
// new keyword use kartey hi ek nay object create hota hai.
// new keyword ke karan constructor function call hota hai
// new keyword me this inject hota hai.
// executed
