var nums = [];

for(var i=0;i<100;++i){
       nums[i] = i+1;
    }
console.log(nums);
var samenums = nums;
console.log(nums[0]);
console.log(samenums[0]);
nums[0] = 400;
console.log(samenums[0]);
var a = [1,2,3,3,5,5,6,6,66,6];
console.log(a.indexOf(99));
