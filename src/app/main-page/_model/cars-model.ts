export interface ICarCardView {
    id: number;
    name: string;
    producer: string;
    year: number;
    modelCarId: number;
}

export interface ICarInput {
    carCardId: number;
    kilometrage: number;
    name: string;
    producer: string;
    year: number;
    modelCarId: number;
}

export interface ICar {
    id: number;
    carCardId: number;
    kilometrage: number
    VIN: string;
    userId?: number;
}

export class Car implements ICar {
    id = 0;
    carCardId = 0;
    kilometrage = 0;
    VIN = '';
    userId = null;

    constructor(data: Partial<ICar>) {
        this.id = data.id || this.id;
        this.carCardId = data.carCardId || this.carCardId;
        this.kilometrage = data.kilometrage || this.kilometrage;
        this.VIN = data.VIN || this.VIN;
        this.userId = data.userId || this.userId;
    }
}