let arr = [1,2,3,4]

for (const val of arr) {
    // console.log(val);
    
} 

let greetings = "hellow world"
for (const greet of greetings) {
    if (greet == " ") {
        // console.log(`space detucted ${greet}`)
        break
    }
    // console.log(`Each char is ${greet}`);
    
}

// Map

// map uniwue value ke liye jani jati hai value unique hoti hai jaise ek hi name ke do entry nahi ho sakti. 
// jis order me value enter hoti hai usi value me print bhi hoti hai.

const Map1 = new Map()
Map1.set("IN", "India")
Map1.set("UK", "United kingdom")
Map1.set("USA", "United state of america")
// console.log(Map1);

for (const [key , value] of Map1) {  // Array ke uper only forOf loop use hoga 
    // console.log(key, ":-" , value);
    
}

const myObject = {
    js: "javaScript",
    cpp: "C++",
    java: "Java",
    Python: "Python",
}
for (const key in myObject) {   // Object ke upper ham for in loop use hota hai .
   console.log(`${key} shortcut is for ${myObject[key]}`);
   
}
