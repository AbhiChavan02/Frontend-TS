// Truthy and Falsy
// in js two things true or false so this concept called truthy and falsy
// 0, false, undefined, null, Nan(Not a number), document.all is  - false
// and all other things are true - string, var, number, etc.

// if (0) {
//     console.log("True");
// }
// else{
//     console.log("False");
// }





// Arrays behinds the scene? why there heterogenous array collect?
// --> heterogenous and homogenous array in JS is stored in object

// Arrays are special type of object in JS
// in JS we can store value in minus index

// let arr = [1, "Hello", true];

// arr[-1] = "Hi";
// console.log(arr);





// Frontend = Backend = DB

// frontend = HTML CSS JS
// Backend = SpringBoot
// DB = MySql

// API - Application Programming Interface
// Frontend ===== is table
// API = (=====) Waiter
// backend = kitchen
// DB = Pantry






// Async Javascript
// Two types
//Q1. Sync vs Async JS

// Sync - 
// Task 1 - 20sec
// Task 2 - 4sec
// Task 3 - 7sec
// Task 4 - 3sec
// Total time = 34sec



// Async-
// Task 1  - 20sec
// Task 2 - 4sec
// Task 3 - 7sec
// Task 4 - 3sec
// total time will be = 20sec it will take maximum number 

// So we're using mostly Async JS - it save time but get load on hardware

// Async - 
// 1.setTimeout
// 2.setInterval
// 3.fetch

// What is callback?
// --> time between the searching and getting output 
// --> so the time required it will be callback



// for setup of time required (timeset)
// setTimeout(function abc() {
//     console.log("Boom");
// }, 5000);



// for interval between the continuous calling
// setInterval(function xyz() {
//     // console.log("Hehe");
//     // document.write("Hehe <br>");
// },2000);


// API calling - .then is promises


// async function products(id) {
//     let rawData = await fetch("https://dummyjson.com/products/" + id);
//     let finalData = await rawData.json();
//     console.log(finalData);
// }
// products(3);



// function red() {
//     let text = document.getElementById("myelement");
//     text.style.color = "red";
// }
// function yellow() {
//     let text = document.getElementById("myelement");
//     text.style.color = "yellow";
// }
// function green() {
//     let text = document.getElementById("myelement");
//     text.style.color = "green";
// }
// function blue() {
//     let text = document.getElementById("myelement");
//     text.style .color = "blue";
// }



function colors(color) {
    let text = document.getElementById("myelement");
    text.style.color = color;
}


// Task
// 4button but function will be one




 