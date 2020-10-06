function Hello(name) {
    return `Hello ${name}, enjoy your day`;
}
console.log(Hello("Ashish"));

var Hello = function(name) {
    return `Hello ${name}, enjoy your day`;
}
console.log(Hello("Ashish"));

//callback function
var HelloAgain = (name) => {
    return `Hello ${name}, enjoy your day`;
}
console.log(HelloAgain("Ashish"));

//Self-invoking anonymous function. Immediately Invoked Function Expresson (IIFE)
(function() {
    console.log(`Hello, enjoy your day`)
})();