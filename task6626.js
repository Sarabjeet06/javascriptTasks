const arr=[-1,9,8,-3,4];
let n=arr.length;
let requiredSum=5;
const dp= Array.from({length: n},()=> new Array(requiredSum).fill(-1));



function getCountOfSum(i,sum){
    // if the sum comes out to be same as requiredSum then 1 possible way is found.
    
    if(sum==requiredSum) return 1;

    if(i==n) return 0;

    let takeWithPositive,takeWithNegative=0,notTake=0;
    if(dp[i][sum]!==-1) return dp[i][sum];
   
    //taking the number with positive sign

    takeWithPositive=getCountOfSum(i+1,sum+arr[i]);

    //taking the number with negative sign

    takeWithNegative=getCountOfSum(i+1,sum-arr[i]);

    //not taking a number

    notTake=getCountOfSum(i+1,sum);

    //adding all the possibilities

    // implement dp 
    return dp[i][sum]=takeWithPositive+takeWithNegative+notTake;
}
console.log(dp);
console.log(getCountOfSum(0,0));











