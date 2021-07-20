let n  = 5
let a  = [2,3,1,2,3]


function duplicates(a,n){
    let uniqueArr = a.filter((x,index) => a.indexOf(x) === index);
    console.log(uniqueArr);
}

function duparr(a,n){
    let unique=[];
    for(var i in a){
        if(!unique.includes(a[i])){
            unique.push(a[i])
        }
    }
    console.log(unique);
}

duparr(a,n)