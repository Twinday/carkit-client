export interface ILinkedOrderDetail {
    id: number;
    orderId: number
    detailId: number;
    detailName: string;
    count: number;
    unitId: number;
    unitName: string;
}

export class LinkedOrderDetail implements ILinkedOrderDetail{
    id = 0;
    orderId = 0;
    detailId = 0;
    detailName = '';
    count = 0;
    unitId = 0;
    unitName = '';

    constructor(data: Partial<ILinkedOrderDetail> = {}) {
        this.id = data.id || this.id;
        this.orderId = data.orderId || this.orderId;
        this.detailId = data.detailId || this.detailId;
        this.detailName = data.detailName || this.detailName;
        this.count = data.count || this.count;
        this.unitId = data.unitId || this.unitId;
        this.unitName = data.unitName || this.unitName;
    }
}