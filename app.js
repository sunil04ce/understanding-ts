console.log("TS code goes here..");
var add = function (n1, n2, showResult, phrase) {
    //   if (typeof n1 !== "number" || typeof n2 !== "number") {
    //     throw new Error("Innocent input!");
    //   }
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
};
var number1 = 4;
var number2 = 2.4;
var printResult = true;
var resultPhrase = "Result is : ";
var result = add(number1, number2, printResult, resultPhrase);
// console.log(result);
