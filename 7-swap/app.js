function swapKeysAndValues(obj) {
    var kvMap = new Map();
    for (var _i = 0, _a = Object.entries(obj); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        kvMap.set(value, key);
    }
    var res = Object.fromEntries(kvMap);
    return res;
}
var obj = {
    a: 1,
    b: 2
};
var res = swapKeysAndValues(obj);
console.log(res);
/*
{
  1: 'a',
  2: 'b'
}
*/ 
