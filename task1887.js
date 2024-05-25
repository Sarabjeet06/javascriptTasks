const generateQueryString = (obj, url) =>{
    const newObj= {...obj};
    let output=`${url}?`;
    for(const key in newObj){
        output+=` ${key} ${newObj[key]} &`;
    }
   return output;
    
}

console.log(generateQueryString({
    keyOne: "value One",
    keyTwo: "value Two",
    keyThree: "value Three",
}, "https://localhost:400"));