import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { AuthenticationService } from './patient-search/services/authentication.service';
import { PocHttpInteceptor } from './patient-search/services/poc-http-interceptor';
import { PatientSearchComponent } from './patient-search/patient-search.component';
import { PatientSearchService } from './patient-search/services/patient-search.service';

@NgModule({
  declarations: [
    AppComponent,
    PatientSearchComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/patientsearch'},
    AuthenticationService,
    PatientSearchService,
    {provide: HTTP_INTERCEPTORS, useClass: PocHttpInteceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
