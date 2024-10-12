// Inheritance
class User {
  constructor(userName) {
    this.userName = userName;
  }
  logMe() {
    return console.log(`USERNAME is ${this.userName}`);
  }
}
class Teacher extends User {
  constructor(userName, password, email) {
    super(userName);
    this.password = password;
    this.email = email;
  }
  addCouse() {
    return console.log(`A new course added by user ${this.userName}`);
  }
}
const newUser = new Teacher("Radhe krishna", "4321", "krish@mathura.com");
newUser.addCouse();
const newUser1 = new User("ShitaRam");
newUser1.logMe();
// console.log(newUser === newUser1);
console.log(newUser instanceof Teacher);
console.log(newUser instanceof User);

// const user = {
//   name: "Alok",
//   email: "alok@google.com",
// };
// let Teacher = {
//   makeVideo: true,
// };

// let teachingSupport = {
//   isAvailable: true,
// };

// let tsSupport = {
//   makeAssignment: "jsAssignment",
//   fullTime: true,
//   __proto__: teachingSupport,
// };
// Teacher.__proto__ = user;

// // Modarn syntex

// Object.isPrototypeOf(Teacher, teachingSupport);

// let myName = "Alok kumar ojha";
// String.prototype.trueLength = function () {
//   console.log(this);
//   console.log(`True length is: ${this.trim().length}`);
// };
// "Alok ".trueLength();
// myName.trueLength();
