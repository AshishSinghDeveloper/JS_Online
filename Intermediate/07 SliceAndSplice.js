//slice extract a part from Array. Original Array unchanged.

//slice(startingindex, endingIndex) 
//extract array from starting index (included) to ending index (excluded).

//slice(startingIndex)
//extract everything from starting index (included);

var names = new Array("Sam", "Tom", "Ham", "Tin", "Ole", "Tin", "Sow", "Ash");
console.log(names.slice(2, 5));
// output: [ 'Ham', 'Tin', 'Ole' ]
console.log(names.slice(2));
// output: ['Ham', 'Tin', 'Ole', 'Tin', 'Sow', 'Ash']

//To show original array does not get change after slice
console.log(names);


//Splice removes a part from array, which means array gets change.

//Splice (starting index, deletion count)
console.log(names.splice(2, 3));
// output: [ 'Ham', 'Tin', 'Ole' ]

console.log(names); //original array got change
//output: [ 'Sam', 'Tom', 'Tin', 'Sow', 'Ash' ]

//Splice (starting index, adds times of array)
console.log(names.splice(1, 3, "one", "two", "three", "four", "five"));
//output: [ 'Tom', 'Tin', 'Sow' ]

console.log(names);
//output: [
//   'Sam',  'one',
//   'two',  'three',
//   'four', 'five',
//   'Ash'
// ]