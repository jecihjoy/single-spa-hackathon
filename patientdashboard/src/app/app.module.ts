import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    AppRoutingModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/patientdashboard' }, PatientService, VitalsService, EncountersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
