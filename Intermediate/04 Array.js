//One way of declaring and initializing arrays
var countries = ["India", "USA", "Russia", "United Kingdom", "Brazil"];
console.log(countries); //this will show list of countries

//another way of declaring and initializing arrays
var indianState = new Array("Uttar Pradesh", "Andhra Pradesh", "New Delhi", "Bihar", );
console.log(indianState); //this will show list of states too.

console.log(countries[0]); //shows India
console.log(indianState[0]); //shows Uttar Pradesh

//indexOf return index of item, if found otherwise returns -1
console.log(countries.indexOf("USA")); //returns index of USA which is 1.
console.log(indianState.indexOf("Punjab")); //returns -1 since it couldn't find Punjab

//Replacing element
indianState[0] = "Madhya Pradesh";
console.log(indianState); // [ 'Madhya Pradesh', 'Andhra Pradesh', 'New Delhi', 'Bihar' ]

//Deleting element from last. we use Pop() because array is object in JS(I guess).
//I guess all datatype is object in JS.
countries.pop(); //Last country which is brazil is popped.
console.log(countries); // [ 'India', 'USA', 'Russia', 'United Kingdom' ]

//Deleting element from first.
indianState.shift() //first element (Madhya Pradesh) gets deleted.
console.log(indianState); //[ 'Andhra Pradesh', 'New Delhi', 'Bihar' ]

//adding element at the end.
indianState.push("Kashmir"); //adds Kashmir at the end of array
console.log(indianState); // [ 'Andhra Pradesh', 'New Delhi', 'Bihar', 'Kashmir' ]

//adding element at the first.
countries.unshift("Nepal"); //adds Nepal as first element.
console.log(countries); //[ 'Nepal', 'India', 'USA', 'Russia', 'United Kingdom' ]

//Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.
console.log(Array.from("Ashish")) //output: [ 'A', 's', 'h', 'i', 's', 'h' ]