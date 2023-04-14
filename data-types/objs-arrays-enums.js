"use strict";
// const person: {
//   name: string;
//   age: number;
// } = {
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "ADMIN";
    UserRole[UserRole["READ_ONLY"] = 10] = "READ_ONLY";
    UserRole[UserRole["STUDENT"] = 200] = "STUDENT";
    UserRole["AUTHOR"] = "AUTHOR";
})(UserRole || (UserRole = {}));
const person = {
    name: "Jack",
    age: 37,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"],
    userRole: UserRole.ADMIN,
};
person.role.push("admin");
// person.role[1] = 10;
// person.role = [0, 'admin', 'user'];
let favoriteActivities;
favoriteActivities = ["Sports"];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map());
}
if (person.userRole === UserRole.ADMIN) {
    console.log("UserRole is admin");
}
