let coading = ["c","cpp","python","java","pascal","js","swift"]

// const value = coading.forEach((items) => {
//    return items
// })
// // console.log(value); //undefined // means forEach koi bhi value return nahi karta hai. 

const myNumbers = [1,2,3,4,5,6,7,8,9,]
const newNumber2 = [] 
myNumbers.forEach( (num) => {
    if(num > 5)
    {
     newNumber2.push(num)
        
    }
})
// console.log(newNumber2);



const myNumber = [1,2,3,4,5,6,7,8,9,]

// let newNumber = myNumber.filter((num)=> num <= 6) // basics of filter method 
// console.log(newNumber);
 
let newNumber1 = myNumber.filter((num1) => {   // agar scope open hoga to return keyword use karna hi hoga
    return num1 >= 5  
})
// console.log(newNumber1);


const books = [ 
    {tital: "Book one", Gener: "Fiction", Publish: 1981, Edition: 2004},
    {tital: "Book Two", Gener: "science", Publish: 1982, Edition: 2006},
    {tital: "Book Three", Gener: "Math", Publish: 1983, Edition: 2009},
    {tital: "Book Four", Gener: "Hindi", Publish: 1983, Edition: 2004},
    {tital: "Book Five", Gener: "Geography", Publish: 1984, Edition: 2002},
    {tital: "Book Six", Gener: "English", Publish: 1985, Edition: 2005},
    {tital: "Book seven", Gener: "Chemistry", Publish: 1986, Edition: 2007},
    {tital: "Book eight", Gener: "Physics", Publish: 1987, Edition: 2001},
];
//  const userBook = books.filter((items)=> {
//     return items.Gener === "Hindi"
// })
//    const userBook = books.filter((items) => {
    
//         return (items.Publish >=1983)
//     })

// const userBook = books.filter((items) => 
//     items.tital === "Book eight"
// )

const userBook = books.filter((items) => {
    return items.Edition >= 2000 && items.Gener=== "Physics"
})

console.log(userBook); 
