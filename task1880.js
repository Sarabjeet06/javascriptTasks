const basicCalculator= (operation, a,b)=>{
    switch(operation){
        case "add": return a+b;
        case "substract": return a-b;
        case "multiply": return a*b;
        case "divide": return a/b;
        case "modulus": return a%b;
        default: return "Enter a valid operation"
    }
}

console.log(basicCalculator("add",1,2));
console.log(basicCalculator("substract",112,23));
console.log(basicCalculator("divide",12,2));
console.log(basicCalculator("multiply",1282,566));
console.log(basicCalculator("modulus",2,2));