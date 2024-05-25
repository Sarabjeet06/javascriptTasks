const validator = (arr) => {
    // handle all edge cases... for the all types,
    // take type as prop
    return arr.every((num) => {
        // console.log((typeof (num)));
        return (typeof (num))==="number";
    })
}

const calculator = ([...arr], operation) => {
    if (validator(arr)) {
        switch (operation) {
            case "add":
                return arr.reduce((prevValue, currValue) => prevValue + currValue);
            case "substract":
                return arr.reduce((prevValue, currValue) => prevValue - currValue);
            case "divide":
                return arr.reduce((prevValue, currValue) => prevValue / currValue);
            case "multiply":
                return arr.reduce((prevValue, currValue) => prevValue * currValue);
        }
    }
    else{
        return "Enter numbers only";
    }
}


console.log(calculator([1, 2, 3], "add"));
console.log(calculator([1, 2, "3", 4], "substract"));
console.log(calculator([1, 2, 4], "substract"));
console.log(calculator([1, 2, 3], "divide"));
console.log(calculator([1, 2, 3], "multiply"));
