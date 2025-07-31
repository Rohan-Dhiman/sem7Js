console.log("SCRIPT JS");


const {sumOfTwo,xy}=require('./calculateTwo/sumOfTwo');
const mulOfTwo=require('./calculateTwo/mulOfTwo');
const divOfTwo=require('./calculateTwo/divOfTwo');
// console.log(xy);

// var xy=30000;

//CALCULATOR
// function sumOfTwo(a,b){
//     console.log(a+b);
// 200lines
//     return a+b;
// }

// function mulOfTwo(a,b){
//     console.log(a*b);
//     return a*b;
// }

// function divOfTwo(a,b){
//     console.log(a/b);
//     return a/b;
// }

// function sumOfTwo(a,b){
//     console.log(a+b);
//     return a+b;
// }

console.log("XY",xy);
sumOfTwo(10,20);
mulOfTwo(10,20);
divOfTwo(20,10);