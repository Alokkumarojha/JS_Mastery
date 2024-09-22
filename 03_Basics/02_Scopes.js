let name = "Alok"  // its a globle scope
 
function printGloblaescope () {
    // console.log(name); // can access global variable name
}
printGloblaescope()

function showName () { // Function Scope
    let name = "Alok"
}
showName()
// console.log(name)

if (true) {
    let age = 25; // block scope
    // console.log(age); // Output: 25
}

// console.log(age); // Error: age is not defined 


function one () {
    let name = "Alok kumar ojha"
    function two () {
        let age = 30 ;
        // console.log(age)
        // console.log(name) // we can access parrent variable 
    }
    // console.log(age) // age is not defined 
    two()
    // console.log(name)

}
one()
 
if (true) {
    const userName = "alok "
    if(userName === "alok ") {
        const age = 30 
       // console.log (userName + age)
        
    }
    // console.log(age); // age is not defined
}
// console.log(userName) // userName is not defined

console.log(addOne(5))  // print 6 executed 
function addOne (num) {
  return num +1
}


console.log(AddTwo(5)) // but we defined this type its not execute // 'AddTwo' before initialization
const AddTwo = function (num) {
  return num +2
}
 
// this keyword refers current containt 

const user = {
    userName: "Alok kumar Ojha",
    Price:  999
    
}
