
// you are tasked to get the sum of the price property and get the total price. You can do this using the forEach() method as follows:
// Inside the forEach loop's block scope, when you use totalPrice, you're actually referencing the same memory location as the global totalPrice variable.
// This means any modification made to totalPrice within the block scope will directly affect the global variable.

// const items = [
//     { name: 'Apple', price: 1 },
//     { name: 'Orange', price: 2 },
//     { name: 'Mango', price: 3 },
//   ];
//   let totalprice  = 0;
//   items.forEach((item)=>{
//   return totalprice += item.price;
//   })
//   console.log(totalprice);
 
// in reduce() method how it work -------------------------->
// let totalprice = items.reduce((accumulator, item)=>{
//   return accumulator = accumulator + item.price;
// },0)
// console.log(totalprice);------------------------------------------>

//The accumulator parameter is the single value that will be returned by the reduce() method. It will contain the value returned by the callback function in each iteration.
// The item parameter is simply the item from the array, which will change in each iteration just like in the forEach() method.
//In the first iteration, the accumulator parameter will contain whatever value you passed as the second argument of the reduce() method. In the above case, it’s 0.
//And that’s basically how the reduce() method works. It iterates over each element in your array, and each iteration returns a 
// single value, which is the accumulator.
// When the iteration is finished, the accumulator value will be returned from the method.

// Summarizing your values into a single value, Grouping similar items together, Removing duplicates from an array
// ------------------------------------> grouping similar items togethers <------------
// const items = [
//   { name: 'Apple', category: 'Fruit' },
//   { name: 'Onion', category: 'Vegetable' },
//   { name: 'Orange', category: 'Fruit' },
//   { name: 'Lettuce', category: 'Vegetable' },
// ];
// let groupitems = items.reduce((accumulator, itms)=>{
//           let catagorys = itms.category;//it's extract name from existing array of object 
//           if(!accumulator[catagorys]){//it check the catagory are exist in the accumulator object if not then it give false, undefind, empty string value and.....
//             accumulator[catagorys] = []; // in the accumulator object are assign that catagory are empty array and push item to the empty array of the object --------In this condition, the square brackets [] are used to access a property of the accumulator object using the category variable as the property name.
//           }
//           accumulator[catagorys].push(itms.name);
//           return accumulator;
          
// }, {})
// console.log(groupitems);
// in foreach method 
// const items = [
//   { name: 'Apple', category: 'Fruit' },
//   { name: 'Banana', category: 'Fruit' },
//   { name: 'Laptop', category: 'Electronics' }
// ];

// const groupedItems = {};

// items.forEach(item => {
//   const category = item.category;
//   if (!groupedItems[category]) {
//     groupedItems[category] = [];
//   }
//   groupedItems[category].push(item);
// });

// console.log(groupedItems);
// ----------------> exercise <--------------------------
// Q.Let's consider a scenario where we have an array of products, each with a brand property and We want to group these products by their brand property using the reduce() method
// const products = [
//   { name: 'iPhone 14', brand: 'Apple' },
//   { name: 'Galaxy S23', brand: 'Samsung' },
//   { name: 'Pixel 7 Pro', brand: 'Google' },
//   { name: 'iPhone 13', brand: 'Apple' },
//   { name: 'Galaxy S22', brand: 'Samsung' }
// ];
// let groupingItems = products.reduce((accumulator, phone)=>{
//         let catagorys = phone.brand;
//         if(!accumulator[catagorys]){
//           accumulator[catagorys] = [];
//         };
//         accumulator[catagorys].push(phone.name);
//         return accumulator;
// },{});
// console.log(groupingItems);
