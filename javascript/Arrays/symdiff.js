var array1 = ["Lorem", "ipsum", "dolor"],
    array2 = ["Lorem", "ipsum", "quick", "brown", "foo"],
    array3 = ["Jumps", "Over", "Lazy", "Lorem"],
    array4 = [1337, 420, 666, "Lorem"];


function symdiff(array1,array2){
    const result = array1.filter(x => !array2.includes(x)).concat(array2.filter(x => !array1.includes(x)));
    return result;
}


let values = symdiff(array1,array2);
console.log(values);