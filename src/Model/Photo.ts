import {Model} from "../Model";

export interface Photo extends Model {

	id?: number;
	url: string;
	type?: string;
	description?: string;
	sort_order?: number;
}