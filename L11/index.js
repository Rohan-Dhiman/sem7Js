// const https = require('node:https');
// const fs = require('node:fs');
// fs.readFile('./something.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

// setTimeout(()=>{
//     console.log("THIS IS SETTIMOUT")
// },0)

// https.get('https://encrypted.google.com/', (res) => {
//     console.log("THIS IS API DATA")

// }).on('error', (e) => {
//   console.error(e);
// });

// setImmediate(()=>{
//     console.log("SET IMMEDIATE")
// })

// setTimeout(()=>{
//     console.log("THIS IS SETTIMOUT")
// },0)

// process.nextTick(()=>{
//     console.log("NEXT TICK")
// })

// console.log("HELLOOOO")

// process.nextTick(()=>{
//     console.log("NEXT TICK 2")
// })

// Promise.resolve("RESOLVE").then(()=>{
//     console.log("P1");
// }

// const fs = require('node:fs/promises');


//they are similar but behave in different ways depending on way they are called
// setTimeout(()=>{
//   console.log("this is setTimeout");
// },0)
// setImmediate(()=>{
//   console.log("this is set immediate");
// })



//EVENT EMITTER
// --------------
// const EventEmitter=require("events");

// // - Allows objects to emit named events.

// const eventEmitter=new EventEmitter();
// //emit used to trigger an event
// eventEmitter.on('start',()=>{
//   console.log("started");
// });
// eventEmitter.emit('start');

//2nd
// const EventEmitter = require('events');
// const myEmitter = new EventEmitter();

// // Listener
// myEmitter.on('greet', (name) => {
//   console.log(`Hello, ${name}!`);
// });

// // Emit the event
// myEmitter.emit('greet', 'Aadyaa');



// const EventEmitter=require("events");
// const myEmitter=new EventEmitter();
// myEmitter.once('start', () => {
//   console.log('startedd');
// });
// myEmitter.emit('start');
// removeListeners,removeAllListeners->


//DNS->Domain name system

// multi tendency backend

// dns module->google.com is host name
const dns = require('dns');

dns.lookup('google.com', (err, address, family) => {

  console.log('address: %j family: IPv%s',address,family);
});


//zenmap->port based scanning, maskedip->vscode, so we get diff. ip everytime in zenmap, vscode ->same ip everytime

//dns module assignment->use all functionalities of dns module, prepare a script, ASSIGNMENT2_DNS_MODULE IN SAME repository, and give link of that folder
//ipv4->(Internet Protocol version 4
//ipv6->(Internet Protocol version 6
