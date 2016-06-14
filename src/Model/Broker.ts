import {Model} from "../Model";

export interface Broker extends Model {

	id?: number;
	company_id?: number;
	first_name?: string;
	last_name?: string;
	phone_number?: string;
	cell_phone?: string;
	email?: string;
	company_office_id?: number;
	address?: string;
	address2?: string;
	city?: string;
	state?: string;
	zip?: string;
	job_title?: string;
	biography?: string;
	profile_photo_url?: string;
	external_id?: number;
}