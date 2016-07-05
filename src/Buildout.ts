import Promise = require('bluebird');
import request = require('request');
import http = require('http');
import {Parameters} from './Parameters';
import {Model} from './Model';
import {Response} from './Response';

export abstract class Buildout { 

	private url: string;

	constructor(site: string, apiKey: string) {
		this.url = site + '/' + apiKey;
	}

	private doRequest(options: request.Options): Promise<any> {
		return new Promise<any>((resolve: Resolve, reject: Reject) => {
			request(options, (error: any, response: http.IncomingMessage, body: any) => {
				if (error) {
					return reject(error);
				}

				if (body == ' ') {
					return resolve();
				}

				resolve(body);
			});
		});
	}

	protected _get(address: string, criteria?: Parameters): Promise<Response> {
		let url: string = this.url + '/' + address;
		let options: request.Options = {
			method: 'GET',
			url: url,
			json: true,
			qs: criteria,
		};

		return this.doRequest(options);
	}

	protected _post(address: string, key: string, model: Model): Promise<Response> {
		let url: string = this.url + '/' + address;
		let form: {[key: string]: Model} = {};
		form[key] = model;
		let options: request.Options = {
			method: 'POST',
			url: url,
			json: true,
			form: form,
		};

		return this.doRequest(options);
	}

	protected _put(address: string, key: string, model: Model): Promise<void> {
		let url: string = this.url + '/' + address;
		let form: {[key: string]: Model} = {};
		form[key] = model;
		let options: request.Options = {
			method: 'PUT',
			url: url,
			form: form,
		};

		return this.doRequest(options);
	}

	protected _delete(address: string): Promise<void> {
		let url: string = this.url + '/' + address;
		let options: request.Options = {
			method: 'DELETE',
			url: url,
		};

		return this.doRequest(options);
	}
}

interface Resolve {

	(response?: Object): void;
}

interface Reject {

	(error: any): void;
}