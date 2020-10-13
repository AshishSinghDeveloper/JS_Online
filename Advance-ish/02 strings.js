var country = "India";
console.log(country.length); //returns 5

var index = country.charAt[0];
console.log(index);

//substring of India starting at index 2 with length 2 so it returns "di"
var subString = country.substr(2, 2);
console.log(subString); //return di

//concat to current string. Country will be unchanged.
console.log(country.concat(" is a beautiful country"));
console.log(country); //India