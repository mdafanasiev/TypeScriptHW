var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TestList = /** @class */ (function () {
    function TestList(items) {
        this.items = items;
        this.items = items;
    }
    TestList.prototype.getItem = function (index) {
        if (index < this.items.length) {
            return this.items[index];
        }
    };
    TestList.prototype.sortByID = function (order) {
        if (order === void 0) { order = 'ASC'; }
        this.items.sort(function (a, b) { return a.id - b.id; });
    };
    TestList.prototype.sortByDate = function (order) {
        if (order === void 0) { order = 'ASC'; }
        this.items.sort(function (a, b) { return Date.parse(a.date) - Date.parse(b.date); });
    };
    return TestList;
}());
var TestListIterator = /** @class */ (function () {
    function TestListIterator(list) {
        this.list = list;
        this.pos = 0;
        this.list = list;
    }
    TestListIterator.prototype.current = function () {
        return this.list.getItem(this.pos);
    };
    TestListIterator.prototype.next = function () {
        return this.list.getItem(this.pos++);
    };
    TestListIterator.prototype.prev = function () {
        return this.list.getItem(this.pos--);
    };
    TestListIterator.prototype.index = function () {
        return this.pos;
    };
    TestListIterator.prototype.printElements = function () {
        while (this.current()) {
            console.log(this.current());
            this.next();
        }
    };
    return TestListIterator;
}());
var IDIterator = /** @class */ (function (_super) {
    __extends(IDIterator, _super);
    function IDIterator(list) {
        var _this = _super.call(this, list) || this;
        _this.list.sortByID();
        return _this;
    }
    return IDIterator;
}(TestListIterator));
var DateIterator = /** @class */ (function (_super) {
    __extends(DateIterator, _super);
    function DateIterator(list) {
        var _this = _super.call(this, list) || this;
        _this.list.sortByDate();
        return _this;
    }
    return DateIterator;
}(TestListIterator));
var testList = new TestList([
    { id: 5, date: "1931-01-01", title: "5" },
    { id: 4, date: "1933-01-01", title: "4" },
    { id: 3, date: "1932-01-01", title: "3" },
]);
var idIterator = new IDIterator(testList);
var dateIterator = new DateIterator(testList);
idIterator.printElements();
console.log('///////////////////////////////////////////');
dateIterator.printElements();
