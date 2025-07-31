// const { pbkdf2Sync } = require("crypto");
//SYNCH.
// //LIBUV THREADS
// console.log("START SCRIPT");
// var a=200;
// console.log(a);

// const key=pbkdf2Sync('secret','salt',2000000,64,'sha512');
// console.log(key.toString('hex'));
// function abc(){
//     console.log("this is abc function");
// }
// abc();



// const key2=pbkdf2Sync('secret','salt',2000000,64,'sha512');
// console.log(key2.toString('hex'));

// console.log("SOMETHING");

// const key3=pbkdf2Sync('secret','salt',2000000,64,'sha512');
// console.log(key3.toString('hex'));

// -------------------------------------------------------------------------------------------------

//SYNCH.
//threadpool size in libuv=4 by default
//windows->set UV_THREADPOOL_SIZE=10 to increase size
//windows/mac->process.env.UV_THREADPOOL_SIZE=10 at top of the file to increase the size
//nodejs->single threaded, but i/o event driven architecture so multithreaded
// const{
//     pbkdf2
// }=require("crypto");

// pbkdf2('secret','salt',2000000,64,'sha512',(err,derivedKey)=>{
//     if(err) throw err;
//     console.log(derivedKey.toString('hex'));
// });

// console.log("something");
// console.log("something");
// console.log("something");
// pbkdf2('secret','salt',2000000,64,'sha512',(err,derivedKey)=>{
//     if(err) throw err;
//     console.log(derivedKey.toString('hex'));
// });
// pbkdf2('secret','salt',2000000,64,'sha512',(err,derivedKey)=>{
//     if(err) throw err;
//     console.log(derivedKey.toString('hex'));
// });
// console.log("something");
// ---------------------------------------------------------------------------------------------

////setImmediate

// var a=200;
// console.log(a);
// function hello(){
//     console.log("hello");
// }
// hello();
// var b=300;

// setImmediate(()=>{
//     console.log("SET IMMEDIATE");
// });
// console.log(b);
// console.log("END");
// process.nextTick(()=>{
//     console.log("this is next tick");
// });
//synchronous code runs first, then asynchronous code
//process.nextTick() is not part of the event loop phases but runs right after the current stack clears, giving it higher priority
//set immediate runs first


// ----------------------------------------------------------------------------------------------------------------------------------
const https = require('node:https');
const fs = require('node:fs');
fs.readFile('./something.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

setTimeout(()=>{
    console.log("THIS IS SETTIMOUT")
},0)

https.get('https://encrypted.google.com/', (res) => {
    console.log("THIS IS API DATA")

}).on('error', (e) => {
  console.error(e);
});

setImmediate(()=>{
    console.log("SET IMMEDIATE")
})

setTimeout(()=>{
    console.log("THIS IS SETTIMOUT")
},0)

process.nextTick(()=>{
    console.log("NEXT TICK")
})

console.log("HELLOOOO")

process.nextTick(()=>{
    console.log("NEXT TICK 2")
})

