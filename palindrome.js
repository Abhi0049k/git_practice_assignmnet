let st = 'racecar';
let start = 0;
let end = st.length;
let flag = true;
while(start<=end){
    if(st[start]===st[end]){
        start++;
        end--;
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