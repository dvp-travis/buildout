import {Response} from "../Response";
import {Property as PropertyObject} from "../Model/Property";

export interface Property extends Response {

	property: PropertyObject;
}