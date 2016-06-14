import {List} from "../List";
import {Property as PropertyObject} from "../../Model/Property";

export interface Property extends List {

	properties: PropertyObject[];
}