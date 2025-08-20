class User {
  @allowFunc((a: number) => a > 0)
  age: number = 30;
}

const person = new User();
console.log(person.age); // 30

person.age = 0;
console.log(person.age); // 30

person.age = 20;
console.log(person.age); // 20


function allowFunc<This>(func: (arg: any) => boolean) {
	return (target: undefined, context: ClassFieldDecoratorContext<This, any>) => {
 		let value: any;
		const getter = () => {
			return value;
		}
		const setter = (newValue: typeof value) => {
			if (func(newValue)) {
				value = newValue;		
			}	
		}
		context.access.get = getter;
		context.access.set = setter;
		//console.log(context);	
	}
}
const user1 = new User();
user1.age = 20;
user1.age = -5;
