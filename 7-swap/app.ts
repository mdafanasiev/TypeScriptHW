function swapKeysAndValues(obj: Record<string, number>): Record<number, string> {
	let kvMap = new Map<number, string>();

  for (const [key, value] of Object.entries(obj)) {
    kvMap.set(value, key);
  }

  const res: Record<number, string> = Object.fromEntries(kvMap);
  return res;
}

const obj: Record<string, number> = {
  a: 1,
  b: 2
}

const res = swapKeysAndValues(obj);
console.log(res);
/*
{
  1: 'a',
  2: 'b'
}
*/