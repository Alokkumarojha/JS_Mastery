const coading = ["java","javascript", "c","c++","swift"]
coading.forEach(function (items) { // without name of fuction is called callbackFN
    // console.log(items)
})

const myRoomItems = ["Fan","cloths","Almira","myLaptop","pillow","etc"]
myRoomItems.forEach( (items) => { // we can use arrow fuction with forEach
    // console.log(`This is my Room Item ${items}`);
    
})

function PrintMe(items) {
    // console.log(items);
    
}
// myRoomItems.forEach(PrintMe)

myRoomItems.forEach((items,index , arr)=>{
    // console.log(items)
})


let myCoading = [
    {
      languageName: "java script",
      languageFileName: "js"
    },
    {
        languageName: "Python",
        languageFileName: "P"
      },
      {
        languageName: "java",
        languageFileName: "j"
      },
      {
        languageName: "CPP",
        languageFileName: "c++"
      },
]
myCoading.forEach((items)=>{
    // console.log(items.languageFileName)
})

let number = [1,2,3,4,5,6,7,8,9,]
const newNumber = number.forEach((items)=> {return items + 10})
console.log(newNumber)