let str="}}}";
let n=str.length;
let stack=[];
// use stack, 
function getMinimumBracketCount(){
    let i=0;
    let count=0;
    for(i=0;i<n;i++){
        if(str[i]==='{'){
            stack.push('{');
        }
        else{
            stack.pop();
        }
    }
    return stack.length/2;
}

console.log(getMinimumBracketCount());