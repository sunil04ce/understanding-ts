const names: Array<string> = [];

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done!");
  }, 2000);
});

promise.then((data) => {
  // data.split(' ')
});

function merge<T, U>(objA: T, objB: U) {
  //return Object.assign(objA, objB);
}

const mergedObj = merge<{ name: string; hobbies: string[] }, { age: number }>(
  { name: "Jack", hobbies: ["Sports"] },
  { age: 37 }
);
//console.log("age -> " + mergedObj.age);
