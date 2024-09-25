let myNumber = [1,2,3]

// const newNumber = myNumber.reduce((accu,curval) => {
//     console.log(`acc is ${accu} and curval value is ${curval}  `)
//     return curval + accu

// },3) // this is the value of accumulator

const newNumber = myNumber.reduce((acc,curval)=> acc+curval, 0) // 0 is value of accumulator // write in arrow function
// console.log(newNumber);


const shoppingCarts = [
    {
     itemName: "Java script",
     price: 9999
    },
    {
        itemName: "Java",
        price: 999
       },
       {
        itemName: "Data science",
        price: 12000
       },
       {
        itemName: "Python",
        price: 999
       }
]

const TotalPriceToPay = shoppingCarts.reduce((accu, items) => accu+items.price,0)
console.log(TotalPriceToPay);
