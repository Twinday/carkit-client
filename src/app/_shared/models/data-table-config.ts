/**
 * Базовый интерфейс конфигурации таблицы
 */
export interface IDataTableConfig {
    pageSize: number | '';
    pageNumber: number;
    order: 'asc' | 'desc';
    sortBy: string;
    searchText: string;
    getTotalCount: boolean;
}

/**
 * Базовая модель конфигурации таблицы
 */
export class DataTableConfig implements IDataTableConfig {
    pageSize = 10;
    pageNumber = 0;
    order: 'asc' | 'desc' = 'asc';
    sortBy = 'name';
    searchText = '';
    getTotalCount = true;

    constructor(data: Partial<IDataTableConfig> = {}) {
        if (typeof data.pageSize === 'number') {
            this.pageSize = data.pageSize;
        }
        if (typeof data.pageNumber === 'number') {
            this.pageNumber = data.pageNumber;
        }
        this.order = data.order || this.order;
        this.sortBy = data.sortBy || this.sortBy;
    }
}