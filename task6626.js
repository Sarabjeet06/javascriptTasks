const arr=[-1,9,8,-3,4];
let n=arr.length;
let requiredSum=5;
const dp=new Map([["12121",1]]);

//console.log(dp);

function getCountOfSum(i,sum){
    // if the sum comes out to be same as requiredSum then 1 possible way is found.
    
    if(sum==requiredSum) return 1;

    if(i==n) return 0;

    let takeWithPositive=0,takeWithNegative=0,notTake=0;
    if(dp.get(`${i}+${sum}`)!=='undefined') return dp.get(`${i}+${sum}`);

    //taking the number with positive sign

    takeWithPositive=getCountOfSum(i+1,sum+arr[i]);

    //taking the number with negative sign

    takeWithNegative=getCountOfSum(i+1,sum-arr[i]);

    //not taking a number

    notTake=getCountOfSum(i+1,sum);

    //adding all the possibilities

    // implement dp 
    // console.log(takeWithPositive+takeWithNegative+notTake);
    dp.set(`${i}+${sum}`,takeWithPositive+takeWithNegative+notTake);
    return takeWithPositive+takeWithNegative+notTake;

}

console.log(getCountOfSum(0,0));
console.log(dp);