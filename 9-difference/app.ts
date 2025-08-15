interface IA {
  a: number;
  b: string;
}

interface IB {
  a: number;
  c: boolean;
}

let a: IA = { a: 5, b: "" };
let b: IB = { a: 10, c: true };

interface IDifference {
  b: string;
}

//let v0: IDifference = difference(a, b);
type objKey = string | number | symbol;
type objType = Record<objKey, any>;

type RType<K extends objType, V extends objType> = Record<keyof Omit<keyof K, keyof V>, any>;
function difference<Obj1 extends objType, Obj2 extends objType>(
  obj1: Obj1,
  obj2: Obj2
): RType<Obj1, Obj2> {
	const newObj: RType<typeof obj1, typeof obj2> = {...obj1};
	for (const key of Object.keys(newObj)) {
    if (obj2.hasOwnProperty(key)) {
		delete newObj[key];
    }
  }

	return newObj;
}

console.log(difference(a, b));
