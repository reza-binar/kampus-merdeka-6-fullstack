const score = 102;

if (score > 100) {
    console.error("The score is not valid!");
}

if (score > 80) {
    console.log("A");
} else if (score > 70) {
    console.log("B");
} else {
    console.log("C");
}

if (score > 0 && score < 70) {
    console.log("C");
} else if (score > 70 && score <= 80) {
    console.log("B");
} else {
    console.log("A");
}
