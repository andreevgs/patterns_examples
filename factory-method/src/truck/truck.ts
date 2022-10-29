import {Vehicle} from "../vehicle/vehicle";

export class Truck extends Vehicle {
    constructor(name: string, carryingCapacity: number) {
        super(name, carryingCapacity);
    }

    useForDelivery(): void {
        console.log(`Truck ${this.name} with ${this.carryingCapacity} carrying is used for delivery by land`);
    }
}