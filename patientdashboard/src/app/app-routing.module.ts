import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EncountersComponent } from './encounters/encounters.component';
import { PatientInfoComponent } from './patient-info/patient-info.component';
import { VitalsComponent } from './vitals/vitals.component';
import { PatientComponent } from './patient/patient.component';

const routes: Routes = [
  {
    path: ':patient_uuid',
    component: PatientComponent,
    children: [
      {
        path: 'encounters',
        component: EncountersComponent
      },
      {
        path: 'patient-info',
        component: PatientInfoComponent
      },
      {
        path: 'vitals',
        component: VitalsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
