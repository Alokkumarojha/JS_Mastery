// javascript is a prototypial behavier language.
// prototypal inheritance. prototype ke ander bhi prototype milta hai.
//  javascript me every thing is object. including array and string also.

function multiplyBy5(num) {
  return num * 5;
}
multiplyBy5.power = 2;
console.log(multiplyBy5(5));
console.log(multiplyBy5.power); // we can say that function function bhi hai or object bhi hai ....
console.log(multiplyBy5.prototype);

function createUser(userName, score) {
  this.userName = userName;
  this.score = score;
}
createUser.prototype.increment = function () {
  this.score++;
};
createUser.prototype.printMe = function () {
  console.log(`UserName is: ${this.userName}`);
  console.log(`Score is: ${this.score}`);
};
const Alok = new createUser("AK Ojha", 101);
const Shyam = new createUser("Shivansh", 201);

// Alok.printMe();
Shyam.printMe();
