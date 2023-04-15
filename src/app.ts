console.log("app.js ");

function addNumber(a: number, b: number) {
  let result;
  result = a + b;
  return result;
}
// console.log(result);
console.log(addNumber(5, 7));

// let age = 30;
// age = 29;
// if (age > 20) {
//   let isOld = true; // not allowed outside of block scope
//   var isRealyOld = true; // allowed to access outside of block scope, var only knows global and function scope
// }
// console.log(isOld);
// console.log(isRealyOld);

const add = (x: number, y: number = 1) => x + y;

const printOut = (output: number | string) => console.log(output);

printOut(add(6, 8));
printOut(add(10));

const hobbies = ["Sports", "Cooking"];
const activeHabbies = ["Hiking", "Reading"];
// const activeHabbies = ["Hiking", ...hobbies];

activeHabbies.push(...hobbies);
console.log(activeHabbies);

const person = {
  firstName: "Jack",
  age: 37,
};

const copiedPerson = { ...person, gender: "M" };
console.log(copiedPerson);

const addMultiNumbers = (...allNumbers: number[]) => {
  return allNumbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = addMultiNumbers(5, 10, 20, 30, 3.5, 4);
console.log("result of add multiple numbers --> " + addedNumbers);

// array destructring
const [hobby1, hobby2, ...remainingHobbies] = activeHabbies;
console.log("hobby1 -> " + hobby1);
console.log("hobby2 -> " + hobby2);
console.log("remainingHobbies -> " + remainingHobbies);

const { firstName: userName, age } = person;
console.log(userName, age, person);
