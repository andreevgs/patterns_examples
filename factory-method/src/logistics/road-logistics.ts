import {Vehicle} from "../vehicle/vehicle";
import {Truck} from "../truck/truck";
import {Logistics} from "./logistics";

export class RoadLogistics extends Logistics {
    public createVehicle(name: string, carryingCapacity: number): Vehicle {
        return new Truck(name, carryingCapacity);
    }
}