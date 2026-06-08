// Immediately Invoked Function Expressions (IIFE)
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( () =>{console.log("hello")
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')