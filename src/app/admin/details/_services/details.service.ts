import { Injectable } from '@angular/core';
import { HttpCRUDService } from 'src/app/_shared/services/httpCRUD.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { TimePeriodSearchData } from 'src/app/main-page/_model/work-details-model';

@Injectable({
  providedIn: 'root'
})
export class DetailsService extends HttpCRUDService {

  constructor(http: HttpClient) {
    super(http, `${environment.api}/Details`);
   }
}
