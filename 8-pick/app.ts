const user = {
  name: "Vasiliy",
  age: 8,
  skills: ["typescript", "javascript"],
};

function pickObjectKeys<T extends Record<string, any>>(obj: T, props: (keyof T)[]): Record<keyof T, any>{
  const newProps = [];

  for (const p of props) {
		newProps.push([p, obj[p]]); 
	} 

  return Object.fromEntries(newProps);
}

const res1 = pickObjectKeys<typeof user>(user, ["age", "skills"]);
console.log(res1);