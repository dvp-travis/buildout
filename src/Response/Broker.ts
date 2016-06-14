import {Response} from "../Response";
import {Broker as BrokerObject} from "../Model/Broker";

export interface Broker extends Response {

	broker: BrokerObject;
}