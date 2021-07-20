let arr = [1,2,3,4,5,6,7,8,9,10],sum=15;

function subarray(arr,sum){
    for(let i =0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j] == sum){
                console.log(arr[i],arr[j]);
            }
        }
    }
}

subarray(arr,sum)