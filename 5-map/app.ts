class MapTest {
  private hashList: LinkedList[] = [];
  private maxHashesCount: number = 100;

  add(key: string, value: PrimitiveType): this {
    const hash = this.hash(key);
    if (this.hasElems(this.hashList[hash]))
      this.hashList[hash] = new LinkedList();
    
	this.hashList[hash].add({ key, value });
    return this;
  }

  delete(key: string): boolean {
    const hash = this.hash(key);
    if (this.hasElems(this.hashList[hash])) {
      return false;
    }
    return this.hashList[hash].delete(key);
  }

  get(key: string): PrimitiveType | undefined {
    const hash = this.hash(key);
    if (this.hasElems(this.hashList[hash])) {
      return undefined;
    }

    return this.hashList[hash].find(key);
  }

  clear(): undefined {
	this.hashList = [];
  }

  private hash(key: string): number {
    return key.length % this.maxHashesCount;
  }

  private hasElems(hashElement: LinkedList | undefined): hashElement is undefined {
	return typeof hashElement == "undefined";
  } 
}

class LinkedList {
  head: LinkedListNode | null;

  constructor() {
    this.head = null;
  }

  add(NodeValue: NodeValue): void {
	this.head = new LinkedListNode(NodeValue, this.head);
  }

  find(key: string) {
	if (!this.head) {
    	return undefined;
  	}

	let currNode: LinkedListNode | null = this.head;
	while(currNode) {
		if (currNode.value.key == key) {
			return currNode.value.value;
		}
		currNode = currNode.next;
	}

	return undefined;
  }

  delete(key: string): boolean {
	if (!this.head) {
       return false;
    }

	if (this.head.value.key = key) {
		this.head = null;
		return true;
	}

	let currNode = this.head.next;
	let prevNode: LinkedListNode | null = this.head;

  	while (currNode) {
      if (currNode.value.key == key) {
		prevNode!.next = currNode.next;
		return true;
      }

	  prevNode = prevNode!.next;
      currNode = currNode.next;
    }

	return false;
  }

  clear() {
	this.head = null;
  }
}

type PrimitiveType = number | string | boolean | bigint;

type NodeValue = {
  key: string;
  value: PrimitiveType;
};

class LinkedListNode {
  next: LinkedListNode | null;
  value: NodeValue;

  constructor(NodeValue: NodeValue, next: LinkedListNode | null) {
    this.next = next;
    this.value = NodeValue;
  }
}

let weatherMap = new MapTest();
weatherMap.add('London', 20);
weatherMap.add("Amsterdam", 15);
weatherMap.add('Berlin', 25);
console.log(weatherMap.get('London')); // Выведет 20
console.log(weatherMap.get("Amsterdam")); // Выведет 15