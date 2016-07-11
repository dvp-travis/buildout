import {Buildout} from '../Buildout';
import {Property} from './Property';
import {Photo} from '../Model/Photo';
import {Photo as PhotoResponse} from '../Response/Photo';

export class PropertyPhoto extends Buildout {

	private static get PAGE(): string {
		return 'photos';
	}

	constructor(site: string, apiKey: string) {
		super(site, apiKey);
	}

	public add(propertyId: number, photo: Photo): Promise<Photo> {
		return this._post(`${Property.PAGE}/${propertyId}/${PropertyPhoto.PAGE}.json`, 'photo', photo)
			.then((response: PhotoResponse) => response.photo);
	}

	public update(propertyId: number, photoId: number, photo: Photo): Promise<void> {
		return this._put(`${Property.PAGE}/${propertyId}/${PropertyPhoto.PAGE}/${photoId}.json`, 'photo', photo);
	}

	public remove(propertyId: number, photoId: number): Promise<void> {
		return this._delete(`${Property.PAGE}/${propertyId}/${PropertyPhoto.PAGE}/${photoId}.json`);
	}
}