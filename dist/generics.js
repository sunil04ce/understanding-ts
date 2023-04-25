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
const mergedObj = merge({ name: "Jack", hobbies: ["Sports"] }, { age: 37 });
console.log("age -> " + mergedObj.age);
function countAndDescribe(element) {
    let descriptionText = "Got no value.";
    if (element.length === 1) {
        descriptionText = "Got 1 element.";
    }
    else if (element.length > 1) {
        descriptionText = "Got " + element.length + " elements.";
    }
    return [element, descriptionText];
}
console.log(countAndDescribe(["Sports", "Cooking"]));
function extractAndConvert(obj, key) {
    return "Value :-> " + obj[key];
}
console.log(extractAndConvert({ name: "Jack" }, "name"));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const numberStorage = new DataStorage();
const textStorage = new DataStorage();
textStorage.addItem("Jack");
textStorage.addItem("Michel");
textStorage.removeItem("Jack");
console.log(textStorage.getItems());
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const nameArray = ["Jack", "Anna"];
