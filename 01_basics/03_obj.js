// object literal----------------declare, how work an access object
// how declare object 
// let obj = {
//     name : "keshab",
//     age : 23,
//     "my name is" : "keshab gurung"
// }
// obj.name = "rohan";//kisibi object ke under we can change the properties
//dot and square notation we can access properties of the object
// console.log(obj.age);//used to access values by keys of the object
// console.log(obj["my name is"]);//used to acces values by string of logn keys of the object

// also we can declare the function in the object
// obj.tryfun = function(){
//     console.log("i can access function using object");
// }
// console.log(obj.tryfun);//it take reference of the object
// console.log(obj.tryfun());//it invoke and call(execute) function

//-------------------------------------object another part
// nested object 
// let obj = {
//     name : "keshab",
//     fullname : {
//         firstname : {
//             lastname: "gurung"
//         }
//     }
// }
// console.log(obj.fullname.firstname.lastname);//this type  we can access the properties of the nested object
//----------------------------------------------------------------//
// how marge object 
// let obj1 = {
//    a: 1,
//    b:2,
//    name : "keshab"
// };
// let obj2 = {
//   c:3,
//   d:4,
//   name1 : "gawtam"
// };

// let obj3 = { obj1, obj2}//it's good to marge object but that is not the correct path
// let marg = Object.assign({},obj1,obj2);//learn later//why the same properties are not work//but if we print the name we need to choose different keys name
//When you merge objects in JavaScript, the later occurrences of properties with the same name overwrite earlier ones. 
// console.log(marg);

// but marge the object we can write spread operator
// let obj ={...obj1,...obj2};
// console.log(obj);
//-------------------------------------------------------------------//

// ARRAY OF OBJECT //JAHA KI AK ARRAY KE UNDER DIFFERENT TYPE OBJECT HOTA HAI
// let multiobj = [
//     {
//         name : "keshab",
//         age :23,
//         oquepation : "software developer"
//     },
//     {
//         name : "mousum",
//         age :21,
//         oquepation : "trader"
//     },
//     {
//         name : "ariayn",
//         age :25,
//         oquepation : "backend developer"
//     }

// ];
// console.log(multiobj);

// let firstobj = multiobj[1].name;//it first method when we store in veriable 
// console.log((firstobj));
// console.log(multiobj[2].name);//direct used object name
// ------------------------------------------------------------------
// array de-structur :Destructuring assignment is a powerful syntax in JavaScript that allows you to extract values from objects and arrays into distinct variables.

// let obj = {
//     name :"keshab ",
//     age: 23,
//     profession :"software developer"
// }
// obj.age = 44;
// console.log(obj.name);
// console.log(obj.age);

// ------------for the above problem the de-structur are made 
// let {name,age} = obj;//declare de-structuing using object
// let {name, age, country = "india"} = obj;//object default(potentially missing properties we can set default values) values(new properties assign)
// console.log(name);
// console.log(age);
// console.log(country);

// let {name : n, age : a} = obj;//object properties alias(rename)
// console.log(n);
// console.log(a);
//-------------------------------------------------


