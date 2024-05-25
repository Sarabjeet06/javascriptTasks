

// wrong method, use manually...

// manual method here ...
//did using recursion
const getDeepCopy = (obj1) => {
    //checking the object here 
    if(typeof obj1 !=="object"){
        return obj1;
    }
    let obj2={}; 
    for(key in obj1){
        const value=obj1[key];
        obj2[key]=getDeepCopy(value);
    }
    return obj2;
}

const obj1={
    name: "abc",
    class: 1,
    age: 20,
    address: {
        addressLine1: "abc",
        addressLine2: "dcbe",
        area:{
            near: "abcs",
            code: 123,
        }
    }
}

console.log(getDeepCopy(obj1));
