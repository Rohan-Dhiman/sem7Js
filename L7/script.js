console.log("START SCRIPT");
//addEventListeners->event listeners are very expensive, always active,more event listeners->performance slow
//wrap main container and put a eventlistener->process is called event delegation
// const listofproducts=document.getElementById("listofproducts");
// listofproducts.addEventListener("click",(event)=>{
//     if(event.target.tagName==="LI"){
//         console.log("clicked on: ",event.target.textCXontent);
//     }
// })

// //lets add new element

// const newProduct=document.createElement("li");
// newProduct.textContent="Mobile phone";
// listofproducts.appendChild(newProduct)


// const searchBox=document.getElementById("searchHandle");
// searchBox.addEventListener("input",(event)=>{
//     console.log(event.target.value);
// })

//debouncing in js->means we are giving delay to the function to get executed



// const searchBox=document.getElementById("searchHandle");

//  let timeoutId;

//   searchBox.addEventListener("input",(event)=>{
//     clearTimeout(timeoutId);
//     timeoutId=setTimeout(()=>{
//         console.log(event.target.value);
//     },2000)
//   })

  //data hiding and encapsulation->
//   function closure(){
//     var abc=10;
//     function closure2(){
//         var def=20;
//         console.log(abc);
//         console.log(def);
//     }
//     closure2();
//   }



// for(let i=0;i<=5;i++){ //synch., var global scope
//     setTimeout(()=>{
//         console.log(i);
//     },3000)
// }

//this is the solution of data hiding and encapsulation
// for(let i=0;i<=5;i++){
//     function closure(i){
//         setTimeout(()=>{
//             console.log(i);
//         },3000)
//     }
//     closure(i);
// }

