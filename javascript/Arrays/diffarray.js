var array1 = ["Lorem", "ipsum", "dolor"],
    array2 = ["Lorem", "ipsum", "quick", "brown", "foo"],
    array3 = ["Jumps", "Over", "Lazy", "Lorem"],
    array4 = [1337, 420, 666, "Lorem"];


function diffarray1(array1,array2){
    const result = array1.filter(x => !array2.includes(x));
    return result;
}

function diffarrays(...arrs){
    console.log(arrs);
    let data = [...arrs]
    const result = data.reduce((a,b) => a.filter(x => b.includes(x)));
    return result;
}


let values = diffarrays('evt','index1','index2','index3','index4');
console.log(values);