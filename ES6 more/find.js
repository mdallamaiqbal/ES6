const students=[
    {name:'nabed',age:20},
    {name:'kabed',age:25},
    {name:'labed',age:30},
    {name:'oabed',age:18},
    {name:'mabed',age:35},
];
const student=students.find(std=>std.name==='oabed');
console.log(student);
const studentN=students.find(std=>std.name[0]==='n');
console.log(studentN);
/* What is find()?

find() array থেকে এমন প্রথম element return করে
যেটা condition match করে। */