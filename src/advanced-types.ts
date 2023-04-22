type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Jack",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

type UnkownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnkownEmployee) {
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

  loadCargo(amount: number) {
    console.log("Loading cargo..." + amount);
  }
}

type Vehical = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehical) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(500);
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
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

// const userInputElement = document.getElementById(
//   "user-input"
// ) as HTMLInputElement;

const userInputElement = document.getElementById("user-input");
if (userInputElement) {
  (userInputElement as HTMLInputElement).value = "Hi there!!";
}

interface ErrorContainer {
  // { email : 'Not a valid email', username: 'Must start with character'}
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email!",
  username: "Must start with a capital character",
};

function addTwoVariable(a: number, b: number): number;
function addTwoVariable(a: string, b: string): string;
function addTwoVariable(a: string, b: number): string;
function addTwoVariable(a: number, b: string): string;
function addTwoVariable(a: Combinable, b: Combinable) {
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

console.log(fetchedUserData?.job?.title);
const userInput = undefined;
const storedData = userInput ?? "DEFUALT";
console.log(storedData);
