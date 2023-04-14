"use strict";
// "unknown" type
let userInput;
let userName;
userInput = 5;
userInput = "Jack";
if (typeof userInput === "string") {
    userName = userInput;
}
// userName = userInput;
// 'never' type
function generateError(message, code) {
    throw { message: message, errorCode: code };
    //   while(true) {}
}
generateError("An error occured!", 500);
// const result = generateError("An error occured!", 500);
// console.log(result);
