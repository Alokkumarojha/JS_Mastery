function setUserName(userName) {
  this.userName = userName;
}
function createUser(userName, email, password) {
  setUserName.call(this, userName);

  this.email = email;
  this.password = password;
}
const user = new createUser("alok", "alok.js.com", 123);
console.log(user);
// .call() is a JavaScript method that allows you to  set what this refers to inside a function.
