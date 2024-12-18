// --------------------------------------------> Chaning <----------------------------------------
// Map chaining in JavaScript refers to the ability to chain multiple array methods together, with map() being one of them. This allows you to perform a series of operations on an array in a concise and readable way.

//map also a callback function------------------------
// let mynumber = [1,2,3,4,5,6,7,8,10];
// let newnum = mynumber.map((items)=>{
//     return items + 10;
// });
// console.log(newnum);

// -------------------->channing<-----------------------------------
// let mynumber = [1,2,3,4,5,6,7,8,10];
// // let newnumber = mynumber.map().map().filter()//this is channing where i can used map after map and filter method let's see how can be used
// let newnumber = mynumber.map((num1)=> num1 * 10).map((num2)=> num2 + 1).filter((num3)=> num3 > 40);
// console.log(newnumber);
// ------------------------------------> reduce method <-----------------------------------
// The reduce() method in JavaScript is a powerful array method that iterates over an array and accumulates its elements into a single value. It's a fundamental tool for performing operations like summing numbers, flattening arrays, grouping objects, and much more.-----------> reduce is a pre-bult function isiliye jobi result hota hai ushe wo autometacally accumulate main assign ho jata hai

// -------->The reduce() method returns a single value: the function's accumulated result.
// -------->The reduce() method does not execute the function for empty array elements.
// -------->The reduce() method does not change the original array.
// ----------------------------- ex:--------------->
// let mynum = [1,2,3,4,5,6,7,8,9,10];
// let mynum = [];//empty array show error message
// let newNum = mynum.reduce((acc, currVal)=> acc + currVal);//or we can write like this
// let newNum = mynum.reduce((acc, currVal)=> {
//     return acc + currVal
// },0);//empty array error show karta hai isiliye hum ushe 0 se inisialize karta hu taki error show na kare
// console.log(newNum);
