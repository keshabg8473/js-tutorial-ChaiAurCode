// ARROW FUNCTION SYNTEX 
// also we declare fimple function()like this type
// function simpledeclarefun(){
//     console.log("simple declare function");
// }
// simpledeclarefun()//but we can also declare function with another type like arrwo function

// let arrowfun = () =>{//declare arrow function
//     console.log("kalopsia");
    
// }
// arrowfun();//call arrow function with variable name 

//---------implicit arrow function ------------
// When to use: When the value you want to return is directly after the arrow =>
// When not to use: When the function has multiple lines, or when you want to return an object. 
// let arrowfun = (num1,num2) => num1 + num2;
// console.log(arrowfun(2,3));
//explicit when we used rturn keyword
//-----also we can used
// () - when we used parenthysis not need to used return keyword but 
// {} - when we used curly bracket need to used return keyword 
// let arrowfun = (num1,num2) => (num1 + num2);//  implicit return
// console.log(arrowfun(2,3));
// -----------------------just understand
// let arrowfun = () =>({//object declare in arrow function-----------when we used scope arrow function it's return objects
//     name:"keshab"
// });
// console.log(arrowfun(1,5));

/////////////////////////////////////////
// declare arrow function
// implicit arrow function


// ---------------------------------------------------------------------------------------------------
// IMMEDIATELY INVOKED FUNCTION EXPRESSION(IIFE) 
// why used iife --Creating Private Scopes: The primary use of IIFEs is to create a new scope. Variables declared inside an IIFE are not accessible from the outside. This helps to avoid naming collisions and pollution of the global scope(globel scope pe bohat sara polution hota hai ushko hatane keliye ham iife used karta hai).--
// This is especially important in web development where multiple scripts from different sources might be included on the same page. Using IIFEs helps to prevent conflicts between variables with the same name in different scripts.


// let name = "keshab"//outside var
// (function funone(){//Variables declared inside an IIFE are not accessible from the outside and outside variable are not accessible .
//     // let name = "keshab"//inside var
//     console.log(name);
    
// })();

//-----iife syntex ----- (function defination)(function execution);
// (function funone(){//THIS IS NAMED IIFE BECOUSE WE DECLARE NAME OF FUNTION 
//     console.log("we declare arrow function in iife");
    
// })();//this give erroe all about  semicolon isiliye two iiffe ager declare kar rahe hoto har iife ke batdh semicolon se iife kar end karna jaruri hai

// (() => {//THIS UNAMED IIFE
//     console.log("we declare arrow function in iife");
    
// })()

// HOW PARAMETER PASS 
// ((name) => {
//     console.log(`pass parameter in iife ${name}`);
    
// })("keshab")

//////////////////////////////
//iife declaration 1/named iife and unamed iife
//arrow function are used in iife
// parameter pass in iife