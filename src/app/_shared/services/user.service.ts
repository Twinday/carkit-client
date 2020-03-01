import { Injectable } from '@angular/core';
import { HttpCRUDService } from './httpCRUD.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService extends HttpCRUDService {

  constructor(http: HttpClient) {
    super(http, `${environment.api}/Users`);
   }
}
