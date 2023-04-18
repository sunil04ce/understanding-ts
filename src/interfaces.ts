interface AddFn {
  (a: number, b: number): number;
}

let addFn: AddFn;
addFn = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 30;
  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string): void {
    if (this.name) {
      console.log(`${phrase} ${this.name}`);
    } else {
      console.log("Hi!");
    }
  }
}

let user1: Greetable;
user1 = new Person("Jack");
// user1.name = 'Mike';

user1.greet("Hi there - I am");

let user2 = new Person();
user2.greet("Hi there - ");
