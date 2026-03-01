const number=[2,4,8,20];
// const doubled=[];
// for(let num of number){
//     doubled.push(num*2);
// }
// const doubleIT=num=>num*2;
// const doubled=number.map(doubleIT);
const doubled=number.map(num=>num*2);//we can use any of them
const squared=number.map(num=>num*num)
console.log(doubled);
console.log(squared);

const friends=['jabed','obed','kabed']
const friend=friends.map(frd=>frd[0]);
console.log(friend);

const products=[
    {name:'laptop',price:20000},
    {name:'tv',price:25000},
    {name:'charger',price:3000}
]
const product=products.map(pd=>pd.price*2);
console.log(product);
const names=products.map((pd,index,productArray)=>{
    const upperCase=pd.name.toUpperCase();
    console.log(upperCase,index,productArray);
    
    return upperCase
});
console.log(names);
/* map() → প্রতিটা element modify করে new array বানায় */
