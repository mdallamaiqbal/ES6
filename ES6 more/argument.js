function add(num1,num2){
    console.log('arguments:',arguments,arguments[2]);
    // const args=Array.from(arguments);
    const args=[...arguments]//we can use each of them
    console.log('args:',args);
    
    return num1+num2;    
}
const result=add(2,5,6,45);
console.log('return value:',result);
/* What is the arguments object in JavaScript? Explain with an example.

Answer (Simple & Perfect):

arguments is a special array-like object available inside regular functions.

It stores all arguments passed to the function, regardless of the number of parameters.

Note: It is not a real array, so array methods like map or filter cannot be used directly.

Example:

function add(a, b){
    console.log(arguments);
    console.log(arguments[2]);
}

add(2,5,6); 

Extra Notes for Interview:

Does the arguments object work in arrow functions?

Answer:

No, arrow functions do not have arguments.

Use rest parameter (...args) instead.
const add = (...args) => console.log(args);
add(2,5,6); // [2,5,6] 

How can you convert arguments into a real array?
Answer:
 const args=Array.from(arguments);
 const args=[...arguments];
 we can use each of them;
*/