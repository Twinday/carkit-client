import { ILinkedOrderDetail } from './linked-order-detail-model';

export interface IOrder {
    id: number;
    carId: number;
    repairShopId: number;
    date: Date;
    timePeriod: number;
    cost: number;
    linkedOrderDetails: ILinkedOrderDetail[];
}

export class Order implements IOrder {
    id = 0;
    carId = 0;
    repairShopId = 0;
    date = new Date;
    timePeriod = 0;
    cost = 0;
    linkedOrderDetails = [];

    constructor(data: Partial<IOrder>) {
        this.id = data.id || this.id;
        this.carId = data.carId || this.carId;
        this.repairShopId = data.repairShopId || this.repairShopId;
        this.date = data.date || this.date;
        this.timePeriod = data.timePeriod || this.timePeriod;
        this.cost = data.cost || this.cost;
        this.linkedOrderDetails = data.linkedOrderDetails || this.linkedOrderDetails;
    }
}