const calculatorWithArgumments = (values, operation) => {
    switch (operation) {
        case "addition":
            return values.reduce((prevValue, currValue) => prevValue + currValue);
        case "substraction":
            return values.reduce((prevValue, currValue) => prevValue - currValue);
        case "division":
            return values.reduce((prevValue, currValue) => prevValue / currValue);
        case "multiplication":
            return values.reduce((prevValue, currValue) => prevValue * currValue);
        default:
            return "Please enter a operation from addition, substraction, division and multiplication";
    }
}

console.log("The result of the calucation is: ", calculatorWithArgumments([1, 2, 3], "addition"));
console.log("The result of the calucation is: ", calculatorWithArgumments([3, 7, 6], "substraction"));
console.log("The result of the calucation is: ", calculatorWithArgumments([2, 2, 3], "multiplication"));
console.log("The result of the calucation is: ", calculatorWithArgumments([22, 2, 1], "division"));
console.log("The result of the calucation is: ", calculatorWithArgumments([5, 6, 3], "abc"));