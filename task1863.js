class Calculator {
    
    constructor(operation, [...values]) {
        this.operation = operation;
        this.values = values;
    }

    performCalculation() {
        switch (this.operation) {
            case "add":
                return this.values.reduce((prevValue, currValue) => prevValue + currValue);
            case "substract":
                return this.values.reduce((prevValue, currValue) => prevValue - currValue);
            case "divide":
                return this.values.reduce((prevValue, currValue) => prevValue / currValue);
            case "multiply":
                return this.values.reduce((prevValue, currValue) => prevValue * currValue);
            default:
                return "Enter a valid operation";
        }
    }
}

const calc1 = new Calculator("add", [1, 2, 3, 4]);
console.log("The result is: ", calc1.performCalculation());

const calc2 = new Calculator("multiply", [1, 2, 3, 4]);
console.log("The result is: ", calc2.performCalculation());

const calc3 = new Calculator("substract", [1, 2, 3, 4]);
console.log("The result is: ", calc3.performCalculation());

const calc4 = new Calculator("divide", [1, 2, 3, 4]);
console.log("The result is: ", calc4.performCalculation());

const calc5 = new Calculator("abc", [1, 2, 3, 4]);
console.log("The result is: ", calc5.performCalculation());
