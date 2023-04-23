"use strict";
const names = [];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is done!");
    }, 2000);
});
promise.then((data) => {
});
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
console.log(merge({ name: "Jack" }, { age: 37 }));
