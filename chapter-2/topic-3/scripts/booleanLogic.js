/* 
    0 is false
    null is false
    undefined is false
    "" is false
*/

// AND
// Will be find the first false and then that value will be returned
// If there are no false, or there are all is true, it will get the last true value
const a = true;
const b = true;
const c = true;
const d = true;
const e = a && b && c && d && 1 && "a" && 80 && true;
console.log("e", e);

// OR
// Will be find the first true and then that value will be returned
const f = false;
const g = f || false || "" || 0;
console.log("g", g);
