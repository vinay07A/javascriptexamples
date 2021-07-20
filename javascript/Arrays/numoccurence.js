let arr = [1,1,2,2,3]

function numoccurence(arr){
    let charVal={};
    let max='';
    for(let i=0;i<arr.length;i++){
        if(!charVal[arr[i]]){
            charVal[arr[i]]=1
        }else{
            charVal[arr[i]]++;
        }
    }
    for(var j in charVal){
        if(max == '' || charVal[j] > max){
            max=j
        }
    }
    console.log(max);
}

numoccurence(arr)