"use strict";
const add = (n1, n2) => {
    return n1 + n2;
};
function printResult(num) {
    console.log("Result : " + num);
}
printResult(add(4, 5));
console.log(printResult(add(4, 8)));
let combineValues;
combineValues = add;
// combineValues = printResult;
// combineValues = 5;
console.log(combineValues(4, 4));
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, printResult);
addAndHandle(5, 6, (result) => {
    console.log("my result " + result);
});
