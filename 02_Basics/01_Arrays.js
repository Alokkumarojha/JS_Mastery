// Array

const myArr = [1,2,3,4,5,6]
const myHero = ["shaktiman","juniourJI","Kangaroo"]
let myArr2 = new Array (1,2,3,4,5,6)

//console.log(myArr[0])
//console.log(typeof myArr) // object 

// myArr.push(7); // The push() method adds one or more elements to the end of an array and returns the new length of the array.
// myArr.pop()   // remove to the end of an Array
// myArr.unshift(9) // insert the first element from the Array .this method is also chenge the lenth of an Array.
// myArr.shift() // remove the first element from the Array. this methos is also chenge the lenth of an Array


//console.log(myArr.includes(9)); // This method check if an array contains a certain element return true.
//console.log(myArr.indexOf(9)) // if value is not found in array return -1 if faund return the value.
//let newArray = myArr.join() // This method combined all element of array to string.
// console.log(newArray)


const myAn1 = myArr.slice(1, 3) // return a copy of a section of an array 
console.log(myArr)
console.log("a", myAn1);

const myAn2 = myArr.splice(1, 3) //Removes elements from an array and if necessary insert new element in there places returning the deleted elements.
console.log(myArr)
console.log("B", myAn2);


