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

// also we can declase the function in the object
// obj.tryfun = function(){
//     console.log("i can access function using object");
// }
// console.log(obj.tryfun);//it take reference of the object
// console.log(obj.tryfun());//it invoke and call(execute) function

//-------------------------------------object another part
// nested object 
let obj = {
    name : "keshab",
    fullname : {
        firstname : {
            lastname: "gurung"
        }
    }
}

console.log(obj.fullname.firstname.lastname);//that types we can access the properties ob the nested object



