// BASICS///////////////////////////////////////////
// if, else considition
// nested statement
// let a = 5;
// if(a==5){
//     console.log("a value is 5");
    
// }
// else if(a==9){
//     console.log("a value is 9");
    
// }
// else if(a == 10){
//     console.log("a value is 10");
    
// }
// else{
//     console.log("we not found equal number");
    
// }--------------------

// now we know condition statement in real word project 
// let userloggedin = true;
// let debitcard = false;
// if(userloggedin && debitcard){//if two condition will be true then you can access statement AND logical operator---multiple condition check
//     console.log("you can access");
// }
// else{
//     console.log("you can't access");
    
// }-------------------let's check OR logical operator---ak condition true honese bi chalega
// let loginfromgoogle = true;
// let loginfromemail = true;
// if(loginfromgoogle || loginfromemail){//if one condition are true then we can access statement
//     console.log("you can login there");
// }------------------let's check NOT operator--------------
// let age = 18;
// if(!(age > 20)){
//     console.log("age is 18");
// }else{
//     console.log("age is lessthen 20");
// }
// -----------------switch statement---------------
// let month = 7;
// let month = "jan"//when we need to take string value incase how write
// switch(month){
//     // case 1:
//     case "jan"://when string value pass
//         console.log("january");
//         break;
//     // case 2:
//     case "feb":
//         console.log("february");
//         break;
//     // case 3:
//     case "march":
//         console.log("march");
//         break;
    // case 4:
    //     console.log("april");
    //     break;
    // case 5:
    //     console.log("may");
    //     break;
    // case 6:
    //     console.log("june");
    //     break;
    // case 7:
    //     console.log("july");
    //     break;
    // case 8:
    //     console.log("august");
    //     break;
    // case 9:
    //     console.log("september");
    //     break;
    // case 10:
    //     console.log("october");
    //     break;
    // case 11:
    //     console.log("november");
    //     break;
    // case 12:
    //     console.log("december");
    //     break;
//     default:
//         console.log("default value");
//         break;
// }------------------------------
// ---------------------check what is true and false value---------------
// let useremail = " myuseremail123@gmail.com";
// let emptyarray =[]//empty array also are true value
// if(useremail){//how it word while i am not used there condition value 
//     console.log("got user email");
// }
// else{
//     console.log("don't have user email");
// }
// let's break dowm how work above statement -----------------
// falsy values-------------
// false asume false value, 0, -0,BigInt 0n, null, undefiend, NaN

// truthy values--------------
// "0",'false, " ", [], {}, function(){} 

// -----------check array property is empty---------
// if(emptyarray.length == 0){
//     console.log("array is empty");
    
// }--------let's check empty object----------------
// let emptyobj = {};
// if(Object.keys(emptyobj).length == 0){
//     console.log("object is empty");
// }
// true value return----------------when we compare--------important for interview quition.
// false == 0//---true
// false == ' '//----true
// o == " "//----true
//////////////we learn this database next time/////////////////////////nullish coalescing operator (??): this operator are made for null and undefind
//The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.or
// The latter returns the right-hand side operand if the left operand is any falsy value, not only null or undefined
// let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 20;
// val1 = 10 ?? null;
// val1 = null ?? 10 ?? 20// it return 10 value cause left-hand side is null so it will be 10 
// val1 = null ?? undefined;
// console.log(val1);
// ----------------terniary operator-----------------
