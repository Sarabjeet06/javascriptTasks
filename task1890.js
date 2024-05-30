const validator = (arr ,type, operation) => {
    // handle all edge cases... for the all types,
    // take type as prop
    if(operation==="divide"){
        arr.every((num)=>{
            return num===0;
        })
    }
    return arr.every((num) => {
        // console.log((typeof (num)));
        return (typeof (num))===type;
    })
}

const calculator = ([...arr], operation) => {
    if (validator(arr,"number" ,operation)) {
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
        if(operation==="divide"){
            return "cannot multiply by zero";
        }
        return "Enter numbers only";
    }
}


console.log(calculator([1, 2, 3], "add"));
console.log(calculator([1, 2, "3", 4], "substract"));
console.log(calculator([1, 2, 4], "substract"));
console.log(calculator([1, 2, 3, 0 , 1], "divide"));
console.log(calculator([1, 2, 3], "multiply"));
