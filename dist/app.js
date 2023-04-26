"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(logstring) {
    console.log("Logger factory");
    return function (constructor) {
        console.log(logstring);
        console.log(constructor);
    };
}
function WithTemplate(template, hookId) {
    console.log("Template factory");
    return function (constructor) {
        console.log("rendering template...");
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector("h1").textContent = p.name;
        }
    };
}
let Person2 = class Person2 {
    constructor() {
        this.name = "Jack";
        console.log("Creating person object...");
    }
};
Person2 = __decorate([
    Logger("LOGGIN - Person2"),
    WithTemplate("<h1>My Person Object</h1>", "app")
], Person2);
const pers = new Person2();
console.log(pers);
