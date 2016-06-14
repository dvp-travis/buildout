import {Response} from "../Response";
import {Photo as PhotoObject} from "../Model/Photo";

export interface Photo extends Response {

	photo: PhotoObject;
}