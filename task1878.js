const source = [
    {
        "batch_id": "123",
        "name": "Tony",
        "contact": "9872276210"
    },
    {
        "batch_id": "231",
        "name": "Steve",
        "contact": "7876543210"
    },
    {
        "batch_id": "123",
        "name": "Bruce",
        "contact": "6776543210"
    },
    {
        "batch_id": "321",
        "name": "Clint",
        "contact": "8954643210"
    },
    {
        "batch_id": "123",
        "name": "Peter",
        "contact": "7666543210"
    },
    {
        "batch_id": "231",
        "name": "Phil",
        "contact": "8896543210"
    },
    {
        "batch_id": "321",
        "name": "Nick",
        "contact": "9876521210"
    }
];

let result=[];

const convertSource  = (source) =>{
    const result= source.reduce((acc,prevValue)=>{
        const {batch_id,...remainingData}=prevValue;
        let isObjPresent=false;
        let index;
        acc.forEach((element,i)=>{
           
            if(element[batch_id]!==undefined){
                isObjPresent=true;
                index=i;
            }
        })
        console.log(isObjPresent);
        if(!isObjPresent){
            let newObj={};
            newObj[batch_id]=[];
            const objToObj={...remainingData};
            newObj[batch_id].push(objToObj);
            acc.push(newObj);
        } else{
            console.log("yes");
            const objToObj={...remainingData};
            
            acc[index][batch_id].push(objToObj);
        }
        return acc;
    },[]);
    console.log(JSON.stringify(result, null ,2));
}

convertSource(source);