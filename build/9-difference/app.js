"use strict";
let a = { a: 5, b: "" };
let b = { a: 10, c: true };
function difference(obj1, obj2) {
    const newObj = { ...obj1 };
    for (const key of Object.keys(newObj)) {
        if (obj2.hasOwnProperty(key)) {
            delete newObj[key];
        }
    }
    return newObj;
}
console.log(difference(a, b));
