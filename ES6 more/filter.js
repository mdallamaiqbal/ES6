const numbers=[12,4,8,9,77,30,41];
const evenNum=numbers.filter(num=>num%2===0);
console.log(evenNum);
const friends=['nabed','obed','kaled','nahid','nasib','obal'];
const Nfriend=friends.filter(frd=>frd[0] ==='o');
console.log(Nfriend);
const students=[
    {name:'nabed',age:20},
    {name:'kabed',age:25},
    {name:'labed',age:30},
    {name:'oabed',age:18},
    {name:'mabed',age:35}
]
const studentAge=students.filter(std=>std.age>=25);
console.log(studentAge);
/* filter() হলো array method
যেটা condition অনুযায়ী element বাছাই করে
এবং একটা নতুন filtered array return করে। */