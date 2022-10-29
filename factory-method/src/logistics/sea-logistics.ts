import {Vehicle} from "../vehicle/vehicle";
import {Ship} from "../ship/ship";
import {Logistics} from "./logistics";

export class SeaLogistics extends Logistics {
    public createVehicle(name: string, carryingCapacity: number): Vehicle {
        return new Ship(name, carryingCapacity);
    }
}