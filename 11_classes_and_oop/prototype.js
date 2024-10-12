// let myName = "Alok     ";
// console.log(myName.length);

let myHero = ["Spiderman", "thor"];

let heroPower = {
  Spiderman: "sling",
  thor: "hammer",

  spiderPower: function () {
    console.log(`Spyder Power is ${this.Spiderman}`);
  },
};
Object.prototype.Alok = function () {
  console.log("Alok is available in all objects");
};

Array.prototype.heyAlok = function () {
  console.log("Alok says hello");
};
// heroPower.Alok();

myHero.Alok();
// heroPower.heyAlok();
myHero.heyAlok();
