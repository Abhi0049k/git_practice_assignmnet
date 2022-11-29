let n = 32;
let flag = true;
for(let i = 2;i<n;i++){
    if(n%i===0){
        flag = false;
    }
}
if(flag){
    console.log("Prime Number");
}else{
    console.log("Not a Prime Number");
}