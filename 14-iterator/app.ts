interface IIterator<T> {
	current(): T | undefined;
	next(): T | undefined;
	prev(): T | undefined;
	index(): number | undefined;
	printElements(): void;
} 

type objT = {id: number, date: string, title: string};

class TestList {
	private iterator: IIterator<objT>;

	constructor(private items: objT[]) {
		this.items = items;
	}

	getItem(index: number): objT | undefined {
		if (index < this.items.length) {
			return this.items[index];
		}
	}

	sortByID(order: 'ASC' | 'DESC' = 'ASC') {
		this.items.sort((a, b) => a.id - b.id );
	}

	sortByDate(order: 'ASC' | 'DESC' = 'ASC') {
	
		this.items.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
	}	
}

class TestListIterator implements IIterator<objT> {
  private pos: number = 0;

  constructor(protected list: TestList) {
    this.list = list;
  }

  current(): objT | undefined {
    return this.list.getItem(this.pos);
  }

  next(): objT | undefined {
    return this.list.getItem(this.pos++);
  }

  prev(): objT | undefined {
    return this.list.getItem(this.pos--);
  }

  index(): number | undefined {
    return this.pos;
  }

  printElements(): void {
    while (this.current()) {
      console.log(this.current());
      this.next();
    }
  }
} 
class IDIterator extends TestListIterator {

  constructor(list: TestList) {
    super(list);
	this.list.sortByID();
  }
}

class DateIterator extends TestListIterator {

  constructor(list: TestList) {
	super(list);
	this.list.sortByDate();
  }

}

const testList = new TestList([
  { id: 5, date: "1931-01-01", title: "5" },
  { id: 4, date: "1933-01-01", title: "4" },
  { id: 3, date: "1932-01-01", title: "3" },
]);
const idIterator = new IDIterator(testList);
const dateIterator = new DateIterator(testList);

idIterator.printElements();
console.log('///////////////////////////////////////////')
dateIterator.printElements();
