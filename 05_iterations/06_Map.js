let myNumber = [1,2,3,4,5,6,7,8,9,]

// const newNumber = myNumber.map((items) => {
//     return items + 10
// })
// console.log(newNumber); 

// chaning
const newNumber = 
                myNumber.map((items)=> {return items * 10})
                        .map((items) => {return items + 1})
                        .filter((items) => {return items >= 41})
                         console.log(newNumber)
