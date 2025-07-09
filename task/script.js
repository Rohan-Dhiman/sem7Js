
const container = document.getElementById("container");

async function fetchdata (){
   const data = await fetch('https://dummyjson.com/products'); 
   const displayData = await data.json();

   let string = "";

   displayData.products.map((object)=>{
        string += `<div style="max-width: 300px; margin: auto; background-color: white; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); overflow: hidden;">    
    <div style="padding: 20px;">
      <h2 style="margin: 0 0 10px; font-size: 20px; color: #333;">${object.title}</h2>
      <p style="margin: 0 0 20px; color: #666; font-size: 14px;">
        ${object.description}
      </p>
    </div>
  </div>`;
   });

   container.innerHTML = string;
}

fetchdata();