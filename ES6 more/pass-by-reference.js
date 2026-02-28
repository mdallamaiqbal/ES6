//non primitive value can change
function firstSum(arr1,arr2){
    arr1[0]=100;
    arr2[0]=200;
    const first=arr1[0];
    const second=arr2[0];
    return first+second;
}
const num1=[1,2,3];
const num2=[4,5,6];
console.log("before the array",num1,num2 );
const result=firstSum(num1,num2);
console.log('after the array' ,num1,num2);

/* What is the difference between parameter and argument?
Answer:
Parameter → function-এর ভিতরের variable
Argument → function call করার সময় পাঠানো actual value */