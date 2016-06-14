import {Response} from "../Response";
import {LeaseSpace as LeaseSpaceObject} from "../Model/LeaseSpace";

export interface LeaseSpace extends Response {

	lease_space: LeaseSpaceObject;
}