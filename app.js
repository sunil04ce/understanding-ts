// const person: {
//   name: string;
//   age: number;
// } = {
var UserRole;
(function (UserRole) {
    UserRole[UserRole["ADMIN"] = 0] = "ADMIN";
    UserRole[UserRole["READ_ONLY"] = 1] = "READ_ONLY";
    UserRole[UserRole["STUDENT"] = 2] = "STUDENT";
})(UserRole || (UserRole = {}));
var person = {
    name: "Jack",
    age: 37,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"],
    userRole: UserRole.ADMIN,
};
person.role.push("admin");
// person.role[1] = 10;
// person.role = [0, 'admin', 'user'];
var favoriteActivities;
favoriteActivities = ["Sports"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map());
}
if (person.userRole === UserRole.ADMIN) {
    console.log("UserRole is admin");
}
