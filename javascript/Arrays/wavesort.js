let arr = [1,2,3,4,5]
let n = 5;

function waveSort(arr,n){
    // arr.sort((a, b) => a - b);
    for(let i=0;i<arr.length;i++){
        if(arr[i] > arr[i+1]){
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp
        }
    }
    console.log("sortedArray-->",arr)
    for(let i=0;i<n-1;i+=2){
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp
    }
    console.log(arr)
}

waveSort(arr,n)