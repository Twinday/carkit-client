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
import { MatInputModule, MatSelectModule } from '@angular/material';
import { WorksComponent } from './admin/works/works.component';
import { ProducerDetailsComponent } from './admin/producer-details/producer-details.component';
import { HttpCRUDService } from './_shared/services/httpCRUD.service';
import { DetailsService } from './admin/details/_services/details.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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
  ],
  providers: [
    HttpClient,
    //HttpCRUDService,
    DetailsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
