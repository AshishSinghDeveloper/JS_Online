var Tipper = function(bill) {
    return (parseInt(bill) + 5);
}

console.log(`Total amount with tip ${Tipper("20")}`);

console.log(this);