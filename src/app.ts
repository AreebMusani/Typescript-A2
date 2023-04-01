 abstract class Vehicle{
    private _make :string;
    private _model : string; 
    private _year : number;
    private _rented: boolean = false;

    constructor(make: string, model : string, year: number, rented: boolean){
        this._make = make;
        this._model = model;
        this._year = year;
        this._rented = rented;
    }
    // constructor(
    //     private _make :string,
    //     private _model : string, 
    //     private _year : number,
    //     private _rented: boolean
    // ){}

    get make(){
        return this._make;
    }
    get model(){
        return this._model;
    }
    get year(){
        return this._year;
    }
    get rented(){
        return this._rented;
    }

    set rented(rent: boolean){
        this._rented = rent;
    }

    abstract rentalRate(): number;

    rent(): void{
        if(this.rented){
            console.log("This Vehicle is already on rent...");
        }else{
            this.rented = true;
            console.log("Congratulations! You have rented this Vehicle..."); 
        }
    } 

    return(): void{
        if(this.rented){
            this.rented = false;
            console.log("Vehicle has been returned...");
        }else{
            console.log("Vehicle is already available for rent...");
        }
    }

    details(){
        console.log("Vehicle Name: " + this.make + " " + this.model);
        console.log("Year: " + this.year);
        console.log("is this available Now? " + !this.rented);
    }
}

class Car extends Vehicle{
    constructor(
        make :string,
        model : string, 
        year : number,
        rented: boolean,
        private _color: string,
        private _sitingCapacity:number,
        private _condition: "New" | "Used"

    ){
        super(make, model, year, rented);
    }

    rentalRate(): number{
        const standardRate = 3000;
        const rate = this.condition === "New" ? standardRate * 1.5 : standardRate;
        return rate;
    }

    get color(){
        return this._color;
    }
    get condition(){
        return this._condition;
    }
    get sitingCapacity(){
        return this._sitingCapacity;
    }
}

class Truck extends Vehicle{
    constructor(
        make :string,
        model : string, 
        year : number,
        rented: boolean,
        private _loadingCapacityinKG: number,
        private _noOfTyres: number,
        private _condition: "New" | "Used"
    ){
        super(make, model, year, rented);
    }

    rentalRate(): number{
        const standardRate = 5000;
        const rate = this.condition === "New" ? standardRate * 1.5 : standardRate;
        return rate;
    }

    get loadingCapacityinKG(){
        return this._loadingCapacityinKG;
    }
    get noOfTyres(){
        return this._noOfTyres;
    }
    get condition(){
        return this._condition;
    }
} 

class Motorcycle extends Vehicle{
    constructor(
        make :string,
        model : string, 
        year : number,
        rented: boolean,
        private _engineSpeed: "70CC" | "125CC",
        private _condition: "New" | "Used"
    ){
        super(make, model, year, rented);
    }

    rentalRate(): number{
        const standardRate = 1000;
        let rate = this.condition === "New" ? standardRate * 1.5 : standardRate;
        rate = this.engineSpeed === "125CC" ? rate * 1.2 : rate;
        return rate;
    }

    get engineSpeed(){
        return this._engineSpeed;
    }
    get condition(){
        return this._condition;
    }
}

// Car Instance
const car = new Car("Honda", "Civic", 2023, false, "white", 5, "New");
car.details();
console.log("Vehicle Rent: " + car.rentalRate());
console.log("Before Rent: Rental Status: " + car.rented);
car.rent();
console.log("After Rent: Rental Status: " + car.rented);
car.return();
console.log("After Return: Rental Status: " + car.rented);

console.log("\n\n\n\n");

// truck Instance
const truck = new Truck("Suzuki", "Mazda", 2010, true, 250, 5, "Used");
truck.details();
console.log("Vehicle Rent: " + truck.rentalRate());
console.log("Before Rent: Rental Status: " + truck.rented);
truck.rent();
console.log("After Rent: Rental Status: " + truck.rented);
truck.return();
console.log("After Return: Rental Status: " + truck.rented);

console.log("\n\n\n\n");

// motorcycle Instance
const motorcycle = new Motorcycle("Honda", "CG", 2022, false, "125CC", "Used");
motorcycle.details();
console.log("Vehicle Rent: " + motorcycle.rentalRate());
console.log("Before Rent: Rental Status: " + motorcycle.rented);
motorcycle.rent();
console.log("After Rent: Rental Status: " + motorcycle.rented);
motorcycle.return();
console.log("After Return: Rental Status: " + motorcycle.rented);
