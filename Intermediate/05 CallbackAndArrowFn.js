//This is arrow function =>. This is like a Lamda expression (in my opinion)
var IsEven = (num) => {
    return (parseInt(num) % 2 === 0);
}

//console.log(IsEven(4)); //return true;

//Arrow function needs to have return keyword otherwise it returns undefined.
// var IsEven = (num) => {
//     (parseInt(num) % 2 === 0);
// }

//console.log(IsEven(4)); //returns undefined as IsEven function does not have return keyword


//Callback function. This is like a anonymous method (in my opinion)
//every() is a callback function for array and run provided operation on each and every element of array
var result = [2, 4, 6, 8].every(IsEven);
console.log(result); //return true as all elements of array is even.
//notice that IsEven function doesn't have paranthesis (), because we are passing method reference.
//We do this when we don't want to call method but want to pass as reference.

//Call back function looks somthing like this () => {} or () => ()
//when we have return then use () => {}
var result2 = [2, 4, 6, 8].every((e) => { return e % 2 === 0 });
console.log(result2);

//when we dont need to use return keyword then use () => ()
var result3 = [2, 4, 6, 8].every((e) => (e % 2 === 0));
console.log(result2);

//without return could also be like this, () =>  //no need to use other ()
var result3 = [2, 4, 6, 8].every((e) => e % 2 === 0);
console.log(result2);