import {Buildout} from '../Buildout';
import {Broker as BrokerListParameters} from '../Parameters/List/Broker';
import {Broker as BrokerObject} from '../Model/Broker';
import {Broker as BrokerResponse} from '../Response/Broker';
import {Broker as BrokerListResponse} from '../Response/List/Broker';

export class Broker extends Buildout {

	private static get PAGE(): string {
		return 'brokers';
	}

	constructor(site: string, apiKey: string) {
		super(site, apiKey);
	}

	public list(limit?: number, offset?: number, email?: string): Promise<BrokerObject[]> {
		let criteria: BrokerListParameters = {
			limit: limit,
			offset: offset,
			email: email
		};

		return this._get(`${Broker.PAGE}.json`, criteria)
			.then((response: BrokerListResponse) => response.brokers);
	}

	public get(id: number): Promise<BrokerObject> {
		return this._get(`${Broker.PAGE}/${id}.json`)
			.then((response: BrokerResponse) => response.broker);
	}
}