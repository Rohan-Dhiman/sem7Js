module.exports=function sumOfTwo(a,b){
    console.log(a+b);
    return a+b;
}
//react-export, nodejs->module.exports
//only one module.exports


//IIFE function->prototype
// (function(module,require){
//     require("./path")
//     function sumOfTwo(a,b){
//     console.log(a+b);
//     return a+b;
// }
// module.exports={sumOfTwo}
// }())