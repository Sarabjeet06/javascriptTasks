const isNegative = (a, b) => {
    if (b !== undefined) {
        return a < 0 || b < 0;
    } else {
        return a < 0;
    }
}

const calculatePower = (a, b) => {
    return a ** b;
}

const CalculateSquareRoot = (a) => {
    if (!isNegative(a)) return Math.sqrt(a);
    return "Enter a positive number to calucalate square root";
}

const calculateLog = (a) => {
    if (!isNegative(a)) return Math.log(a);
    return "Enter a positive number to calucalate log value";
}

const calculateNaturalLog = (a) => {
    return Math.LN2;
}

const calculateSinValue = (a) => {
    if (!isNegative(a)) return Math.sin(a);
    return "Enter a positive number to calucalate sin value";
}

const calculateCosValue = (a) => {
    if (!isNegative(a)) return Math.cos(a);
    return "Enter a positive number to calucalate cos value";
}

const calculateTanValue = (a) => {
    if (!isNegative(a)) return Math.tan(a);
    return "Enter a positive number to calucalate tan value";
}

const calculateCircleArea = (a) => {
    if (!isNegative(a)) return Math.PI * calculatePower(a, 2);
    return "Enter a positive radius value to calucalate area of circle";
}

const advanceCalculator = (operation, a, b) => {

    // console.log(arguments.length);
    switch (operation) {
        case "square":
            return calculatePower(a, 2);
        case "sqrt":
            return CalculateSquareRoot(a);
        case "log":
            return calculateLog(a);
        case "ln":
            return calculateNaturalLog(a);
        case "sin":
            return calculateSinValue(a);
        case "cos":
            return calculateCosValue(a);
        case "tan":
            return calculateTanValue(a);
        case "power":
            return calculatePower(a, b);
        case "area of circle":
            return calculateCircleArea(a);
        default:
            return "Enter a valid operation";
    }
}

console.log("The square of the number is: ", advanceCalculator("square", 15));
console.log("The square root of the number is: ", advanceCalculator("sqrt", 333));
console.log("The log of the number is: ", advanceCalculator("log", 15));
console.log("The natural log is: ", advanceCalculator("ln"));
console.log("The sin value of the number is: ", advanceCalculator("sin", 30));
console.log("The cos value of the number is: ", advanceCalculator("cos", 15));
console.log("The tan value of the number is: ", advanceCalculator("tan", 45));
console.log("The x to the power of y is: ", advanceCalculator("power", 15, 16));
console.log("The area of the circle is: ", advanceCalculator("area of circle", 15));