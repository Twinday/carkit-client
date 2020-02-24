export interface IProducerDetails {
    id: number;
    name: string;
    trustLevel: number;
}

export class Work implements IProducerDetails {
    id = 0;
    name = '';
    trustLevel = 0;

    constructor(data: Partial<IProducerDetails>) {
        this.id = data.id || this.id;
        this.name = data.name || this.name;
        this.trustLevel = data.trustLevel || this.trustLevel;
    }
}