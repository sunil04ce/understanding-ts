"use strict";
console.log("app.js ");
function addNumber(a, b) {
    let result;
    result = a + b;
    return result;
}
console.log(addNumber(5, 7));
const add = (x, y = 1) => x + y;
const printOut = (output) => console.log(output);
printOut(add(6, 8));
printOut(add(10));
const hobbies = ["Sports", "Cooking"];
const activeHabbies = ["Hiking", "Reading"];
activeHabbies.push(...hobbies);
console.log(activeHabbies);
const person = {
    firstName: "Jack",
    age: 37,
};
const copiedPerson = Object.assign(Object.assign({}, person), { gender: "M" });
console.log(copiedPerson);
const addMultiNumbers = (...allNumbers) => {
    return allNumbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers = addMultiNumbers(5, 10, 20, 30, 3.5, 4);
console.log("result of add multiple numbers --> " + addedNumbers);
const [hobby1, hobby2, ...remainingHobbies] = activeHabbies;
console.log("hobby1 -> " + hobby1);
console.log("hobby2 -> " + hobby2);
console.log("remainingHobbies -> " + remainingHobbies);
const { firstName: userName, age } = person;
console.log(userName, age, person);
