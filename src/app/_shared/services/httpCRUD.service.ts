/**
 * CRUD Сервис
 */

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { DataTableConfig } from '../models/data-table-config';
import { environment } from 'src/environments/environment';

export class HttpCRUDService {
    constructor(private _http: HttpClient,
                private _apiUrl) {
    }


    get http(): HttpClient {
        return this._http;
    }

    get apiUrl() {
        return this._apiUrl;
    }

    /**
     * @param config - объект конфигурации get запроса
     * Получения списка всех записей для таблиц (учитывает пагинацию, сортировку и фильтр по строке)
     */
    getAllByConfig<M>(config = new DataTableConfig()): Observable<M> {
        const getParams = this.getQueryParamsString(config);
        return this._http.get<M>(`${this._apiUrl}?${getParams}`);
    }

    getQueryParamsString(config: DataTableConfig) {
        return Object.entries(config)
            .filter(item => !!item[1])
            .map((item) => {
                const paramsName = (item[0] === 'sortBy') ? 'Order[0].FieldName' : item[0] === 'order' ? 'Order[0].SortOrder' : item[0];
                return `${encodeURIComponent(paramsName)}=${encodeURIComponent(this.convertToString(item[1]))}`;
            }).join('&');
    }

    convertToString(item) {
        if (item instanceof Date) {
            return item.toISOString();
        } else {
            return item.toString();
        }
    }

    /**
     * Получения списка всех записей
     */
    getAll<M>(): Observable<M> {
        return this._http.get<M>(`${this._apiUrl}`);
    }

    /**
     * Получения записи по id
     * @param id - id записи
     */
    getById<M>(id: string): Observable<M> {
        return this._http.get<M>(`${this._apiUrl}/${id}`);
    }

    /**
     * Создание записи
     * @param record - запись
     */
    create<M>(record: M | any): Observable<M> {
        return this._http.post<M>(this._apiUrl, record);
    }

    /**
     * Редактирования записи
     * @param id - id записи
     * @param record - запись
     */
    edit<M>(id: string, record: M): Observable<M> {
        return this._http.put<M>(`${this._apiUrl}/${id}`, record);
    }

    /**
     * Удаления записи
     * @param id - id запись
     */
    delete<M>(id: string): Observable<M> {
        return this._http.delete<M>(`${this._apiUrl}/${id}`);
    }
}
