import {Buildout} from '../Buildout';
import {LeaseSpace as LeaseSpaceObject} from '../Model/LeaseSpace';
import {List as ListParameters} from '../Parameters/List';
import {LeaseSpace as LeaseSpaceResponse} from '../Response/LeaseSpace';
import {LeaseSpace as LeaseSpaceListResponse} from '../Response/List/LeaseSpace';

export class LeaseSpace extends Buildout {

	public static get PAGE(): string {
		return 'lease_spaces';
	}

	constructor(site: string, apiKey: string) {
		super(site, apiKey);
	}

	public list(limit?: number, offset?: number): Promise<LeaseSpaceObject[]> {
		let criteria: ListParameters = {
			limit: limit,
			offset: offset,
		};

		return this._get(`${LeaseSpace.PAGE}.json`, criteria)
			.then((response: LeaseSpaceListResponse) => response.lease_spaces);
	}

	public get(id: number): Promise<LeaseSpaceObject> {
		return this._get(`${LeaseSpace.PAGE}/${id}.json`)
			.then((response: LeaseSpaceResponse) => response.lease_space);
	}

	public create(leaseSpace: LeaseSpaceObject): Promise<LeaseSpaceObject> {
		return this._post(`${LeaseSpace.PAGE}.json`, 'lease_space', leaseSpace)
			.then((response: LeaseSpaceResponse) => response.lease_space);
	}

	public update(id: number, leaseSpace: LeaseSpaceObject): Promise<void> {
		return this._put(`${LeaseSpace.PAGE}/${id}.json`, 'lease_space', leaseSpace);
	}
}