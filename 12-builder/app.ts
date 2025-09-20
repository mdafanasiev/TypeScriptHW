import axios, { Axios, AxiosHeaders } from 'axios';

export enum QueryTypes {
  GET = "GET",
  POST = "POST",
  DELETE = "DELETE",
}

export class QueryGenerator {
	private url: string;
	private method: QueryTypes;
	private headers: AxiosHeaders;
	private body: string; 
	

	setMethod(qType: QueryTypes) {
		this.method = qType;
		return this;
	}

	setURL(url: string) {
		this.url = url;
		return this
	}

	setHeaders(headers: AxiosHeaders) {
		this.headers = headers;
		return this;
	}
	
	setBody(body: string) {
		this.body = body;
		return this;
	}

	async exec() {
		const { data: res } = await axios.request({
		url: this.url,
		method: this.method,
		headers: this.headers,
		data: this.body,
		});
		return res;
	}
}

const qGenerator = new QueryGenerator();
const res = qGenerator.setURL("https://api.escuelajs.co/api/v1/products").setMethod(QueryTypes.GET).exec();