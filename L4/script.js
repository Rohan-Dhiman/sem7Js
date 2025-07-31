// console.log("START SCRIPT");
// let arr=[2,4,5,6,7,8];
// let arr2=[5,5,5,6,7,8];
// // const newArr=arr.map((x)=>x*2);
// // console.log(newArr);
// //PROTOTYPES IN JS
// function doubleData(x){
//     return x*x;
// }
// //this keyword does not work with arrow functions
// Array.prototype.mapReplica=function(logic){
//     let outputArr=[];
//     for(let i=0;i<this.length;i++){
//         outputArr.push(logic(this[i]));
//     }
//     return outputArr;
// }

// const myProtoData=arr2.mapReplica(doubleData);
// console.log(myProtoData);


//FILTER
// const words=["hellooo","hi","bye","present","tensed"];
// // const result=words.filter((word)=>word.length>6);
// // const result=words.map((word)=>word.length>6);
// // console.log(result);


// function filter(x){
//     if(x.length>6){
//         return x;
//     }
//     else{
//         return;
//     }
    
// }

// Array.prototype.filterReplica=function(logic){
//     let outputArr=[];
//     for(let i=0;i<this.length;i++){
//         if(logic(this[i])){
//         outputArr.push(logic(this[i]));
//         }
       
//     }
//     return outputArr;
// }

// const myProtoData=words.filterReplica(filter);
// console.log(myProtoData);




//REDUCE
let array1=[1,2,3,4];
// const initialvalue=0;
// const sumwithinitial=array1.reduce(
//     (accumulator,currentValue)=> accumulator+currentValue,initialvalue,
// );
// const sumwithinitial2=array1.reduceReplica(
//     (accumulator,currentValue)=> accumulator+currentValue,initialvalue,
// );

// console.log(sumwithinitial); //10

// The value resulting from the previous call to callbackFn
// function reduce(x,y){
//     return x+y;
// }
// Array.prototype.reduceReplica=function(logic){
//     //let outputArr=[];
//     const initialvalue=0;
//     for(let i=0;i<this.length;i++){

//     }
// }
function reduce(x, y) {
    //x->accumulator, y->current 
    return x + y;
}

Array.prototype.reduceReplica = function(logic, initialValue = 0) {
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
        accumulator = logic(accumulator, this[i]);
    }
    return accumulator;
};
const finalans=array1.reduceReplica((x,y)=>x+y,0);
console.log(finalans);
