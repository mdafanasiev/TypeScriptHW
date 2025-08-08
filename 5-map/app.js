var MapTest = /** @class */ (function () {
    function MapTest() {
        this.hashList = [];
        this.maxHashesCount = 100;
    }
    MapTest.prototype.add = function (key, value) {
        var hash = this.hash(key);
        if (typeof this.hashList[hash] == "undefined")
            this.hashList[hash] = new LinkedList();
        this.hashList[hash].add({ key: key, value: value });
        return this;
    };
    MapTest.prototype.delete = function (key) {
        var hash = this.hash(key);
        if (typeof this.hashList[hash] == "undefined") {
            return false;
        }
        return this.hashList[hash].delete(key);
    };
    MapTest.prototype.get = function (key) {
        var hash = this.hash(key);
        if (typeof this.hashList[hash] == "undefined") {
            return undefined;
        }
        return this.hashList[hash].find(key);
    };
    MapTest.prototype.clear = function () {
        this.hashList = [];
    };
    MapTest.prototype.hash = function (key) {
        return key.length % this.maxHashesCount;
    };
    return MapTest;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
    }
    LinkedList.prototype.add = function (NodeValue) {
        this.head = new LinkedListNode(NodeValue, this.head);
    };
    LinkedList.prototype.find = function (key) {
        if (!this.head) {
            return undefined;
        }
        var currNode = this.head;
        while (currNode) {
            if (currNode.value.key == key) {
                return currNode.value.value;
            }
            currNode = currNode.next;
        }
        return undefined;
    };
    LinkedList.prototype.delete = function (key) {
        if (!this.head) {
            return false;
        }
        if (this.head.value.key == key) {
            this.head = this.head.next;
            return true;
        }
        var currNode = this.head.next;
        var prevNode = this.head;
        while (currNode) {
            if (currNode.value.key == key) {
                prevNode.next = currNode.next;
                return true;
            }
            prevNode = prevNode.next;
            currNode = currNode.next;
        }
        return false;
    };
    LinkedList.prototype.clear = function () {
        this.head = null;
    };
    return LinkedList;
}());
var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(NodeValue, next) {
        this.next = next;
        this.value = NodeValue;
    }
    return LinkedListNode;
}());
var weatherMap = new MapTest();
weatherMap.add('London', 20);
weatherMap.add("Amsterdam", 15);
weatherMap.add('Berlin', 25);
console.log(weatherMap.get('London')); // Выведет 20
console.log(weatherMap.get("Amsterdam")); // Выведет 15
