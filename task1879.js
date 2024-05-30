const flattenObject= (newObj) =>{
    for(let key in newObj){
        if(newObj.hasOwnProperty(key)){
            let firstObj="";
            if(typeof newObj[key] === "object"){
                
                flattenObject(newObj[key]);
                

            }else{
                console.log(firstObj+key+ ": "+ newObj[key]);
            }
        }
    }
}
const obj={
    "keyOne": "value One",
    "keyTwo": "value Two",
    "keyThree": "value Three",
    "keyFour": {
        "keyA": true,
        "keyB": false,
        "keyC":{
            "keyCOne": "key C one value",
            "keyCTwo": "key C two value",
            "keyCThree": 1234,
        }
    }
}
const newObj={...obj};

flattenObject(newObj);