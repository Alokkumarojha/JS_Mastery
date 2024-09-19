//const tinderUser = new Object() // This is a singleton object
const tinderUser = {} // non singleton object
tinderUser.id = "aas123"
tinderUser.name = "syam"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

const regularUser = {
    fullname: {
        userFullName: {
            firstName: "alok kumar",
            LastName: "Ojha",
        }
    }
}

// console.log(regularUser.fullname.userFullName.firstName)

const obj1 = {1: "A", 2: "B"}
const obj2 = {3: "c", 4: "D"}
// const obj3 = Object.assign({},obj1,obj2) // combined two or multiple object. {} this is a Target object 
const obj3 = {...obj1,...obj2} // this is a spreed operator its combined tow or more object.
// console.log(obj3)

const user = [
    {
        id: 1,
        email: "fghjk@jkl;"
    },
    {
        id: 2,
        email: "fghjk@jkl;"
    },
    {
        id: 3,
        email: "fghjk@jkl;"
    }
]
user[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser))  // we can fetch keys of object
console.log(Object.values(tinderUser))  // we fetch value also.
console.log(Object.entries(tinderUser)) //Return an array of keys/value.
console.log(tinderUser.hasOwnProperty("isLoggedIn")) // we cam check property key defind or not return true/false


