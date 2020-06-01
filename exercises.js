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
// 1. Array operations
var Head = function (_a) {
    var first = _a[0], rest = _a.slice(1);
    return first;
};
var Tail = function (_a) {
    var first = _a[0], rest = _a.slice(1);
    return rest;
};
var Init = function (arr) { return arr.slice(0, arr.length - 1); };
var Last = function (arr) { return arr.slice(-1); };
// 2. Concat
var concat = function () {
    var nArr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nArr[_i] = arguments[_i];
    }
    return [].concat.apply([], nArr);
};
// 3. Clone Merge
var shallowClone = function (source) { return __assign({}, source); };
var deepClone = function (source) { return JSON.parse(JSON.stringify(source)); };
var merge = function (source, target) { return __assign(__assign({}, target), source); };
var isBookRead = function (books, titleToSearch) {
    return true;
};
var a = 0;
