import { ProjectInput } from "./components/project-input";
import { ProjectList } from "./components/project-list";
import _ from "lodash";
import { Product2 } from "./product.model";
import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";

new ProjectInput();
new ProjectList("active");
new ProjectList("finished");

console.log(_.shuffle([1, 2, 3]));

const products = [
  { title: "A book", price: 10.99 },
  { title: "A carpet", price: 29.99 },
];

const loadedProducts = plainToClass(Product2, products);
for (const product of loadedProducts) {
  console.log(product.getInformation());
}

const newProd = new Product2("", -10);
validate(newProd).then((errors) => {
  if (errors.length > 0) {
    console.log("VALIDATION ERRORS!");
    console.log(errors);
  } else {
    console.log(newProd.getInformation());
  }
});
