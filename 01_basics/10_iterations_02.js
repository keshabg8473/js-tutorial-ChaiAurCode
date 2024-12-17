// ---------------------------> js basics <---------------------------------
// ----------------------> filter <-----------------------------
// The filter() method is an iterative method. It calls a provided callbackFn function once for each element in an array, and constructs a new array of all the values for which callbackFn returns a truthy value. Array elements which do not pass the callbackFn test are not included in the new array.
// RETURN VALUE-------->A shallow copy of the given array containing just the elements that pass the test. If no elements pass the test, an empty array is returned.
// -------------------------------------------------------->
// let coding1 =  ["html", "css", "js","react", "node.js","js"];
// let values = coding1.forEach((items)=>{
//     // console.log(items);
//     return items;
// });
// console.log(values);//foreach values are never return any element so if i need to return any value we can used filter method

// filter method value return karta hai<------------>filter ke under ak callback function milta hai jo each array element call karta hai and ushke badh dena padta hai ak condition jo jo log ush condition ko setisfied karenge orr true honge condition wo wo value return ki jayegi nither the value are not return this is basics of filter method.

// let coding2 =  [1,2,3,4,5,6,7,8,9,10];
// let values = coding2.filter((num)=> num > 5);//implicit method where we not used return keyword and simple return value in one line but----------------------------->

// let values = coding2.filter((num)=>{
//     // num > 5//when we used like this in any arrow function we found empty array the reasion if we already know in previous lession when we used scope we need to used return keyword
//     return num > 5;
// });---------------------------------->

// let values = [];//this are same as filter but it's the long, tricky to used rether then filter and this are same as filter
// coding2.forEach((num)=>{
//     if(num >5){
//         values.push(num);
//     }
// })
// console.log(values);

// ---------------->let's see more exercises to learn filter method<------------>there are more data of books in array form fetch from database and user to do some work on it
let books = [
    {tittle: "book one", genere : "fiction", publish : 1981, edition : 2004},
    {tittle: 'book two', genere : "non-fiction",publish: 1992, edition: 2008},
    {tittle: 'book three', genere : "history", publish : 1999, edition: 2007},
    {tittle: 'book four', genere : "non-fiction", publish : 1989, edition: 2010},
    {tittle: 'book five', genere : "science", publish : 2009, edition: 2014},
    {tittle: 'book six', genere : "fiction", publish : 1987, edition: 2010},
    {tittle: 'book six', genere : "history", publish : 1986, edition: 1996},
    
];
//Q.1.wo book  chahiye jiska genre history hoga----------------------------------------------------->
// let userbooks = books.filter((bk)=>{//using scope 
//     return bk.genere == "history";
// });
// let userbooks = books.filter((bk)=> bk.genere == "history")//not used return value because implicit mehtod applied here
// ------------------------------------------------------------------------->
// Q.2.wo sara book do jiska pulish > 2000 hoo 
// let userbooks = books.filter((bk) => bk.publish > 2000);//
// userbooks = books.filter((bk) => { return bk.edition > 2010});//reassign userbooks
// ---------------------------------------------------------------->
// Q.3.wo sara book do jiska publish > 2000 hai orr jishka genre history hai
// let userbooks = books.filter((bk)=>{
//     return bk.edition > 2000 && bk.genere == 'history';
// })
// console.log(userbooks);
// ----------------------------------> foreach and filter different <-----------------------
// forEach:-------------------------------------->
// Purpose: Iterates over each element of an array and executes a provided callback function for each element.
// Action: Performs a specific action on each element, but doesn't modify the original array.
// Return Value: undefined.
// Filter:--------------------------------------->
// Purpose: Creates a new array containing only the elements that pass a test implemented by the provided function.
// Action: Filters elements based on a condition.
// Return Value: A new array containing the filtered elements.

// When to Use Which:------------------------>
// Use forEach when:---------------------------------->
// You want to perform a specific action on each element of an array.
// You don't need to create a new array.
// Use filter when:------------------------------->
// You want to create a new array containing only the elements that meet a certain criteria.
// You want to extract a subset of elements from an array.

// quition solve------------------------------------------>
// Q1.Given an array of objects representing people, use the filter() method to create a new array containing only the people who are older than 30
// const people = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 35 },
//     { name: 'Charlie', age: 28 },
//     { name: 'David', age: 32 }
// ]
// let values = people.filter((ag)=>{
//     return ag.age > 30;
// })
// console.log(values);

// // Q2.Given an array of strings, use the filter() method to create a new array containing only the strings that start with the letter 'A'.
// const words = ['apple', 'banana', 'orange', 'avocado', 'apricot'];
// let wordStartedWithA = words.filter((words) => words.startsWith('a'));
// console.log(wordStartedWithA);

// Q3.Given an array of numbers, use the forEach() method to find the sum of all even numbers.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     let sum = 0;
// numbers.forEach((number)=>{
//     if (number % 2 == 0) {
//         sum = sum + number
//     }
// })
// console.log(sum);
