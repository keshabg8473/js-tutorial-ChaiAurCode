// Array-------------------
// No Match: If the element is not found, indexOf() returns -1.

// array method are length(), join(), slice, splice, pop, push, shift, unshift, concat, includes
// let myarr = [1,2,5,9,5,54,11];
// console.log(myarr.slice(1, 5));//The slice() method is a powerful tool for extracting specific portions of an array. It returns a new array containing elements from the original array, starting at a specified index and ending before another specified index.

// console.log(myarr.splice(2,4,"00","00","00","00","22"));//it allows you remove replace and add element
// console.log(myarr.shift());//delet the first element
// console.log(myarr.pop());//delet the last element
// console.log(myarr.push("krishna"));//add last of the element
// console.log(myarr.unshift("hari"));//add first of the element
// console.log(myarr.includes(5));//find that value are include in in array / simple term ye chije woha par haikya chek karna hai
// console.log(myarr.indexOf(5));//count from 0 index which array find first
// let myarr = ["apple", "banana","guava","orang","pinapple", "charry"];
// console.log(myarr.indexOf("guava", "charry"));//wo search karega ki guava kitna index main hai or ush apple( mean 0 index) index se search karega ki charry kitna dur par hai(indexOf("searchIndex", fromIndex));
// console.log(myarr);

// ANOTHER METHOD of array----------------

// let fruits = ["apple","banana","orang","guava","papaya"];
// let veg = ["cubage","brinjal","culiflower"];
// // let adds = fruits.concat(veg);//but all we can used spread method
// let adds = [...fruits, ...veg];
// console.log(adds);

// The flat() method in JavaScript is a powerful tool for working with nested arrays. It takes an array as input and returns a new array with all sub-array elements concatenated into it, up to a specified depth.

// let arr = [1,[2,3,[4,9,58,[11,65]]],12,[55,81,12]]//basic flattened method 3ytpe we can write here
//  console.log(arr.flat());//that is always choose the first depth mean join the array of first square bracket
// console.log(arr.flat(2));//they take only the second depth 
// console.log(arr.flat(Infinity));//they take infinity of the depth of nested array

// let fruits = ["apple","banana","orang","guava","papaya"];
// console.log(Array.isArray(fruits));//Array.isArray() is a crucial tool in JavaScript for accurately determining whether a given value or variable is an array or not. 
//Safe Array Operations: Before performing array-specific operations like iteration, slicing, or splicing, you can use Array.isArray() to ensure you're working with an actual array. This prevents potential errors and unexpected behavior.

//The Array.from() method is used to create a new array from any iterables like array, objects, and strings.
// console.log(Array.from("keshab"));//create array form string
// console.log(Array.from({//create array from object
//     name:"keshab",
// }));//this object give empty array cause the array.form() method only target the key or property in the object
// // target properties of the object convert into array 
// let obj = {
//     name : "keshab",
//     age : 22, 
//     profetion : "web development"
// }
// console.log(Array.from(Object.keys(obj)));//connvert key into array
// console.log(Array.from(Object.values(obj)));//convert value into array
// console.log(Array.from(Object.entries(obj)));//This part takes an object obj and returns an array of key-value pairs. Each pair is represented as an array of two elements: [key, value].

//convert defferent variable into array
// let var1 = 100;
// let var2 = " keshab";
// let var3 = 44;
// let var4 = "arjun";
// console.log(Array.of(var1,var2,var3,var4));






 
