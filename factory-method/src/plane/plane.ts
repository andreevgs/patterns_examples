import {Vehicle} from "../vehicle/vehicle";

export class Plane extends Vehicle {
    constructor(name: string, carryingCapacity: number) {
        super(name, carryingCapacity);
    }

    useForDelivery(): void {
        console.log(`Plane ${this.name} with ${this.carryingCapacity} carrying is used for delivery by air`);
    }
}