// const person: {
//   name: string;
//   age: number;
// } = {

enum UserRole {
  ADMIN = "ADMIN",
  READ_ONLY = 10,
  STUDENT = 200,
  AUTHOR = "AUTHOR",
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
  userRole: UserRole;
} = {
  name: "Jack",
  age: 37,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
  userRole: UserRole.ADMIN,
};

person.role.push("admin");
// person.role[1] = 10;
// person.role = [0, 'admin', 'user'];

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map());
}

if (person.userRole === UserRole.ADMIN) {
  console.log("UserRole is admin");
}
