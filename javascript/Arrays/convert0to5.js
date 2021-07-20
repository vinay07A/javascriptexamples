function convertFive(num)
{
    // code here
    let finVal=[]
    console.log(num)
    let nums = num.toString();
    console.log(nums.length);
    for(let i=0;i<nums.length;i++){
        if(nums[i] == 0){
            finVal.push(5)
        }else{
            finVal.push(nums[i])
        }
    }
    console.log(Number(finVal.join('')))
}


convertFive(1004);