"use strict";
console.log("TS code goes here..");
const add = (n1, n2, showResult, phrase) => {
    //   if (typeof n1 !== "number" || typeof n2 !== "number") {
    //     throw new Error("Innocent input!");
    //   }
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
};
let number1;
number1 = 4;
const number2 = 2.4;
const printResult = true;
let resultPhrase = "Result is : ";
const result = add(number1, number2, printResult, resultPhrase);
// console.log(result);
