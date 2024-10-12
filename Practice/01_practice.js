// function getEvenNumber(arr) {
//   return arr.filter((num) => num % 2 === 0);
// }
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const Result = getEvenNumber(numbers);
// console.log(Result);

// function printNum(arr) {
//   return arr.filter((num) => num >= 5);
// }
// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const mynum = printNum(number);
// console.log(mynum);

// addTwoNum = (num1, num2) => {
//   let Result = num1 + num2;
//   return Result;
// };
// const Result = addTwoNum(44, 5);
// console.log(Result);

// let persion = {
//   name: "Alok kumar ojha",
//   age: 31,
//   profession: "Software Developer",
// };

// function objectName(persion) {
//   console.log(
//     `${persion.name} is ${persion.age} years old and works as a ${persion.profession}.}`
//   );
// }
// objectName(persion);

function countVowels(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  strArray = str.toLowerCase().split("");

  return strArray.filter((char) => vowels.includes(char)).length;
}

const vowelCount = countVowels("my name is Alok kumar ojha");
console.log(` Total number of vowel in your name: ${vowelCount}`);
