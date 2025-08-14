"use strict";
class MapTest {
    hashList = [];
    maxHashesCount = 100;
    set(key, value) {
        const hash = this.hash(key);
        if (typeof this.hashList[hash] == "undefined")
            this.hashList[hash] = new LinkedList();
        this.hashList[hash].add({ key, value });
        return this;
    }
    delete(key) {
        const hash = this.hash(key);
        if (typeof this.hashList[hash] == "undefined") {
            return false;
        }
        return this.hashList[hash].delete(key);
    }
    get(key) {
        const hash = this.hash(key);
        if (typeof this.hashList[hash] == "undefined") {
            return undefined;
        }
        return this.hashList[hash].find(key);
    }
    clear() {
        this.hashList = [];
    }
    hash(key) {
        return key.length % this.maxHashesCount;
    }
}
class LinkedList {
    head;
    constructor() {
        this.head = null;
    }
    add(NodeValue) {
        this.head = new LinkedListNode(NodeValue, this.head);
    }
    find(key) {
        if (!this.head) {
            return undefined;
        }
        let currNode = this.head;
        while (currNode) {
            if (currNode.value.key == key) {
                return currNode.value.value;
            }
            currNode = currNode.next;
        }
        return undefined;
    }
    delete(key) {
        if (!this.head) {
            return false;
        }
        if (this.head.value.key == key) {
            this.head = this.head.next;
            return true;
        }
        let currNode = this.head.next;
        let prevNode = this.head;
        while (currNode) {
            if (currNode.value.key == key) {
                prevNode.next = currNode.next;
                return true;
            }
            prevNode = prevNode.next;
            currNode = currNode.next;
        }
        return false;
    }
    clear() {
        this.head = null;
    }
}
class LinkedListNode {
    next;
    value;
    constructor(NodeValue, next) {
        this.next = next;
        this.value = NodeValue;
    }
}
let weatherMap = new MapTest();
weatherMap.set('London', 20);
weatherMap.set("Amsterdam", 15);
weatherMap.set('Berlin', 25);
console.log(weatherMap.get('London')); // Выведет 20
console.log(weatherMap.get("Amsterdam")); // Выведет 15
