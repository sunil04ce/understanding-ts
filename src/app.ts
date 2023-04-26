// function Logger(constructor: Function) {
//   console.log("Logging...");
//   console.log(constructor);
// }

function Logger(logstring: string) {
  console.log("Logger factory");
  return function (constructor: Function) {
    console.log(logstring);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log("Template factory");
  return function (constructor: any) {
    console.log("rendering template...");
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

@Logger("LOGGIN - Person2")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person2 {
  name = "Jack";

  constructor() {
    console.log("Creating person object...");
  }
}

const pers = new Person2();
console.log(pers);
