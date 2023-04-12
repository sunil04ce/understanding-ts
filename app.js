var combine = function (input1, input2, resultConversion) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
};
console.log(combine(50, 47, "as-number"));
console.log(combine("50", "40", "as-number"));
console.log(combine("Jack", "Sparro", "as-text"));
