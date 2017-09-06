//暴力穷举法，时间复杂度O(n^2)  空间复杂度O(1)

const arrs=[2,7,11,15],target=9;

const twoSum=function(arrs,target){
    for(let i=0;i<arrs.length;i++){
        for(let j=i+1;j<arrs.length;j++){
            if(arrs[i]+arrs[j]===target){
                return [i,j];
            }else{
                console.log('No two sum solution');
            }
        }
    }
}

console.log(twoSum(arrs,target));