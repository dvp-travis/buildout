import {List} from "../List";
import {Broker as BrokerObject} from "../../Model/Broker";

export interface Broker extends List {

	brokers: BrokerObject[];
}