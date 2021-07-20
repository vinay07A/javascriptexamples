let arr = [0, -1, 2, -3, 1];

function tripltes(arr){
    let found=false;
    for(var i=0;i<arr.length-2;i++){
        for(let j=i+1;j<arr.length-1;j++){
            for(let k=j+1;k<arr.length;k++){
                if(arr[i] + arr[j] + arr[k] == 0){
                    found=true;
                    return found
                }
            }
        }
    }
    return found
}


console.log(tripltes(arr))
