console.log("START SCRIPT");
// const mypromise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("foo");
//     },300);
// })


// mypromise
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));
// console.log(mypromise);



// const mypromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Placed");
//     }, 1000);
// });

// mypromise
//     .then((res) => {
//         console.log(res);
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve("party");
//             }, 1000);
//         });
//     })
//     .then((res) => {
//         console.log(res);
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve("joining");
//             }, 1000);
//         });
//     })
//     .then((res) => {
//         console.log(res);
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve("lay off");
//             }, 1000);
//         });
//     })
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log("Error:", err);
//     });
// ------------------------------------------------
// function placement(placementstep,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("got placement"+placementstep);
//             console.log(placementstep);
//         },delay);
//     })
// }
// placement("got placement",2000)
// .then(()=>placement("party time",3000))
// .then(()=>placement("joining",4000))
// .then(()=>placement("lay off",1000))
// .catch((err)=>console.log(err))
// -------------------------------------------------------------------

// const mypromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Step 1: Placed");
//     }, 1000);
// });

// const mypromise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Step 2: Party");
//     }, 1000);
// });

// mypromise
//     .then((res1) => {
//         console.log(res1);
//         return mypromise3;
//     })
//     .then((res2) => {
//         console.log(res2);
//         console.log("Step 3: Celebration Complete ");
//     })
//     .catch((err) => {
//         console.log("Error:", err);
//     });
// ---------------------------------------------------------------------

const mypromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("hello");
    }, 3000);
});

const mypromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("there");
    }, 4000);
});

const mypromise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("what");
    }, 2000);
});


const mypromise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("is");
    }, 1000);
});


//PROMISE.ALL
// Promise.all([mypromise1, mypromise2, mypromise3, mypromise4])
//     .then((values) => {
//         console.log("All promises resolved:");
//         console.log(values);
//     })
//     .catch((error) => {
//         console.error("At least one promise rejected:", error);
//     });

//1.if all resolved, output? [result1,result2,result3,result4]
//2.all rejected,output? result1  
// - Even if just one promise rejects, Promise.all() skips the .then() and jumps to .catch().
//3.step1 reject,output?


//PROMISE.SETTLED
// Promise.allSettled([mypromise1, mypromise2, mypromise3, mypromise4])
//   .then((results) => {
//     console.log("Results of all promises:");
//     console.log(results);
//   });


//1.if all resolved, output? 
// [
//   { status: 'fulfilled', value: 'hello' },
//   { status: 'fulfilled', value: 'there' },
//   { status: 'fulfilled', value: 'what' },
//   { status: 'fulfilled', value: 'is' }
// ]
//2.all rejected,output? 
// [
//   { status: 'rejected', reason: 'error1' },
//   { status: 'rejected', reason: 'error2' },
//   { status: 'rejected', reason: 'error3' },
//   { status: 'rejected', reason: 'error4' }
// ]
//3.step1 reject,output?



//PROMISE.ANY

// Promise.any([mypromise1, mypromise2, mypromise3, mypromise4])
//   .then(result => {
//     console.log("First fulfilled promise:", result);
//   })
//   .catch(error => {
//     // This runs only if *all* promises reject
//     console.error("All promises were rejected:", error);
//   });



//1.if all resolved, output?
//2.all rejected,output?
//3.step1 reject,output? All promises were rejected: AggregateError: All promises were rejected


//PROMISE.RACE
// Promise.race([mypromise1, mypromise2, mypromise3, mypromise4])
//   .then(result => {
//     console.log("Race winner:", result);
//   })
//   .catch(error => {
//     console.error("Race ended in rejection:", error);
//   });
