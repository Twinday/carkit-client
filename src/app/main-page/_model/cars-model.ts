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