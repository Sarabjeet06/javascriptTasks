const getValue = (value1, value2, operation) => {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return -1;
    }
}

const getPrecedence = (operation) => {
    if (operation === '*' || operation === '/') {
        return 2;
    }
    else if (operation === '+' || operation == '-') {
        return 1;
    }
    return 0;
}

const calculateExpression = (expression) => {
    let operations = [];
    let values = [];
    const n = expression.length;
    for (let i = 0; i < n; i++) {
        if (expression === ' ') {
            continue;
        }
        else if (expression[i] === '(' || expression[i] === '[' ||expression[i]==='{') {
            operations.push(expression[i]);
        }
        else if (expression[i] >= '0' && expression[i] <= '9') {
            let value = 0;
            while (i < n && expression[i] >= '0' && expression[i] <= '9') {
                //console.log(expression[i]-'0');
                value = value + expression[i]-'0';
                // console.log(typeof value);
                i++;
            }
            values.push(value);
            //console.log(value);
            //as the pointer is moving ahead by one so decrementing
            i--;
        }
        
        else if (expression[i] === ')' || expression[i] === ']' ||expression[i]==='}') {
            //console.log("This is length",operations.length);
            while (operations.length > 0 && operations[operations.length - 1] != '(' ) {
                //console.log("yes22");
                let value2 = values[values.length - 1];
                values.pop();
                let value1 = values[values.length - 1];
                values.pop();
                //console.log(values);
                let operation = operations[operations.length - 1]
                let calculatedValue = getValue(value1, value2, operation);
                values.push(calculatedValue);
                operations.pop();
            }
            //poping the open bracket
            if (operations.length > 0) operations.pop();
        }
        else {
            while (operations.length > 0 && getPrecedence(operations[operations.length - 1]) >= getPrecedence(expression[i])) {
                let value2 = values[values.length - 1];
                values.pop();
                let value1 = values[values.length - 1];
                values.pop();
                let operation = operations[operations.length - 1];
                let calculatedValue = getValue(value1, value2, operation);
                values.push(calculatedValue);
                operations.pop();
            }
            operations.push(expression[i]);
        }
    }
    while (operations.length > 0) {
        let value2 = values[values.length - 1];
        values.pop();
        let value1 = values[values.length - 1];
        values.pop();
        let operation = operations[operations.length - 1]
        let calculatedValue = getValue(value1, value2, operation);
        values.push(calculatedValue);
        operations.pop();
    }
    // console.log(values);
    return values[values.length-1];
}


console.log(calculateExpression("1+(2+3)*4-10/2"));