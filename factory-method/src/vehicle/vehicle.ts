export abstract class Vehicle {
    protected constructor(name: string, carryingCapacity: number) {
        this.name = name;
        this.carryingCapacity = carryingCapacity;
    }

    protected carryingCapacity: number;
    protected name: string;

    public abstract useForDelivery(): void;
}
