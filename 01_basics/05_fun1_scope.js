// // scope basics----------------------------------
// Local Scope:
// Defined within a function: Variables declared inside a function have local scope.   
// Accessible within the function: These variables can be accessed anywhere within that function, including nested functions.   
// Lifetime: They exist only as long as the function is executing. Once the function finishes, the variables are destroyed.   

// Block Scope:
// Defined within a block: Variables declared within a block, such as if, else, for, or while statements, have block scope.
// Accessible within the block: These variables are only accessible within that specific block.   
// Lifetime: They exist only within the block and are destroyed once the block finishes execution.   

// var, let, const different here
// var a = 12;
// let b = 54;
// const c = 12;

// function calculate(){
//     var a = 121;
//     let b = 124;
//     const c = 121;
//     console.log();
    
// }
// console.log(a);

//----------------------------------nested function scope---------------
// function parentfun(){
//     let firstvar = "keshab";
//     function childfun(){
//         let secondvar = "arjun";//child scope access parent var
//         console.log(firstvar + " "+secondvar);
//     }
//     // console.log(secondvar);//parent scope can't access child var
    
//     childfun();
// }
// parentfun();

// in block scope-------------------------
// if(true){
//     let firstvar = "hitesh";
//     if(true){
//         let secondvar = "arjun";//access parent scope var
//         console.log(firstvar + " "+ secondvar);
        
//     }
//     // console.log(secondvar);//can't access child scope var
    
// }
// firstvar();//we can't access block scope var outside the block