import { Injectable } from '@angular/core';
import { HttpCRUDService } from 'src/app/_shared/services/httpCRUD.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarService extends HttpCRUDService {

  constructor(http: HttpClient) {
    super(http, `${environment.api}/Cars`);
   }
}
