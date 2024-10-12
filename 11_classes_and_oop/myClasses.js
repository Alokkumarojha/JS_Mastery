// class user {
//   constructor(username, password, email) {
//     this.username = username;
//     this.password = password;
//     this.email = email;
//   }
//   encriptPassword() {
//     return ` ${this.password}abc`;
//   }
//   changeUsername() {
//     return `${this.username.toUpperCase()}`;
//   }
// }
// const user1 = new user("Alok", "123", "Alok@example.com");
// console.log(user1.encriptPassword());
// console.log(user1.changeUsername());

// behaind the scheen

function user(username, password, email) {
  this.username = username;
  this.password = password;
  this.email = email;
}
user.prototype.encriptPassword = function () {
  return `${this.password}Alok`;
};
user.prototype.changeUserName = function () {
  return `${this.username.toUpperCase()}`;
};
const user2 = new user("ShyamJI", "1234", "hellow@hi.com");
console.log(user2.encriptPassword());
console.log(user2.changeUserName());
