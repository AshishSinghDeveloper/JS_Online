//var has functional scope i.e. once we define var variable it valid throughout the program
//Also, var gives "undefined" as error ie it does not give complete error
//let has block scope i.e. it only available within a block {}
//let gives complete error (stacktrace) 


//since name is not declare let it give "undefined" as error. Not complete error.
console.log(name);
var name = "Ashish";
console.log(name);

var countries = ["USA", "India", "Germany", "Kenya"]
for (let index = 0; index < countries.length; index++) {
    console.log(countries[index]);
}
//since index is define as let it scope end after "for loop" block. 
//Also, it gave complete stacktrace error, not just "undefined".
console.log(countries[index]);