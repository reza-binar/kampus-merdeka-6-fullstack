var priceTotal = 1000000;
var discount = 25;
var total = 0; // global variable

function getTotal() {
    var totalDiscount = priceTotal * (discount / 100);
    var total = priceTotal - totalDiscount; // local variable, make new varible in this function
    // total = priceTotal - totalDiscount; // It will change the global varible
    console.log("total: ", total); // result: 750.000
}

getTotal();
console.log("total: ", total); // result: 0

// It will change the global variable "total"
var total = 1000000;
console.log("total: ", total); // result: 1000000
