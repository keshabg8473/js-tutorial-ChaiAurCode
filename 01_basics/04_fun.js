// function-------------------
// FUNCTION DECLARE
// function printreturnVal(num1, num2){
// // let result = num1 + num2;
// // return result;
// return num1 + num2;
// };
// let add = printreturnVal(2,3);//undefind isliye deta hai kyuki koi bi value kisibi veriable main tab store hoga jub wo function value return karega nehi ot undefiend return karega;
// //  console.log(printreturnVal());
// console.log("result :" , add);

// return value--------------------------
// function userlogin(username = "defindnamekeshab"){// defind value 
//     if(username === undefined){
//         console.log("please enter username");
//         return;
//     }
//     return `${username} just log in`;
// }
// // console.log(userlogin("keshab"));//simple return value
// // console.log(userlogin());//when we don't pass the value it print undefind;
// console.log(userlogin());//when userlogin in empty print defind value but when we pass the argument it overwrite the defind value

//------------------------------...rest operator------

// jab koi continue value pass karega and ush value ko tum kisibi array main store karna chahoge to rest operator used karna padega
function CalculateCartPrice(val1, val2, ...num1){
    return num1;
}
console.log(CalculateCartPrice(200,30,203,120,240));
