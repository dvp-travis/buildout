import {List} from "../List";
import {LeaseSpace as LeaseSpaceObject} from "../../Model/LeaseSpace";

export interface LeaseSpace extends List {

	lease_spaces: LeaseSpaceObject[];
}