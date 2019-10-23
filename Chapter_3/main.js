let age = null;

//null+3 = 3
console.log(age, age + 3, 'the age is ${age}');

let age2 = 25;

console.log(age2 === 25);
console.log(age2 === '25'); //this will be false as it is a different type

//============
let score = '100';

score = Number(score); //converts it to a number

let result = String(50); //converts it to a string

//Numbers are TRUE numbers and 0 is a FALSE value
//strings of any length are TRUE, except empty strings which are FALSE
