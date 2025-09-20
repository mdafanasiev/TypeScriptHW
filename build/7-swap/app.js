"use strict";
function swapKeysAndValues(obj) {
    let kvMap = new Map();
    for (const [key, value] of Object.entries(obj)) {
        kvMap.set(value, key);
    }
    const res = Object.fromEntries(kvMap);
    return res;
}
const obj = {
    a: 1,
    b: 2
};
const res = swapKeysAndValues(obj);
console.log(res);
/*
{
  1: 'a',
  2: 'b'
}
*/ 
