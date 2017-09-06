


//利用js对象的属性名唯一来实现，类似于其它语言中的hashMap结构
//时间复杂度为O(n);
const arrs=[2,3,4,5,6,7,11,15],target=9;

// const solution=[];

const twoSum=function(arrs,target){
    const exist={};
    for(let i=0;i<arrs.length;i++){
        if(exist[target-arrs[i]]!==undefined){
            return [exist[target-arrs[i]],i];
            // solution.push([exist[target-arrs[i]],i]);
            // console.log(solution);
        }else{
            exist[arrs[i]]=i;
        }
    }
    // console.log(exist);
}
console.log(twoSum(arrs,target))
// console.log(solution);