import { QueryGenerator, QueryTypes } from "../12-builder/app";

class Proxy {
	private qGen: QueryGenerator;

	constructor () {
		this.qGen = new QueryGenerator();
	}

	async getResponse(id: number) {
		if (id < 10) {
			const res =  await this.qGen
				.setURL(`https://dummyjson.com/products/${id}`)
				.setMethod(QueryTypes.GET)
				.exec();
			return res;
		}
		else {
			throw new Error('Ошибка!');
		}
	}
}

console.log(new Proxy().getResponse(5));
console.log(new Proxy().getResponse(11));