"use strict";
let addFn;
addFn = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(n) {
        this.age = 30;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(`${phrase} ${this.name}`);
        }
        else {
            console.log("Hi!");
        }
    }
}
let user1;
user1 = new Person("Jack");
user1.greet("Hi there - I am");
let user2 = new Person();
user2.greet("Hi there - ");
