// console.log("MODULE TUT");
//dev->development mode(npm run dev), start->production level(in package.json)

// const {divOfTwo,xy}=require("./calculate/divOfTwo")
// const sumOfTwo=require("./calculate/sumOfTwo")

// const {divOfTwo,sumOfTwo,mulOfTwo,xy} =require("./calculate/index ")
const sumOfTwo=require("./calculate/sumOfTwo")
console.log("MODULE TUT");
function sumOfTwo(a,b){
    console.log(a+b);
    return a+b;
}

// function mulOfTwo(a,b){
//     console.log(a*b);
//     return a*b;
// }


// function divOfTwo(a,b){
//     console.log(a/b);
//     return a/b;
// }

sumOfTwo(10,20);
// mulOfTwo(10,20);
// divOfTwo(20,10);

//require->5step process->resolve the path,loading the module,wrap inside IIFE function,evaluation...does not give error even if there is just evaluates
//if code is fine, it does caching ... that is why only evaluates

//SYNCH.
// var a=2;
// var b=30;
// function call(){
//     console.log("call function");
// }

// console.log(a);
// call();
// console.log(b);
// --------------------
//ASYNCH.
// setTimeout(()=>{
//     console.log("this1");
// },2000)

// setTimeout(()=>{
//     console.log("this2");
// },3000)



