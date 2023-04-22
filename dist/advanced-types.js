"use strict";
var _a;
const e1 = {
    name: "Jack",
    privileges: ["create-server"],
    startDate: new Date(),
};
function printEmployeeInfo(emp) {
    console.log(emp.name);
    if ("privileges" in emp) {
        console.log("Privileges: " + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("StartDate: " + emp.startDate);
    }
}
printEmployeeInfo(e1);
class Car {
    drive() {
        console.log("Driving...");
    }
}
class Truck {
    drive() {
        console.log("Driving a truck...");
    }
    loadCargo(amount) {
        console.log("Loading cargo..." + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(500);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }
    console.log("Moving at speed : " + speed);
}
moveAnimal({ type: "bird", flyingSpeed: 10 });
const userInputElement = document.getElementById("user-input");
if (userInputElement) {
    userInputElement.value = "Hi there!!";
}
const errorBag = {
    email: "Not a valid email!",
    username: "Must start with a capital character",
};
function addTwoVariable(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = addTwoVariable(1, 10);
const result2 = addTwoVariable("Jack", "Michel");
result2.split(" ");
const fetchedUserData = {
    id: "u1",
    name: "Max",
    job: { title: "CEO", description: "My own company" },
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput = undefined;
const storedData = userInput !== null && userInput !== void 0 ? userInput : "DEFUALT";
console.log(storedData);
