const { Vehicle } = require("./vehicleBaseClass");

class Car extends VehicleModule {
    constructor(name, make, type, maximumPassengers, passengers, numberOfWheels, maximumSpeed, fuel, scheduleService){
        super(name, make, type, maximumPassengers, passengers, numberOfWheels, maximumSpeed, fuel, scheduleService)
        this.name = A28;
        this.make = Mercury;
        this.type = Sedan;
        this.maximumPassengers = 5;
        this.passengers = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
}

loadPassenger(num) {
    if (this.passengers < this.maximumPassengers) {
            return availableRoom;
    }else {
            console.log(this.name + "" + " is full");
    }
}

start(){
    if (this.fuel > 0) {
        console.log(this.name + "has started");
    }else {
        console.log("No Fuel");
    }
}

scheduledService(){
    if (this.mileage > 30000) {
        console.log('time for maintenance')
    }return this.scheduleService;
}

let myCar = new Car (A28, Mercury, Sedan, 5, 0, 4, 160, 10, false)

myCar.start()
myCar.loadPassenger(5)
myCar.scheduleService()

console.log(myCar)
