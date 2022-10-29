import {Vehicle} from "../vehicle/vehicle";
import {Plane} from "../plane/plane";
import {Logistics} from "./logistics";

export class AirLogistics extends Logistics {
    public createVehicle(name: string, carryingCapacity: number): Vehicle {
        return new Plane(name, carryingCapacity);
    }
}