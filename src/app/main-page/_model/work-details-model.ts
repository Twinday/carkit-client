import { DataTableConfig } from 'src/app/_shared/models/data-table-config';

export interface IWorkDetailConfig extends DataTableConfig {
    modelCarId: number;
    kilometrage: number;
}

export class WorkDetailConfig extends DataTableConfig implements IWorkDetailConfig {
    modelCarId = 0;
    kilometrage = 0;

    constructor(data: Partial<IWorkDetailConfig> = {}) {
        super();
        this.modelCarId = data.modelCarId || this.modelCarId;
        this.kilometrage = data.kilometrage || this.kilometrage;
    }
}

export interface IDetailListView {
    id: number;
    name: string;   
    modelCarIds: number[];
}

export interface IWorkListView {
    id: number;
    name: string;
    details: IDetailListView[];
}

export interface IWorkSearchResult {
    totalCount: number;
    worksForCar: IWorkListView[];
    otherWorks: IWorkListView[];
}