import {Buildout} from '../Buildout';
import {Property as PropertyListParameters} from '../Parameters/List/Property';
import {Property as PropertyObject} from '../Model/Property';
import {Property as PropertyResponse} from '../Response/Property';
import {Property as PropertyListResponse} from '../Response/List/Property';

export class Property extends Buildout {

	public static get PAGE(): string {
		return 'properties';
	}

	constructor(site: string, apiKey: string) {
		super(site, apiKey);
	}

	public list(limit?: number, offset?: number, on_market_only?: boolean): Promise<PropertyObject[]> {
		let criteria: PropertyListParameters = {
			limit: limit,
			offset: offset,
			on_market_only: on_market_only,
		};

		return this._get(`${Property.PAGE}.json`, criteria)
			.then((response: PropertyListResponse) => response.properties);
	}

	public get(id: number): Promise<PropertyObject> {
		return this._get(`${Property.PAGE}/${id}.json`)
			.then((response: PropertyResponse) => response.property);
	}

	public create(property: PropertyObject): Promise<PropertyObject> {
		return this._post(`${Property.PAGE}.json`, 'property', property)
			.then((response: PropertyResponse) => response.property);
	}

	public update(id: number, property: PropertyObject): Promise<void> {
		return this._put(`${Property.PAGE}/${id}.json`, 'property', property);
	}
}