//********************************* Primitive ********************************
// 7 : Types =>  String, Number,Boolean , null, Undefind,Symbol, Bigint

let score = 100; // Number
let scoreValue = 100.4;
let isLoggedIn = false;
let outSideTemp = null;
let userEmail; // value is undefind
console.log(typeof outSideTemp) // data type of null is object  
/* Symbols are often used to create unique property keys for objects,
 ensuring that these keys do not conflict with other property keys, even if they have the same name.*/
const sym1 = Symbol();   
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");

Symbol("foo") === Symbol("foo"); // false

/*Working with precise large values in scientific calculations or financial applications.*/
const alsoHuge = BigInt(9007199254740991);
const bigIntegerNum = 392920029202039302n;

//********************************* Non Primitive (Refrence type) ************

//  Function, Array, Object

/*In JavaScript, an Array is a special type of object used to store a collection of elements. 
These elements can be of any data type, including numbers, strings, objects, other arrays, and more.
 Arrays are zero-indexed, meaning the first element is at index 0. */

let someFruit = ["Banana", "Mango", "Apple"];

/* In JavaScript, a function is a reusable block of code designed to perform a specific task.
  Functions can take input (parameters), process it, and return an output (return value). 
 Functions are fundamental in JavaScript for structuring, organizing, and reusing code.*/

let myFunction = function () {
  //    console.log("my name is Alok")
};

/*In JavaScript, an object is a collection of properties, where each property consists of a key (or name) and a value.
  Objects allow you to group related data and functions (methods) together, 
  providing a way to model real-world entities like users, products, and more.*/

let myObject = {
  myName: "Alok",
  myEmail: "alok@gmail.com",
  myId: "4",
};
//   console.log(myObject);
<<<<<<< HEAD
console.log(typeof myObject);
=======
// console.log(typeof myObject)
>>>>>>> 7102af3794aa8dd050ed406479bbd06875862b8a

/* In the example above, the variable data changes its type from a number to a string,
 which is possible because JavaScript is dynamically typed.*/

<<<<<<< HEAD
let data = 89;
data = "hello";
=======
 let data = 89;
 data = "hello";
 
//*********************************************Memory******************************************************
// There are 2 types of Memory 
// Stack &  heap
/* in primitive data type use stack memory and .It works on the principle of Last In, First Out (LIFO),
 meaning the last item added to the stack is the first one to be removed. copy type return*/ 


//While objects are stored in the heap (refrence type uses Heap memory) refrence return
    

let myExample = "Hellow India";
let yourExample = myExample
  yourExample = "hellow HInd";

  // console.log(myExample)
  // console.log(yourExample)

 
  let user1 =function() {
    let result = a+b
  }
  console.log(result);
>>>>>>> 7102af3794aa8dd050ed406479bbd06875862b8a
