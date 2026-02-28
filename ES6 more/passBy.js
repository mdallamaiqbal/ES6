//primitive value can't change
function multiply(a,b){
    a=a-5;
    b=b-5;
    console.log(a,b);
    return a*b;
}
let x=20;
let y=10;
console.log('before calling',x,y);
const result = multiply(x,y);
console.log(result);
console.log('after calling',x,y);