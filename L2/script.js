// function calculate(param1){
//     console.log("calculate the BL");
//     param1();
// }

// var sumofTwo=()=>{
//     console.log("sum of 2");
// }
// calculate(sumofTwo);

// --------------------
//main hof
// function calculate(logicfunction,a,b){
//     return logicfunction(a,b);
// }

// //logical function
// function add(a,b){
//     return a+b;
// }

// //logical function 
// function sub(a,b){
//     return a-b;
// }
// console.log(calculate(add,3,4));




// function studentdetail(name,fees){
//     //var name="Ram";
//     return {name,fees};
    
// }
// function emi(fees){
//     return fees/10;
// }
// function welcome(){
//     var {name,fees}=studentdetail("Geta",30000);
//     var emii=emi(fees);
//     return `${name} fees is ${fees} and emi ${emii}`;
    
// }
// console.log(welcome());



// setTimeout
setTimeout(()=>{
    console.log("hi");
},3000);
//used in debouncing
setInterval(()=>{
    console.log("set interval");
},2000);