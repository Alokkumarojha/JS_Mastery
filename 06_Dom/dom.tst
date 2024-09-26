// Converting NodeList to an Array
If you want to use array methods like map() or filter(), you need to convert the NodeList to an array:

const listItems = document.querySelectorAll("li") // sellect all li 
const listItems : This assigns the return NodeList to the constent listItems
const changeToArray = Array.from(listItems) //change nodeLisst to array.

changeToArray.map(function (items) {  // apply map callbackfn
    items.style.color = "Green"
})

document.getElementsByClassName("list-item") // list-item is a className of li which defined in dom.html.
const listItems = document.getElementsByClassName("list-item") // assign the return HTMLCollection to const listItems.
const convertTOArray = Array.from(listItems) change HTMLCollection to Array.
convertTOArray.map(function (item) { // apply map callbackfn
    item.style.color = "orange"
})

const myHeading = document.querySelectorAll(".mw-heading")
myHeading.forEach(function (item) {
    item.style.color = "black"
    item.style.backgroundColor = "Green"
    item.style.padding = "10px"
     item.innerHTML = "Alok"
    
})