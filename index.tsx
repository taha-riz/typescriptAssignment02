abstract class Vehicle {
  _make: string;
  _model: string;
  _year: string;
  _rented: boolean;
  constructor(make: string, model: string, year: string, rented: boolean) {
    this._make = make;
    this._model = model;
    this._year = year;
    this._rented = rented;
  }

  getMake() {
    return this._make;
  }

  getModel() {
    return this._model;
  }

  getYear() {
    return this._year;
  }

  getRented() {
    return this._rented;
  }

  setRented(isRented: boolean) {
    this._rented = isRented;
  }

  abstract rentalRate(): number;

  rent() {
    if (this._rented) {
      console.log(`Sorry! The vehicle ${this._make} is rented at ${this.rentalRate()}.`);
    } else {
      this._rented = true;
      console.log(`You have successfully rented this vehicle ${this._make}.`);
    }
  }

  return() {
    if (this._rented) {
      this._rented = false;
      console.log(`Thank you for returning the vehicle ${this._make}.`);
    } else {
      console.log(`Sorry! The vehicle ${this._make} is not currently rented.`);
    }
  }
}

class Car extends Vehicle {
  _numberOfDoors: number;
  _numberOfSeats: number;
  constructor(
    make: string,
    model: string,
    year: string,
    rented: boolean,
    numberOfDoors: number,
    numberOfSeats: number
  ) {
    super(make, model, year, rented);
    this._numberOfDoors = numberOfDoors;
    this._numberOfSeats = numberOfSeats;
  }
  rentalRate(): number {
    return 500;
  }
}

class Truck extends Vehicle {
  _horsePower: number;
  constructor(
    make: string,
    model: string,
    year: string,
    rented: boolean,
    horsePower: number
  ) {
    super(make, model, year, rented);
    this._horsePower = horsePower;
  }

  rentalRate(): number {
    return 1000;
  }
}

class Motorcycle extends Vehicle {
  _engineCapacity: number;
  constructor(
    make: string,
    model: string,
    year: string,
    rented: boolean,
    engineCapacity: number
  ) {
    super(make, model, year, rented);
    this._engineCapacity = engineCapacity;
  }

  rentalRate(): number {
    return 200;
  }
}

// In the main program, create instances of each type of vehicle and test the rent. 

function main() {
  const car1 = new Car("Mercedes", "Benz", "2008", false, 4, 4);
  const car2 = new Car("Ford", "F-150", "2021", true, 4, 4);
  const truck1 = new Truck("Tata", "G-150", "2021", false, 2000);
  const motorcycle1 = new Motorcycle("Honda", "CBR600RR", "2020", true, 600);

  car1.rent(); //You have successfully rented this vehicle Mercedes.
  car2.return(); //Thank you for retuerning the vehicle Ford.

  console.log(car1.getRented()); // true

  car1.return(); // Thank you for returning the vehicle Mercedes.
  car2.rent(); // You have successfully rented this vehicle Ford.
  car2.rent(); // Sorry! The vehicle Ford is rented at 500.

  console.log(car1.rentalRate()); // 500
  console.log(truck1.rentalRate()); // 1000
  console.log(motorcycle1.rentalRate()); // 200
}

main();
