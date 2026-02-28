function outerFunction(){
    function innerFunction(){
        console.log('this is the inner function');
    }
    return innerFunction;
}
const result = outerFunction();
result();
console.log('in the outside', result);

function counter(owner){
    let count =0;
    function increment(){
        count = count +1;
        console.log('value of owner',owner,count);
    }
    return increment;
}
const count1=counter('rahim');
count1();
count1();
count1();
const count2=counter('karim');
count2();
count2();
count1();


// count1();
// count1();
// count1();