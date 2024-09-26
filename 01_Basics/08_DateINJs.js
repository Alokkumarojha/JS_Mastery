// Date

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toUTCString());
// console.log(typeof myDate) // object

//let myCreatedDate = new Date(2024, 0 , 3) // 0 means jan
//let myCreatedDate = new Date(2024, 0 , 3, 5, 6) // 1/3/2024, 5:06:00 AM
// let myCreatedDate = new Date("2024-09-17") // 9/17/2024, 12:00:00 AM
let myCreatedDate = new Date("09-17-2024") // 9/17/2024, 12:00:00 AM
//console.log(myCreatedDate.toLocaleString())

let myTimeStand =   Date.now(); // 1726573658561 
//console.log(myTimeStand);
//console.log (myCreatedDate.getTime()) // 1726531200000 both value is in milisecond

// console.log(Date.now()/1000) // converted miliSecond to second 
// console.log(Math.floor((Date.now()/1000)))

let newDate = new Date()
console.log(newDate.getDate())
console.log(newDate.getDay())
console.log(newDate.getFullYear())
console.log(newDate.getHours())
console.log(newDate.getMilliseconds()) 
console.log(newDate.getMonth()+1) 

newDate.toLocaleDateString("default",{
    weekday: "long"
})