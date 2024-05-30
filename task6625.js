let str="}}}}}}";
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
        else if(stack.length>0){
            stack.pop();
        }
    }
    if(stack.length==0){
        for(i=0;i<n;i++){
            if(str[i]==='}'){
                stack.push('}');
            }
            else if(stack.length>0){
                stack.pop();
            }
        }
    }
    if(stack.length%2==0) return stack.length/2;
    return -1;
}

console.log(getMinimumBracketCount());