// console.log("hello");
// var a=200;
// function abc(){
//     console.log("hello world");
// }
// var b=300;
// console.log(b);
// setTimeout(()=>{
//     console.log("start");
// },2000);

// console.log("end");

// console.log(a);
// let a=200; //undefined


// console.log("hello");
// var a=200;
// console.log(a);
// // console.log(xyz);
// xyz();
// function abc(){
//     console.log("this is abc");
// }
// var xyz=()=>{
//     console.log("this is xyz function");
// }
// console.log("end");


//////////////////////////////////////////////////////////////////////////////////

function grandparent(){
    var a=200;
    console.log(a);
    //console.log(c);
    function parent(){
        var b=300;
        console.log(b);

        function child(){
            var c=400;
            console.log(c);
            //will take from here if given
        }
        child();
    }
    parent();
}
grandparent();

//console.log("Running script file!");

