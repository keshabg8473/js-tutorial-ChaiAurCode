// -------------------------------------> FOR OF LOOP <----------------------------
// for of loop----->the for...of loop is a powerful and elegant(nice) way to iterate over the values of an iterable object, such as arrays, strings, maps, sets, and more. 
// ---------->const value: Declares a variable to hold the current value during each iteration. Using const is generally recommended as the value is reassigned with each iteration.ex:
// ITERATING OVER AN ARRAY<-------------
// let arr = [1,2,3,4,55,8];
// for (let value of arr) {
//     console.log(value);

// }//ITERATING OVER A STRING<----------
// let str = "keshab gurung";
// for (let value of str) {
//     console.log(value);

// }//ITERATING OVER A MAP--------------> a Map is a collection of key-value pairs. It's similar to an object, but with some key differences.learn in next vedio...
// add key-value pairs 

// let newmap = new Map();
// newmap.set("keshab", "gurung");
// newmap.set("country", "india");
// newmap.set("age", "22");
// newmap.set("keshab", "gurung");//map statement are not return repeated value
// console.log(newmap);

//for of loop in map----->when we need to iterate keys and value pairs in a map function<-----------------
// for (let [keys, value] of newmap) {//this are when we need to return keys-values pairs but 
//     console.log(keys, value);
// }// when we need only keys and values in map.
// for (let keys of newmap.keys()) {//iterates keys only
//     console.log(keys);
// }--------------------------
// for (let value of newmap.values()) {//iterates values only
//     console.log(value);
// }-------------------------------------
// let obj = {
//     name : "keshab",
//     age : 22
// }
// for (let [keys,values] of obj) {
//     console.log(keys, values);
// }--it's gives error cause we can't iterates object by for-of loop like map function to iterates object we used another method 

// ----------------------------> FOR IN LOOP <----------------------------
// for of loop----------The for...in statement iterates over all enumerable string properties of an object.
// let obj = {
//     name : "keshab",
//     age : 22,
//     country: "india"
// }
// for (let keyvalue in obj) {
// //    console.log(keyvalue);//iterates keys only
// //    console.log(obj[keyvalue]);//iterates value only
//     console.log(`${keyvalue} objects value ${obj[keyvalue]}`);
// }
// for in loop in array<-----------------------
// let arr = ["banana","guava", "orang", "pinapple"];
// for (const key in arr) {
//     // console.log(key);//yes it five array keys 
//     console.log(arr[key]);//iterates value of an array
// }
//-----------------------------> FOREACH LOOP <---------------------
// foreach loop ----------->The forEach() method of Array instances executes a provided function once for each array element.
// syntex --array.forEach(callbackFunction(currentValue, index, array));

let arr = ["banana", "guava", "orang", "pinapple", "apple"];
// arr.forEach(function (items){//items is a parameter and take every argument from arr----
//     console.log(items);//simple array access
// })
//using arrow function<--------------
// arr.forEach((items)=>{
//     console.log(items);
// });
// simple pass function using for each<--------------------
//  function iterate(items){
//     console.log(items);
//  };
// arr.forEach(iterate);

// ----------->in foreach the callback function not only take element as a argument but also they take index, total array
// arr.forEach((element, index, array)=>{
//     // console.log(`the element ${element}, the index ${index}, the array ${array}`);   
// })

// LET SEE ARRAY OF OBJECT WHERE HAVE DIFFERET OVJECT IN ARRAY<---------------
let arrayobj = [
    {
        language: "javascript",
        pation: "computer"
    },
    {
        language: "javascript",
        pation: "computer"
    },
    {
        language: "javascript",
        pation: "computer"
    }
];
// arrayobj.forEach((items,index,array)=>{
//     // console.log(items.language);//i can iterate all object properties of the array
// })




