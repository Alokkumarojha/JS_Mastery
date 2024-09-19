/*There are two type of object
1 singleton
object.create
2 object literals
*/

const mysymboll = Symbol("key1")
let jsuser = {
    "name": "alok",
    fullName: "alok kumar ojha",
    age: "31",
    [mysymboll]: "myKey1",
    email: "alok@gmail.com"
}  
// console.log(jsuser["name"])
// console.log(jsuser[mysymboll])
// console.log(typeof jsuser[mysymboll])
// console.log(jsuser.fullName)

// jsuser.email = "alok@chatgpt.com" // we can change value ..

// Object.freeze(jsuser); // we can lock the object.
// jsuser.email ="alok@microsoft.com"
// console.log(jsuser);

jsuser.greeting = function() {
    console.log("hello js user")
}
console.log(jsuser.greeting())

jsuser.greeting2 = function() {
    console.log(`hello js user ${this.fullName}`)
}
console.log(jsuser.greeting2())