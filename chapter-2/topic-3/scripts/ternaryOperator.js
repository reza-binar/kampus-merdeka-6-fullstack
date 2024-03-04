const aa = 20;
const bb = 30;

let cc = "";
if (aa < bb) {
    cc = "A kurang dari B";
} else {
    cc = "A lebih dari B";
}
console.log(cc);

// Ternary Operator
cc = aa < bb ? "A kurang dari B" : "A lebih dari B";
console.log(cc);
