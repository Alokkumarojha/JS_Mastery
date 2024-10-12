class User {
  constructor(userName) {
    this.userName = userName;
  }
  static logMe() {
    // we cannot access static methods or properties from an instance of the class.
    console.log(`USERNAME ${this.userName}`);
  }
  createId() {
    return "123";
  }
}
const NewUser = new User("Alok");
// console.log(NewUser.createId());

class Teacher extends User {
  constructor(userName, email) {
    super(userName);
    this.email = email;
  }
}
let newUser = new Teacher("alok", "alok@hp.com");
console.log(newUser.logMe());
