import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './_components/header/header.component';
import { PageNotFoundComponent } from './_components/page-not-found/page-not-found.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AdminComponent } from './admin/admin.component';
import { DetailsComponent } from './admin/details/details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailsFormComponent } from './admin/details/details-form/details-form.component';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule, MatSelectModule, MatDialogModule } from '@angular/material';
import { WorksComponent } from './admin/works/works.component';
import { ProducerDetailsComponent } from './admin/producer-details/producer-details.component';
import { HttpCRUDService } from './_shared/services/httpCRUD.service';
import { DetailsService } from './admin/details/_services/details.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { WorksService } from './admin/works/services/works.service';
import { ProducerDetailsService } from './admin/producer-details/services/producer-details.service';
import { AddCarComponent } from './main-page/add-car/add-car.component';
import { AddWorkDetailComponent } from './main-page/add-work-detail/add-work-detail.component';
import { UnitService } from './main-page/add-work-detail/service/unit.service';
import { WorkDetailService } from './main-page/add-work-detail/service/work-detail.service';
import { AddRepairShopComponent } from './main-page/add-repair-shop/add-repair-shop.component';
import { CommonModule } from '@angular/common';
import { MomentModule } from "ngx-moment";
import { AddPhoneComponent } from './main-page/add-phone/add-phone.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    MainPageComponent,
    AdminComponent,
    DetailsComponent,
    DetailsFormComponent,
    WorksComponent,
    ProducerDetailsComponent,
    AddCarComponent,
    AddWorkDetailComponent,
    AddRepairShopComponent,
    AddPhoneComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    CommonModule,
    MomentModule,
  ],
  entryComponents: [
    AddCarComponent,
    AddWorkDetailComponent,
    AddRepairShopComponent,
    AddPhoneComponent,
  ],
  providers: [
    HttpClient,
    //HttpCRUDService,
    DetailsService,
    WorksService,
    UnitService,
    WorkDetailService,
    ProducerDetailsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
