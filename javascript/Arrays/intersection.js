var array1 = ["Lorem", "ipsum", "dolor"],
    array2 = ["Lorem", "ipsum", "quick", "brown", "foo"],
    array3 = ["Jumps", "Over", "Lazy", "Lorem"],
    array4 = [1337, 420, 666, "Lorem"];


function threearrayInter(array1,array2,array3,array4){
    data = [array1, array2, array3, array4],
    result = data.reduce((a, b) => a.filter(c => b.includes(c)));
    return result;
}

function arrayinter(...arrs){
    let data = [...arrs];
    result = data.reduce((a,b)=> a.filter(x => b.includes(x)));
    return result;
}


// const values = threearrayInter(array1,array2,array3,array4);
const values = arrayinter(array1,array2,array3,array4);

console.log(values);
   