import {Logistics} from "./src/logistics/logistics";
import {RoadLogistics} from "./src/logistics/road-logistics";
import {SeaLogistics} from "./src/logistics/sea-logistics";
import {AirLogistics} from "./src/logistics/air-logistics";

interface Environment {
    newVehicle: {
        vehicleName: string,
        vehicleCarrying: number
    }
}

function clientCode(logistics: Logistics, environment: Environment) {
    const vehicle = logistics.createVehicle(
        environment.newVehicle.vehicleName,
        environment.newVehicle.vehicleCarrying
    );
    logistics.deliveryOperation(vehicle);
}

console.log('App: launched with road logistics');
clientCode(new RoadLogistics(), {newVehicle: {vehicleName: 'TruckName', vehicleCarrying: 30}});

console.log('App: launched with sea logistics');
clientCode(new SeaLogistics(), {newVehicle: {vehicleName: 'ShipName', vehicleCarrying: 500}});

console.log('App: launched with air logistics');
clientCode(new AirLogistics(), {newVehicle: {vehicleName: 'PlaneName', vehicleCarrying: 100}});
