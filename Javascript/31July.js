// function add(a, b) {
//   console.log(a + b);
// }

// function sub(a, b) {
//   console.log(a - b);
// }

// function multiply(a, b) {
//   console.log(a * b);
// }

// function div(a, b) {
//   console.log(a / b);
// }

// add(10,20);
// sub(50,10);
// multiply(10,20);
// div(10,2);

// Objects in js - JSON(JavaScript Object Notation)
// What is JSON - is store in (key: value) in key value pair.
// key: value

// let phone = {
//     brand: "Samsung",
//     price: 20000,
//     color: "Black",
//     selfieCam: true,
//     color: "Blue"
// };
// phone.selfieCam = false;

// console.log(phone);

// What is method in JS - (function)
// what are method in JS -

// let phone = {
//   brand: "Samsung",
//   price: 20000,
//   color: "Black",
//   selfieCam: true,
//   color: "Blue",
//   // function - function is stored in an object is method in your javascript
//   print: function data() {
//     console.log(
//       "My phone is " + this.brand + " and its price is " + this.price
//     );
//   },
// };

// phone.print();





// ADVANCED JS


// var - declare, initialize, global
// let - no, reinitialized, block
// const - no, no, block

// {
//     var a = 20; // Global Scope
// }
// console.log(a);



// {
//     let b = 30; // BLock Scope
//     console.log(b);
// }
// console.log(b);


// {
//     const c = 30;
//     console.log(c); // Block Scope
// }
// console.log(c);







// Browser context API - (BCA) JS has not all things some things get from browser if we want to execute code but does not have vs code we borrow from our friend
// 1. WIndow objects - (windows features)
// 1.1 alert
// 1.2 console
// 1.3 document
// 1.4 setTimeout
// 1.5 setInterval




// let and const is safest for system than var




// Execution context - {variables   functions(if any)    Lexical environment}
// Execution context includes var, function, lexical environment
// Rule book of JS will be lexical environment it will decide which execute first and which will execute last



// Spread Operator
// spread operator will make copy of references, and also for filter, duplicate and many more

// Q1 how can we copy reference value?


// let arr = [1,2,3,4,5];
// let arr2 = [...arr];
// arr2[2] = 100;
// console.log(arr);
