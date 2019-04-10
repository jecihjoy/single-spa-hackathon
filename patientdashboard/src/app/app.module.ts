import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';

import { EncountersComponent } from './encounters/encounters.component';
import { PatientInfoComponent } from './patient-info/patient-info.component';
import { VitalsComponent } from './vitals/vitals.component';
import { PatientBannerComponent } from './patient-banner/patient-banner.component';
import { PatientService } from './services/patient.service';
import { VitalsService } from './services/vitals.service';
import { EncountersService } from './services/encounters.service';
import { PatientComponent } from './patient/patient.component';
import { AutheticationService } from './services/authentication.service';
import { PocHttpInteceptor } from './services/poc-http-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    EncountersComponent,
    PatientInfoComponent,
    VitalsComponent,
    PatientBannerComponent,
    PatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/patientdashboard' },
    PatientService, VitalsService,
  { provide: HTTP_INTERCEPTORS, useClass: PocHttpInteceptor, multi: true },
    EncountersService, AutheticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
