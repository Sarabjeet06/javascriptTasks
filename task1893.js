const validator = (arr) => {
    // handle all edge cases... for the all types,
    // take type as prop
    return arr.every((num) => {
        // console.log((typeof (num)));
        return (typeof (num))==="number";
    })
}

const calculator = (num1,num2, operation) => {
    if (validator(arr)) {
        switch (operation) {
            case "add":
                return  num1 + num2;
            case "substract":
                return num1-num2;
            case "divide":
                return num1/num2;
            case "multiply":
                return num1*num2;
        }
    }
    else{
        return "Enter numbers only";
    }
}


console.log(calculator(1,2, "add"));
console.log(calculator(3,"4", "substract"));
console.log(calculator(1, 2, "substract"));
console.log(calculator(1, 2, "divide"));
console.log(calculator(1, 2, "multiply"));
