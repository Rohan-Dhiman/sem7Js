 console.log("START SCRIPT");

//  function walkinres(){
//     setTimeout(()=>{
//         console.log("i am going in rest.");
//     },3000);
//  }
 function walkinres(cb){
    //console.log("i am walking inside rest.");
     setTimeout(()=>{
        console.log("i am going in rest.");
    },5000);
    setTimeout(cb,3000);
 }
// walkinres(function () {
//     console.log("Callback executed after walking inside rest.");
// });
//  function checkmenu(){
//     setTimeout(()=>{
//         console.log("i am checking menu.");
//     },2000);
//  }
 function checkmenu(cb){
    console.log("i am checking menu.");
    setTimeout(cb, 2000);
    //2 sec baad callback function run krna hai
 }
 
//  function orderfood(){
//     setTimeout(()=>{
//         console.log("i am ordering food");
//     },5000);
//  }
  function orderfood(cb){
    console.log("i am ordering food");
    setTimeout(cb,5000);
 }

  function havinglunch(cb){
    console.log("i am having lunch");
    setTimeout(cb,6000);
 }
  function paybill(cb){
    console.log("i am paying bill");
    setTimeout(cb,7000);
 }
 function leavetheplace(cb){
    console.log("i am leaving the place");
    
 }

//walkinres(checkmenu(orderfood(havinglunch(paybill(leavetheplace()))))) ->wrong way

//callback
//pyramid of doom/inversion of control/callback hell
// walkinres(()=>{
//     checkmenu(()=>{
//         orderfood(()=>{
//             havinglunch(()=>{
//                 paybill(()=>{
//                     leavetheplace();
//                 })
//             })
//         })
//     })
// })
//------------------------------------------------------------------------------------------------------------
//1.
var cart=["shoes","shirt","sandles","heels","cap"];
function createOrder(cart,callback){
//take price and total no. of order
  const price = cart.length * 500;
  const noOfItem = cart.length;

  setTimeout(() => {
    callback(price, noOfItem);
  }, 1000);
}

function placeorder(price,noOfItem,callback){
//generate order id and go to payment gateway
console.log("Placing order...");
  const orderId = "ORD" + Math.floor(Math.random() * 10000);

  setTimeout(() => {
    callback(orderId, price, noOfItem);
  }, 2000);
}

function orderpayment(orderId,price,noOfItem){
//place order
console.log(`Processing payment for Order ${orderId}...`);

  setTimeout(() => {
    callback(orderId, "Payment Successful");
  }, 3000);
}
// function orderPayment(orderId, price, noOfItem, callback) {
//   console.log(`Processing payment for Order ${orderId}...`);

//   setTimeout(() => {
//     callback(orderId, "Payment Successful");
//   }, 1000);
// }

function orderstatus(){
    //all details
  console.log("Order ID:", orderId);
  console.log("Status:", paymentStatus);

}
createOrder(()=>{
    placeorder(()=>{
        orderpayment(()=>{
            orderstatus();
        })
    })
})



//promise->easy to debug

//  console.log("SOMETHING");

//  console.log("something");

//  console.log("end script");


