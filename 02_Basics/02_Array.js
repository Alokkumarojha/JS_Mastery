let marvalHeroes = ["Thor", "IronMan", "SpiderMan"]
let dcHeroes = ["Batman", "Flash","AquaMan"]


//  marvalHeroes.push(dcHeroes) // add new array with existing array
// console.log(marvalHeroes);

// const allHero = marvalHeroes.concat(dcHeroes) // combined two or more array this method returns a new array without modifying existing arrays.
// console.log(allHero);


// const all_Heroes = [...marvalHeroes, ...dcHeroes] // this is called spreed operator , mostly devloper use this operator for combined two or more array.
// console.log(all_Heroes);

// let anotherArray = [1,2,3,4,5,[6,7,8,9,10,11],12,13,[14,15,16,[17,18,19]]]
// const realAnotherArray = anotherArray.flat(Infinity) // return a new array with all sub-Arrays
// console.log(realAnotherArray)

//console.log(Array.isArray("Alok")); // false ,,,, for checking 
// console.log(Array.from("Alok"));  //  convert to array
// console.log(Array.from({name: "Alok"}));  // interesting


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)) //  returns a new array after concerting.
