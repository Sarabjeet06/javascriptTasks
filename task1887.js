const generateQueryString = (obj, url) => {
    const newObj = { ...obj };
    let output = `${url}?`;
    Object.keys(newObj).forEach((key,index)=>{output+=`${key} ${newObj[key]} &`})
    // for (const key in newObj) {
    //     output += ` ${key} ${newObj[key]} &`;

    //     /// single line
    // }
    return output;

}

console.log(generateQueryString({
    keyOne: "value One",
    keyTwo: "value Two",
    keyThree: "value Three",
}, "https://localhost:400"));