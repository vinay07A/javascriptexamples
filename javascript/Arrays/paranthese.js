// let str="((())())"
let str="()"

function paranthese(str){
    let stack=[];
    for(let i=0;i<str.length;i++){
        let ch = str[i];
        console.log(ch)
        switch(ch){
            case '(': stack.push(')')
                      break;
            default: 
                    let topelm = stack.pop();
                    if(ch !== topelm) return false
        }
    }
    console.log(stack.length === 0)
    return stack.length === 0;
}

paranthese(str)