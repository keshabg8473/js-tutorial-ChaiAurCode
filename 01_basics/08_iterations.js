//  FOR loops which also knows as iteration
// basics for loop iteration
// for (let index = 0; index < 10; index++) {//simple iteration 
//     const element = index;//scope veriable under ke lement ko bahar print nehi karsakte hai-------------------------
//     console.log(element);
// }how used if statement in for loop----------------------------------------------------------
// for (let index = 0; index < 10; index++) {
//     let element = index;
//     if (index == 5) {
//         console.log("i love 5 number");
//     }
//     console.log(element);
// }//but how we can iterate any array element-------------------------------------------------
// //It assigns the initial value of 0 to the index variable. This means that, initially, the loop will start by accessing the first element of the fruits array, which has an index of 0.

// let fruits = ["banana", "guava", "orang", "papaya", "guava"];
// for (let index = 0; index < fruits.length; index++) {
//     let element = fruits[index];
//     console.log(element);
// }//nested for loop or 2D array--------------------------
// for (let i = 1; i < 5; i++) {
//     // console.log(`outer value ${i}`);
//     for (let j = 1; j < 5; j++) {
//         console.log(`inner value ${i}${j}`);
//     }
// }//print multiplication 
// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(i + " * " + j + " = " + i*j );
//     }
// }-------------break and continue statement-------------
// for (let i = 1; i <= 10; i++) {
//     if(i == 5){
//         console.log(`detected value is ${i}`);
//         // break;
//         continue;//the continue statement "jumps over" one iteration in the loop.
//     }
//     console.log(`value is ${i}`);
// }
//-------------------- prefix and postfix -------------------------------

