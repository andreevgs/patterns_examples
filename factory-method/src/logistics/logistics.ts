import {Vehicle} from "../vehicle/vehicle";

export abstract class Logistics {
    public abstract createVehicle(name: string, carryingCapacity: number): Vehicle;

    public deliveryOperation(vehicle: Vehicle): void {
        vehicle.useForDelivery();
    };
}