import {Photo} from "./Photo";
import {DealStatus, LeaseType} from "./enums";
import {Model} from "../Model";

export interface LeaseSpace extends Model {

	id?: number;
	property_id?: number;
	deal_status_id?: DealStatus;
	space_type_id?: number;
	address2?: string;
	suite?: string;
	floor?: string;
	hide_lease_rate?: boolean;
	price_per_sf_per_year?: number;
	price_per_sf_per_year_max?: number;
	lease_rate?: number;
	lease_rate_units?: string;
	size_sf?: number;
	lease_type_id?: LeaseType;
	min_divisible_sf?: number;
	max_contiguous_sf?: number;
	sublease?: boolean;
	sublease_expiration?: Date;
	description?: string;
	date_available?: Date;
	floor_plan_url?: string;
	photos?: Photo[];
}