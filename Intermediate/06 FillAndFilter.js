var testArray = new Array(3, 7, 9, 4, 6, 2, 9, 7, 1);

//fill with only one parameter will fill all the value with that element.
console.log(testArray.fill(0));
// output: [
//   0, 0, 0, 0, 0,
//   0, 0, 0, 0
// ]

//fill with only second parameter will fill all the value with that element if second element is 0.
console.log(testArray.fill("h", 0));
// output: [
//     'h', 'h', 'h',
//     'h', 'h', 'h',
//     'h', 'h', 'h'
//   ]

//second parameter of fill ask starting position. It tells from which index to start filling
//start position is inclusive i.e., 3rd index will include in filling
var testArray2 = new Array(3, 7, 9, 4, 6, 2, 9, 7, 1);
console.log(testArray2.fill("Ash", 3));
// output: [
//     3,     7,     9,
//     'Ash', 'Ash', 'Ash',
//     'Ash', 'Ash', 'Ash'
//   ]

//third parameter of fill ask end position. It tells till which index to filling.
//end poistion is exclusive i.e., 5 poistion of array will not get fill by "S"
var testArray3 = new Array(3, 7, 9, 4, 6, 2, 9, 7, 1);
console.log(testArray3.fill("S", 2, 5));
// output: [
//     3, 7, 'S', 'S', 'S',
//     2, 9, 7, 1
//   ]

//Filter method filters out based on given position
var testArray4 = new Array(3, 7, 9, 4, 6, 2, 9, 7, 1);
//this will filter 9 from array
console.log(testArray4.filter((num) => num != 9));
// output: [
//   3, 7, 4, 6,
//   2, 7, 1
// ]