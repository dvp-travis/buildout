import {Model} from "../Model";

export interface Document extends Model {

	id?: number;
	url: string;
	name: string;
}