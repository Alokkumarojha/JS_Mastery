function sayMyname () {
    console.log("A")
    console.log("L")
    console.log("O")
    console.log("K")

}
// sayMyname()

// function addTwonumbers  (Number1 , number2) {  // (Number1 , number2) its called Parameters
//  console.log(Number1 + number2)
// }
// addTwonumbers(3 ,4) // when we pass value its called arguments

function addTwonumbers (num1,num2){
  let Result = num1+num2;
  return Result
}
const Result = addTwonumbers(4,4)
// console.log ("Result is " , Result)

function logginUserMessage (userName) {
    if(userName === undefined){   // we can also write (!userName) both are same.
        console.log("Please enter a User message")
        return
    }
  return `User Message is ${userName}`
}
// console.log(logginUserMessage("Alok"))
console.log(logginUserMessage()) // undefined  

function logginUserMessage (userName = "Syam") {  // syam is a defaul value if argument is undefined then default value print.
    if(!userName){   
        // console.log("Please enter a User message")
        return
    }
  return `User Message is ${userName}`
}
// console.log(logginUserMessage("Alok"))
// console.log(logginUserMessage("Alok")) // if we pass value a argumet then override value syam

// function calculateCartPrice (...num) {  // ... this is a rest operator return arguments all arguments in string.
// return num
// }
// console.log(calculateCartPrice(200,300,4500,44,))


function calculateCartPrice (value1, value2 , ...num) {  
  return num
  }
  // console.log(calculateCartPrice(200,300,4500,44,)) // value1 and value2 will take one argument each a remainder will be printed together in a string
   

// passing object in fuction 
const user = {
   userName: "alok kumar ojha",
   Price: 999,
}
function handleObject (anyObject) {   // we can take any name as a parameter.
console.log(`user name is ${anyObject.userName} and price is ${anyObject.Price}`)
}
handleObject(user)  // Passing object name is compulsory where using the function 

function handleObject (anyObject) {   // we can take any name as a parameter.
  console.log(`user name is ${anyObject.userName} and price is ${anyObject.Price}`)
  }
  handleObject({          /// we can pass object directly 
    userName: "Shyam",
    Price: 999
  })

  // passing Array in Function 

  let myArray = [220,300,400,500]

  function returnSecondValue (anyArray) {
     return anyArray[3]
  }
  console.log(returnSecondValue(myArray))

  // 2nd method pass array directly in function 

  let myArray1 = [220,300,400,500]

  function returnSecondValue (anyArray) {
     return anyArray[3]
  }
  console.log(returnSecondValue([500,222,111,444]))