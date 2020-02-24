export interface IDetail {
    id: number;

    // Название.
    name: string;

    // Стоимость.
    cost: number;

    // Идентификатор вида работы.
    workId: number;

    // Идентификатор производителя детали.
    producerDetailsId: number;

    // Производитель детали (ручной ввод).
    producerDetailsWritten: string;

    // Уровень доверия производителя детали (целое число).
    trustLevel: number;
}

export class Detail implements IDetail {
    id = 0;
    name = '';
    cost = 0;
    workId = 0;
    producerDetailsId = null;
    producerDetailsWritten = '';
    trustLevel = 0;

    constructor(data: Partial<IDetail>) {
        this.id = data.id || this.id;
        this.name = data.name || this.name;
        this.cost = data.cost || this.cost;
        this.workId = data.workId || this.workId;
        this.producerDetailsId = data.producerDetailsId || this.producerDetailsId;
        this.producerDetailsWritten = data.producerDetailsWritten || this.producerDetailsWritten;
        this.trustLevel = data.trustLevel || this.trustLevel;
    }
}