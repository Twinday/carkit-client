import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpCRUDService } from 'src/app/_shared/services/httpCRUD.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarCardService extends HttpCRUDService {

  constructor(http: HttpClient) {
    super(http, `${environment.api}/CarCards`);
   }
}
