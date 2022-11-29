let st = 'racecar';
let s = 0;
let e = st.length;
let flag = true;
while(s<=e){
    if(st[s]===st[e]){
        s++;
        e--;
    }
    else{
        flag = false;
        break;
    }
}
if(flag){
    console.log("Palindrome");
}else{
    console.log("Not a Palindrome");
}