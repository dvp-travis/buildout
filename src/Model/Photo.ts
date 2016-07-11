import {Model} from "../Model";

export interface Photo extends Model {

	id?: number;
	data?: string;
	url?: string;
	type?: string;
	description?: string;
	sort_order?: number;
}