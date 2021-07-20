let arr = [2,4,1,3,5]
let n = 5;

function thirdLargest(arr,n){
    let sortedArray = arr.sort((a,b) => {return a-b})
    let sortArr = new Set(arr)
    console.log([...sortArr][2],sortedArray[2]);
}

thirdLargest(arr,n)