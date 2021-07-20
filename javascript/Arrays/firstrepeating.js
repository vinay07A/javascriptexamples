let arr = [1, 5, 3, 4, 3, 5, 6]

function firstrepeating(arr){
    let arrVal={};
    for(let i=0;i<arr.length;i++){
        if(!arrVal[arr[i]]){
            arrVal[arr[i]] = i;
        }else{
            return arr[i];
            // return arrVal[arr[i]];
        }
    }
}

console.log(firstrepeating(arr))