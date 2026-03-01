const numbers = [1, 2, 3];
numbers.forEach(num=>{
    console.log(num*2);
    
});
const products = [
  {name:'Laptop', price:20000},
  {name:'Tv', price:25000},
  {name:'Charger', price:3000}
];
products.forEach(pd=>{
    console.log(pd.name.toLowerCase());    
});
/* forEach() array-এর প্রতিটা element-এর উপর loop চালায়
কিন্তু কোনো new array return করে না। */
