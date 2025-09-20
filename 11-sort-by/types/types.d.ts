declare module 'sort-by' {
	export function sortBy<T>(...sortFields: string[]): (obj1: T, obj2: T) => number;
}