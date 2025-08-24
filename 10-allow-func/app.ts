class User {
  @allowFunc((a: number) => a > 0)
  age: number = 30;
}

const person = new User();
//console.log(person.age); // 30

person.age = 0;
//console.log(person.age); // 30

person.age = 20;
//console.log(person.age); // 20


function allowFunc<This>(func: (arg: number) => boolean) {
	return (target: undefined, context: ClassFieldDecoratorContext<This, number>) => {
 		let value: number = 30;
		const getter = () => {
			return value;
		}
		const setter = (object: This, newValue: number) => {
			if (func(newValue)) {
				value = newValue;		
			}	
		}
		context.access.get = getter;
        context.access.set = setter;
		
	}
}

