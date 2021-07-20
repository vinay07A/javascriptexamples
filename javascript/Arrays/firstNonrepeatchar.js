let str='hello'

function firstNonRepeat(str){
    let char={};
    for(let i=0;i<str.length;i++){
        if(!char[str[i]]){
            char[str[i]]=1;
        }else{
            char[str[i]]++;
        }
    }

    for(var j in char){
        if(char[j] == 1){
            return j;
        }
    }
}

console.log(firstNonRepeat(str))