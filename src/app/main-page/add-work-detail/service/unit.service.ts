import { Injectable } from '@angular/core';
import { HttpCRUDService } from 'src/app/_shared/services/httpCRUD.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UnitService extends HttpCRUDService {

  constructor(http: HttpClient) {
    super(http, `${environment.api}/Units`);
   }
}
