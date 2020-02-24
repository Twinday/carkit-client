export interface IWork {
    id: number;
    name: string;
}

export class Work implements IWork {
    id = 0;
    name = '';

    constructor(data: Partial<IWork>) {
        this.id = data.id || this.id;
        this.name = data.name || this.name;
    }
}