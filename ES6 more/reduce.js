const numbers=[12,4,8,9,77,30,41];
let sum=0;
for(let num of numbers){
    sum=sum+num;
}
console.log(sum);
const total=numbers.reduce((acc,num)=> acc+num,0);
console.log(total);

/* What is reduce()?

reduce() array method যা array কে single value এ compress করে।

Commonly use হয় sum, product, max, min বা অন্য কোনো aggregated result বের করতে। 

accumulator → আগের result (carry)
currentValue → current element
initialValue → প্রথম value (optional, যদি না দাও তাহলে first element use হবে)
*/
const products = [
 {name:'laptop', price:20000},
 {name:'tv', price:25000},
 {name:'charger', price:3000}
];
const totalPrice=products.reduce((acc,pd)=>acc+pd.price,0);
console.log(totalPrice);
