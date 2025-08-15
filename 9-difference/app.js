var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var a = { a: 5, b: "" };
var b = { a: 10, c: true };
function difference(obj1, obj2) {
    var newObj = __assign({}, obj1);
    for (var _i = 0, _a = Object.keys(newObj); _i < _a.length; _i++) {
        var key = _a[_i];
        if (obj2.hasOwnProperty(key)) {
            delete newObj[key];
        }
    }
    return newObj;
}
console.log(difference(a, b));
