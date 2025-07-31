//FETCH()->object->returns promise

// console.log("START SCRIPT");

// async function fetchDataProducts(){
//     const data=await fetch('https://dummyjson.com/products');
//     const finalData=await data.json();
//     console.log(finalData);
// }
// fetchDataProducts();

// const promiseByme=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("complete assignment by 1");
//     },3000)
// })
// function checkassignment(){
//     const assignmentdata=promiseByme;
//     console.log(assignmentdata);
// }
// checkassignment();

//DOM->DOCUMENT OBJECT MODEL

//EVENT CAPTURING AND EVENT BUBBLING


// const grandparent=document.getElementById('grandparent');
// const parent=document.getElementById('parent');
// const child=document.getElementById('child');

// grandparent.addEventListener('click',()=>{
//     console.log("THIS IS GRANDPARENT DIV");
// },true)

// parent.addEventListener('click',()=>{
//     console.log("THIS IS PARENT DIV");
// },true)

// child.addEventListener('click',()=>{
//     console.log("THIS IS CHILD DIV");
// },true)

function admissionProcess(studentname,studentclass){
    console.log(`hi ${this.studentname}, from class ${this.studentclass}`)
}

const student1={
    studentname:"Neha",
    studentclass:"g2"
}
const student2={
    studentname:"Ram",
    studentclass:"g1"
}
//call->immediate call function
admissionProcess.call(student1);
admissionProcess.call(student2);

function admissionProcess(studentZone,studentCampus){
    console.log(`hi ${this.studentname} from class ${this.studentclass} and zone ${studentZone} from the campus ${studentCampus} `)
}
// admissionProcess.call(student1,"zeta","baddi");
// admissionProcess.call(student2,"gamma","punjab");
admissionProcess.apply(student1,["zeta","baddi"]);
admissionProcess.apply(student2,["gamma","punjab"]);
//apply()->immediate invoke,we pass arguments as array
//bind()-we do not pass array as an argument
const b1=admissionProcess.bind(student1,"zeta","baddi");
const b2=admissionProcess.bind(student2,"gamma","punjab");
b1();
b2();

