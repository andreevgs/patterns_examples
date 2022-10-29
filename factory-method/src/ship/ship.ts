import {Vehicle} from "../vehicle/vehicle";

export class Ship extends Vehicle {
    constructor(name: string, carryingCapacity: number) {
        super(name, carryingCapacity);
    }

    useForDelivery(): void {
        console.log(`Ship ${this.name} with ${this.carryingCapacity} carrying is used for delivery by sea`);
    }
}